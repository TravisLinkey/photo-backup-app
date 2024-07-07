import { ImagePickerAsset } from "expo-image-picker";

export const convertToBinary = (file: ImagePickerAsset): ArrayBuffer => {
  // Create the binary data
  const binaryData = atob(file.base64 as string);

  // Convert to ArrayBuffer
  const buffer = new ArrayBuffer(binaryData.length);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < binaryData.length; i++) {
    view[i] = binaryData.charCodeAt(i);
  }

  return buffer;
}

