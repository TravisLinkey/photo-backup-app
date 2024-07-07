import { DirectoriesList } from "@/components/DirectoriesList";
import { View } from "react-native"
import { getDirectories } from "@/api";
import { useEffect, useState } from "react";


export default function ViewScreen() {
  const [directories, setDirectories] = useState<string[]>([]);

  const fetchDirectories = async () => {
    const response = await getDirectories();
    setDirectories(response);
  };

  useEffect(() => {
    fetchDirectories();
  }, [])

  console.log("Directories: ", directories);

  return (
    <View className="flex items-center w-full h-screen bg-gray-200">
      <View className="bg-white border-1 rounded-xl px-4 h-screen">
        <DirectoriesList
          values={directories}
        />
      </View>
    </View>
  )
}
