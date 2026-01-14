import { Categories } from "@/assets/data";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function ChildPage() {
  const { childId } = useLocalSearchParams<{ childId?: string }>();

  // Find the child object by searching all categories
  const child = Categories.flatMap((c) => c.children ?? []).find(
    (ch) => ch.id === Number(childId)
  );

  if (!child) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg">No child found for ID: {childId}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 px-4 mt-4">
      <Image
        style={{ width: "100%", height: 200, borderRadius: 12 }}
        source={child.icon}
        placeholder={{ blurhash }}
        contentFit="contain"
        transition={500}
      />
      <Text className="text-2xl font-bold mt-4">{child.title}</Text>
      <Text className="text-gray-600 mt-2">ID: {child.id}</Text>
    </View>
  );
}
