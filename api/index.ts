const basePath = process.env.EXPO_PUBLIC_BACKEND_URL;

export const getDirectories = async () => {
  const options = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    method: "GET"
  };

  const fullURL = basePath + "/buckets/directories";

  return fetch(fullURL, options).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Failed getting the directories");
  }).catch((error) => {
    console.log(error);
  })
}

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
      return response.json();
    }
    throw new Error("Failed creating presigned URL");
  }).catch((error) => {
    console.log(error);
  })
}

export const getThumbnails = async (directory: string) => {
  const options = {method: "GET"}
  const fullURL = basePath + `/buckets/thumbnails/${directory}`;

  return fetch(fullURL, options).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Failed to retrieve thumbnails");
  }).catch((error) => {
    console.log(error);
  })
}

export const uploadFiles = async (url: string, fileBuffer: ArrayBuffer) => {
  const options = {
    method: "PUT",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "*/*",
      "Content-Type": 'image/jpeg; charset=utf-8',
    },
    body: fileBuffer,
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
