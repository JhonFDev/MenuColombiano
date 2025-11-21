import { View, Text } from "react-native";
import React from "react";

export default function IngredientRow({ item }) {
  const ingredientString = item.ingredient01;
  const ingri = ingredientString.split(". ");

  return (
    <View>
      {ingri.map((ingristring, index) => (
        <Text key={index}>{ingristring}</Text>
      ))}
    </View>
  );
}
