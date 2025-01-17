import { Image, View } from "react-native";
import { ImagePickerAsset } from "expo-image-picker";


type ImageListProps = {
  images: ImagePickerAsset[];
}

export const ImageList = (props: ImageListProps) => (
  <View className="flex flex-row flex-wrap overflow-y-auto h-80 items-center justify-center my-5 bg-gray-200">
    {props.images.map((image: ImagePickerAsset, index: number) => (
      <Image 
        key={index}
        source={{ uri: image.uri }}
        style={{ width: 200, height: 200, margin: 4, borderWidth: 2 }}
      />
    ))}
  </View>
)
