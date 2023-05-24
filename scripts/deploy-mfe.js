#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const aws4 = require("aws4");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

require("dotenv").config({
  path: path.resolve(__dirname, "..", `.env.${process.env.NODE_ENV}`),
});

const mfePackageJson = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), "./package.json"), "utf8")
);

const MFE_FOLDER_NAME = path.basename(process.cwd());
const MFE_DIST_FOLDER_PATH = path.resolve(process.cwd(), "./dist");
const BUCKET_NAME = `typer-app-mfe-${process.env.STAGE}`;
const SERVICE_NAME = mfePackageJson.name;

const s3 = new S3Client({ region: process.env.REGION });

const uploadFiles = async () => {
  try {
    const files = fs.readdirSync(MFE_DIST_FOLDER_PATH);

    await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(MFE_DIST_FOLDER_PATH, file);
        const fileStream = fs.createReadStream(filePath);

        await s3.send(
          new PutObjectCommand({
            Bucket: BUCKET_NAME,
            Key: `${MFE_FOLDER_NAME}/${file}`,
            Body: fileStream,
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
        })
      );
    }
  } catch (err) {
    console.log(err);
  }
};

// const signedRequest = aws4.sign(
//   {
//     service: "execute-api",
//     method: "PATCH",
//     host: process.env.DEPLOYER_API_GATEWAY_HOST,
//     path: "/services",
//     body: "{test: {}}",
//   },
//   {
//     secretAccessKey: process.env.AWS_ACCESS_KEY_ID,
//     accessKeyId: process.env.AWS_SECRET_ACCESS_KEY,
//   }
// );

// uploadFiles();

// # echo "Update importmap with ${PROJECT_NAME} URL"
// # curl -u $DEPLOYER_USERNAME:$DEPLOYER_PASSWORD -d '{ "service": "@mfe/'$SERVICE_NAME'" ,"url": "'$PUBLIC_URL'/'$PROJECT_NAME'/'$PROJECT_NAME'.js" }' -X PATCH $DEPLOYER_URL/services\?env=$DEPLOYER_ENV -H "Accept:application/json" -H "Content-Type:application/json"
