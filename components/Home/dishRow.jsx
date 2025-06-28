import { View, Text } from "react-native";
import React from "react";
import IngredientRow from "./IngredientRow";
import PreparationRow from "./PreparationRow";

export default function DishRow({ item }) {
  return (
    <View
      className="flex flex-row items-center px-4 rounded-[50] mb-3"
      style={{
        backgroundColor: "white",
        shadowOpacity: 0.4,
        elevation: 30,
        shadowColor: "red",
      }}
    >
      <View className="flex pt-5 gap-5">
        {/* ingredientes */}
        <View className="">
          <Text className="font-bold text-2xl text-center mb-3">Ingredientes: </Text>

          {item.ingredients.map((ingredient, CategoriesRecipes) => (
            <IngredientRow item={{ ...ingredient }} key={CategoriesRecipes} />
          ))}
        </View>
        {/* ingredientes */}

        {/* preparacion */}
        <View>
          <Text className="font-bold text-2xl text-center mb-3">Preparacion: </Text>

          {item.preparations.map((preparati, CategoriesRecipes) => (
            <PreparationRow item={{ ...preparati }} key={CategoriesRecipes} />
          ))}
        </View>
        {/* preparacion */}
      </View>
    </View>
  );
}
