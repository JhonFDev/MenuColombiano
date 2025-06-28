import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-paper";

export default function ArrowLeft() {
  const navigation = useNavigation();
  return (
    <View className="z-50">
      <Pressable
        onPress={() => navigation.goBack()}
        className="absolute top-8 left-4 rounded-full   "
        style={{ backgroundColor: "#808080" }}
      >
        <Icon source={"arrow-left"} size={35} color={"#ffd700"} />
      </Pressable>
    </View>
  );
}
