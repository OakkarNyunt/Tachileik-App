import { VStack } from "@/components/ui/vstack";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Info() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <VStack
        space="md"
        className="items-center mx-6 p-6 rounded-xl border border-sky-500 bg-white shadow-lg"
      >
        <Image
          style={{ width: 120, height: 120, borderRadius: 60 }}
          source={require("@/assets/photo/Profile.jpg")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <Text className="text-lg font-bold text-sky-700">Oakkar Nyunt</Text>
        <Text className="text-sm text-gray-600">
          Passionate Software Developer
        </Text>
        <Text className="text-sm text-gray-500">oakkarnyunt@gmail.com</Text>
        <Text className="text-center text-base text-gray-700 mt-2 leading-relaxed">
          This app helps you explore Tachileik by finding pagodas, shopping
          malls, cinemas, cafés, restaurants, and other must‑visit places.
        </Text>
      </VStack>
    </View>
  );
}
