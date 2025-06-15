import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import DishesCard from "./DishesCard";

export default function RecipesRow({title, description, recipes}) {
  return (
    <>
      <View className="">
        {/* //vista categorias */}
        
        {/* //fin vista categorias */}

        {/* //vista reciperow */}
        <View>
          <Text>yo soy RecipesRow</Text>
          <Text>titulo de la receta{title}</Text>
          <Text>descripcion de la receta{description}</Text>
        </View>
        <Pressable onPress={() => alert("muy pronto...")}>
          <Text> Ver Todo...</Text>
        </Pressable>
        {/* //fin reciperow*/}

        {/* // vista dishescard */}
        <ScrollView >
          {recipes.map((recipe, CategoriesRecipes) => {
            return(
            <DishesCard />
            )
          })
            }
        </ScrollView>
        {/* //fin vista dishescard */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
