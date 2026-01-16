import { Categories } from "@/assets/data";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Test() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const category = Categories.find((c) => c.id === Number(id));

  if (!category) {
    return (
      <ScrollView className="mx-4 mb-12">
        <Text>No category found for ID: {id}</Text>
      </ScrollView>
    );
  }

  return (
    <>
      <Text className="text-xl font-bold my-4 text-center">
        {category.title}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false} className="mx-4">
        <HStack className="flex-wrap justify-between">
          {category.children?.map((child) => (
            <Pressable
              key={child.id}
              onPress={() =>
                router.push({
                  pathname: "/details/[id]",
                  params: { id: child.id },
                })
              }
              className="w-[48%] mb-4"
            >
              <VStack className="bg-white rounded-xl shadow-md p-3 items-center">
                <Image
                  style={{ width: "100%", height: 120, borderRadius: 8 }}
                  source={child.icon}
                  placeholder={{ blurhash }}
                  contentFit="contain"
                  transition={500}
                />
                <Text className="mt-2 text-sm font-medium text-gray-800 text-center">
                  {child.title}
                </Text>
              </VStack>
            </Pressable>
          ))}
        </HStack>
      </ScrollView>
    </>
  );
}
