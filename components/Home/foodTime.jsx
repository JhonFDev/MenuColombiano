import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FoodTime({ item }) {
  const timestring = item.foodtime;
  const timfood = timestring.split(". ");
  return (
    <View>
      {timfood.map((timestring, index) => (
        <Text key={index}>{timestring} </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
