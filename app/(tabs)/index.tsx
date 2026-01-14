import { CarouselImages, Categories } from "@/assets/data";
import { HStack } from "@/components/ui/hstack";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Index() {
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (page + 1) % CarouselImages.length;
      pagerRef.current?.setPage(nextPage);
      setPage(nextPage);
    }, 3500);

    return () => clearInterval(interval);
  }, [page]);

  return (
    <View className="flex-1 bg-gray-100">
      <PagerView
        ref={pagerRef}
        style={{ height: 250, width: "100%" }}
        initialPage={0}
        onPageSelected={(e) => setPage(e.nativeEvent.position)}
      >
        {CarouselImages.map((item) => (
          <View key={item.id} className="items-center justify-center">
            <Image
              style={{ width: "100%", height: 250 }}
              source={item.image}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
        ))}
      </PagerView>

      {/* Dot Indicator */}
      <View className="flex-row -mt-8 mb-8 items-center justify-center">
        {CarouselImages.map((_, index) => (
          <View
            key={index}
            className={`size-4 mx-2 rounded-full ${
              page === index ? "bg-sky-500" : "bg-gray-300" // active vs inactive
            }`}
          />
        ))}
      </View>
      <Text className="text-xl font-bold  mx-4 mb-4 text-gray-900">Places</Text>
      <ScrollView showsVerticalScrollIndicator={false} className="mx-4">
        {/* Section Title */}

        {Categories.map((item) => (
          <Pressable
            key={item.id}
            className="mb-4"
            onPress={() =>
              router.navigate({
                pathname: "/details/test",
                params: { id: item.id },
              })
            }
          >
            <HStack className="items-center bg-white rounded-xl shadow-md p-4 mx-2">
              {/* Icon */}
              <Image
                style={{ width: 48, height: 48, borderRadius: 12 }}
                source={item.icon}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={500}
              />

              {/* Title */}
              <Text className="ml-4 text-base font-semibold text-gray-800">
                {item.title}
              </Text>
            </HStack>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
