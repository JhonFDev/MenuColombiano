import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import DishesCard from "./DishesCard";

export default function RecipesRow({ recipes, title, description }) {
  return (
    <View className="flex flex-row ">
      {/* // vista dishescard */}
      <ScrollView
        scrollEnabled
        horizontal
        showsHorizontalScrollIndicator={false}>
        {recipes.map((recipe, index) => {
          return <DishesCard key={index} item={recipe} />;
        })}
      </ScrollView>
      {/* //fin vista dishescard */}
    </View>
  );
}

const styles = StyleSheet.create({});
