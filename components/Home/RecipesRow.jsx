import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import DishesCard from "./DishesCard";

export default function RecipesRow({ recipes }) {
  return (
    <>
      <View className=" elevation">
        {/* //vista reciperow */}
        {/* <View>
          <Text>{title}</Text>
          <Text>{description}</Text>
        </View>
        <Pressable onPress={() => alert("muy pronto...")}>
          <Text> Ver Todo...</Text>
        </Pressable> */}
        {/* //fin reciperow*/}

        {/* // vista dishescard */}
        <ScrollView>
          {recipes.map((recipe, CategoriesRecipes) => {
            return <DishesCard key={CategoriesRecipes} item={recipe}/>;
          })}
        </ScrollView>
        {/* //fin vista dishescard */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
