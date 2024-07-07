import { Text, TouchableOpacity, View } from "react-native"
import { Octicons } from '@expo/vector-icons';
import { router } from "expo-router";
import { Routes } from "@/constants/Routes";

type DirectoriesListProps = {
  values: String[];
}

export const DirectoriesList = (props: DirectoriesListProps) => {
  return (
    <View className="flex flex-row flex-wrap overflow-y-auto items-center justify-center bg-gray-200 my-5">
      {props.values.map((value) => (
        <TouchableOpacity
          className="h-50 w-50 p-2"
          onPress={() => router.push(Routes.View + `/${value}`)}
        >
          <Octicons name="file-directory" size={50} color="#C3C3C3" />
          <Text>{value.replace('/', "")}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
