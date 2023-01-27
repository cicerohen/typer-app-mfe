#!/usr/bin/env node

const path = require("path");
const fs = require("fs");

const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

require("dotenv").config({
  path: path.resolve(__dirname, "..", ".env"),
});

const projectName = path.basename(process.cwd());
const s3 = new S3Client({ region: "us-east-1" });

const uploadToS3 = async () => {
  try {
    const distFolderPath = path.resolve(process.cwd(), "./dist");
    const files = fs.readdirSync(distFolderPath);

    await Promise.all(
      files.map(async (file) => {
        const filePath = `${distFolderPath}/${file}`;
        const fileStream = fs.createReadStream(filePath);

        const params = {
          Bucket: bucketName,
          Key: `${destinationPrefix}/${file}`,
          Body: fileStream,
          CacheControl: cacheControl,
        };

        await s3.upload(params).promise();
        console.log(`Uploaded file: ${file}`);
      })
    );
  } catch (err) {
    console.log(err);
  }
};

uploadToS3();

// # echo "Sync ${PROJECT_NAME} assets to S3"
// # aws s3 sync dist/ s3://$BUCKET_NAME/$PROJECT_NAME --cache-control max-age=31536000

// # if [ $PROJECT_NAME == "mfe-root-config" ]; then
// #     echo "Sync index.html to bucket root folder"
// #     aws s3 cp dist/index.html s3://$BUCKET_NAME/index.html
// # fi

// # echo "Update importmap with ${PROJECT_NAME} URL"
// # curl -u $DEPLOYER_USERNAME:$DEPLOYER_PASSWORD -d '{ "service": "@mfe/'$SERVICE_NAME'" ,"url": "'$PUBLIC_URL'/'$PROJECT_NAME'/'$PROJECT_NAME'.js" }' -X PATCH $DEPLOYER_URL/services\?env=$DEPLOYER_ENV -H "Accept:application/json" -H "Content-Type:application/json"
