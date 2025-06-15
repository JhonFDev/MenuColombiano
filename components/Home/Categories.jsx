import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";

import { categories } from "./recipes/CategoriesRecipes";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState();
  return (
    <View className="items-center justify-center">
      <View>
        <Text className="font-bold text-center text-3xl">Categorias</Text>
      </View>
      <ScrollView
        className="border rounded-full w-[372px]"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-row justify-between items-center gap-3 p-3 ">
          {categories.map((category, CategoriesRecipes) => {
            let isActive = category.id == activeCategory;
            return (
              <View
                key={CategoriesRecipes}
                className="flex items-center justify-center w-[120px] left-2"
              >
                <Pressable
                  onPress={() => setActiveCategory(category.id)}
                  className="flex items-center"

                >
                  <Image
                    source={category.image}
                    className="h-[40px] w-[40px] rounded-full justify-center"
                  />
                  <Text
                    className="text-base color-{isActive ? 'red' : 'black'}"
                    style={{
                      color: isActive ? "#16213E" : "#777",
                      fontWeight: isActive ? "bold" : "ultralight",
                    }}
                  >
                    {category.name}
                  </Text>
                </Pressable>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
