import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Test() {
  const params = useLocalSearchParams<{ id?: string }>();

  return (
    <View>
      <Text>Test Screen</Text>
      <Text>ID: {params.id}</Text>
    </View>
  );
}
