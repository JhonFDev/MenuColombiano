import { View, Text } from "react-native";
import React from "react";
import IngredientRow from "./IngredientRow";
import PreparationRow from "./PreparationRow";

export default function DishRow({ item }) {
  return (
    <View className="border-2">
      <View className="border-red-500 border-2">
        <View>
          <Text className="font-bold">Ingredientes: </Text>

          {/* ingredientes */}

          {item.ingredients.map((ingredient, CategoriesRecipes) => (
            <IngredientRow item={{ ...ingredient }} key={CategoriesRecipes} />
          ))}
        </View>
        <View>
          <Text className="font-bold">Preparacion: </Text>

          {/* ingredientes */}

          {item.preparations.map((preparati, CategoriesRecipes) => (
            <PreparationRow item={{ ...preparati }} key={CategoriesRecipes} />
          ))}
        </View>
      </View>
    </View>
  );
}
