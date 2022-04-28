#!/bin/bash

PROJECT_NAME="$(basename $PWD)"
SERVICE_NAME="$(basename $PWD | cut -c 5-)"

echo "Sync ${PROJECT_NAME} assets to S3"
aws s3 sync dist/ s3://$BUCKET_NAME/$PROJECT_NAME --cache-control max-age=31536000

if [ $PROJECT_NAME == "mfe-root-config" ]; then
    echo "Sync index.html to bucket root folder"
    aws s3 cp dist/index.html s3://$BUCKET_NAME/index.html
fi

echo "Update importmap with ${PROJECT_NAME} URL"
curl -u $DEPLOYER_USERNAME:$DEPLOYER_PASSWORD -d '{ "service": "@mfe/'$SERVICE_NAME'" ,"url": "'$PUBLIC_URL'/'$PROJECT_NAME'/'$PROJECT_NAME'.js" }' -X PATCH $DEPLOYER_URL/services\?env=$DEPLOYER_ENV -H "Accept:application/json" -H "Content-Type:application/json"
