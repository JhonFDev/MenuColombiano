import { View, Text } from "react-native";
import React from "react";

export default function PreparationRow({ item }) {
  const preparationString = item.preparation01;
  const prepa = preparationString.split(". ");

  return (
    <View>
      {prepa.map((prepastring, index) => (
        <Text key={index}>{prepastring}</Text>
      ))}
    </View>
  );
}
