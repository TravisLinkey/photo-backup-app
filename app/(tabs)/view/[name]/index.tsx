import { Image, Text, View } from "react-native"
import { getThumbnails } from "@/api";
import { useEffect, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router"

export default function ThumbnailPage() {
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const { name } = useLocalSearchParams<{ name: string }>();

  const fetchThumbnails = async () => {
    const response = await getThumbnails(name as string);
    setThumbnails(response.thumbnails)
  };

  useEffect(() => {
    fetchThumbnails();
  }, [])

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: name || "something",
          headerTitleStyle: { color: 'black' },
          headerTintColor: 'black'
        }}
      />
      <View className="w-screen h-full items-center p-10">
        <Text className="text-2xl font-bold">{name}</Text>
        <View className="flex flex-row flex-wrap overflow-y-auto p-5 items-center justify-center my-2 bg-gray-200">
          {thumbnails.map((image: string, index: number) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={{ width: 100, height: 100, margin: 4, borderWidth: 2 }}
            />
          ))}
        </View>
      </View>
    </>
  )
}
