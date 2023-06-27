#!/usr/bin/env node

const path = require("path");
const axios = require("axios");
const fs = require("fs");
const aws4 = require("aws4");
const mime = require("mime-types");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

if (!process.env.STAGE) {
  console.error("process.env.STAGE was not loaded");
  process.exit(1);
}

const MFE_PACKAGE_JSON = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), "./package.json"), "utf8")
);

const MFE_FOLDER_NAME = path.basename(process.cwd());
const MFE_DIST_FOLDER_PATH = path.resolve(process.cwd(), "./dist");

const MFE_JS_FILE_NAME = MFE_PACKAGE_JSON.name
  .replace("@", "")
  .replace(/\//g, "-");

const BUCKET_NAME = `typer-app-mfe-${process.env.STAGE}`;
const SERVICE_NAME = MFE_PACKAGE_JSON.name;
const SERVICE_URL = `https://${BUCKET_NAME}.s3.amazonaws.com/${MFE_FOLDER_NAME}/${MFE_JS_FILE_NAME}.js`;

const s3 = new S3Client({ region: process.env.REGION || "us-east-1" });

const getFiles = (file, files = []) => {
  const filePath = path.join(MFE_DIST_FOLDER_PATH, file);
  const fileStats = fs.statSync(filePath);

  if (fileStats.isFile() && path.extname(file) === ".js") {
    files.push(file);
  }

  if (fileStats.isDirectory()) {
    const dirFiles = fs.readdirSync(filePath);
    dirFiles.forEach((dirFile) => {
      getFiles(path.join(file, dirFile), files);
    });
  }
};

const uploadFiles = async () => {
  const distDir = fs.readdirSync(MFE_DIST_FOLDER_PATH);
  const files = [];

  distDir.forEach((file) => {
    getFiles(file, files);
  });

  await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(MFE_DIST_FOLDER_PATH, file);
      const fileStream = fs.createReadStream(filePath);
      await s3.send(
        new PutObjectCommand({
          Bucket: BUCKET_NAME,
          Key: `${MFE_FOLDER_NAME}/${file}`,
          Body: fileStream,
          ContentType: mime.contentType(path.extname(filePath)),
        })
      );
    })
  );

  if (MFE_FOLDER_NAME === "root-config") {
    const filePath = path.join(MFE_DIST_FOLDER_PATH, "index.html");
    const fileStream = fs.createReadStream(filePath);
    await s3.send(
      new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: "index.html",
        Body: fileStream,
        ContentType: mime.contentType(path.extname(filePath)),
      })
    );
  }
};

const updateImportMap = async () => {
  const signedRequest = aws4.sign(
    {
      method: "PATCH",
      path: "/services",
      service: "execute-api",
      host: `${process.env.IMPORTMAP_DEPLOYER_API_HOST}`,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({
        service: SERVICE_NAME,
        url: SERVICE_URL,
        stage: process.env.STAGE,
      }),
    },
    {
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    }
  );

  await axios({
    method: signedRequest.method,
    url: `https://${signedRequest.host}${signedRequest.path}`,
    headers: signedRequest.headers,
    data: signedRequest.body,
  });
};

const deploy = async () => {
  try {
    console.info(`Starting to upload ${MFE_PACKAGE_JSON.name} to S3`);
    await uploadFiles();

    console.info(
      `Starting to update importmap-${process.env.STAGE}.json with the { ${SERVICE_NAME}: ${SERVICE_URL} }`
    );
    await updateImportMap();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

deploy();
