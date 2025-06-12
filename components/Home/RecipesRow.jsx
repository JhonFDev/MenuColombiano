import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import DishesCard from "./DishesCard";

export default function RecipesRow() {
  return (
    <>
      <View className="">
        <View>
          <Text>titulo de la receta</Text>
          <Text>descripcion de la receta</Text>
        </View>
        <Pressable onPress={() => alert("muy pronto...")}>
          <Text> Ver Todo...</Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {
            <DishesCard/>
        }
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
