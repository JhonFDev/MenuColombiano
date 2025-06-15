import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import DishesCard from "./DishesCard";
import Categories from "./Categories";

export default function RecipesRow() {
  return (
    <>
      <View className="border">
        {/* //vista categorias */}
        <ScrollView >
          {<Categories />}
        </ScrollView>
        {/* //fin vista categorias */}

        {/* //vista reciperow */}
        <View>
          <Text>yo soy RecipesRow</Text>
          <Text>titulo de la receta</Text>
          <Text>descripcion de la receta</Text>
        </View>
        <Pressable onPress={() => alert("muy pronto...")}>
          <Text> Ver Todo...</Text>
        </Pressable>
        {/* //fin reciperow*/}

        {/* // vista dishescard */}
        <ScrollView >
          {<DishesCard />}
        </ScrollView>
        {/* //fin vista dishescard */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
