import * as ImagePicker from "expo-image-picker";
import { CustomButton } from "@/components/CustomButton";
import { ImageList } from "@/components/ImageList";
import { Text, TextInput, View } from "react-native";
import { getPresignedURL, uploadFiles } from "@/api";
import { useEffect, useState } from "react";


export default function HomeScreen() {
  const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([]);
  const [message, setMessage] = useState<string>("");
  const [folderName, setFolderName] = useState<string>("");

  useEffect(() => {
    if (message !== "") {
      setTimeout(() => {
        setMessage("")
      }, 4000)
    }
  }, [message])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages(result.assets);
    }
  };

  const submit = async () => {
    images.map(async (image) => {
      const {url} = await getPresignedURL(image.fileName as string, folderName);
      const response = await uploadFiles(url, image);
      console.log(response);
    });

    setMessage("Successfully uploaded photos!");
    setImages([]);
  }

  return (
    <View className="flex items-center w-full h-screen bg-gray-200">
      <View className="bg-white border-1 rounded-xl px-4 h-screen">
        <TextInput 
          className="text-xl my-4 p-2 bg-gray-200 text-bold text-blue-500 border-2 border-black rounded-lg mb-4"
          placeholder="Directory name"
          onChangeText={setFolderName}
        />
        <CustomButton
          function={pickImage}
          text="Select photos"
        />
        <ImageList
          images={images}
        />
        <Text>{message}</Text>
        {images.length > 0 && folderName.length > 0 &&
          <CustomButton
            function={() => submit()}
            text="Submit"
            type="Submit"
          />
        }
      </View>
    </View>
  );
}

