const basePath = process.env.EXPO_PUBLIC_BACKEND_URL;

export const getPresignedURL = async (fileName: string, folderName: string) => {
  const options = {
    headers: {
      "X-Filename": fileName,
      "X-Foldername": folderName,
      "Access-Control-Allow-Origin": "*",
    },
    method: "GET"
  };

  const fullURL = basePath + "/buckets/presigned-url";

  return fetch(fullURL, options).then((response) => {
    if (response.ok) {
      return response.json()
    }
    throw new Error("Failed creating presigned URL");

  }).catch((error) => {
    console.log(error);
  })
}

export const uploadFiles = async (url: string, file: any) => {
  const options = {
    method: "PUT",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "*/*",
      ContentType: file.mimeType,
      ContentEncoding: 'base64',
      "x-amz-server-side-encryption": "aws:kms"
    },
    body: file.base64,
  };

  return fetch(url, options).then(async (response) => {
    if (response.ok) {
      return "Successfully uploaded photos";
    }

    throw new Error("Failed uploading file");
  }).catch((error) => {
    console.log(error);
  });
};
