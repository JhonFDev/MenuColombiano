import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function Dishes() {
  const { params } = useRoute();
  let item = params;
  console.log('dishes: ', item)
  return (
    <View>
      <Text>Dishes</Text>
    </View>
  );
}
