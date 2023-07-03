import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import IngredientRow from "./ingredientRow";
import PreparationRow from "./preparationRow";

export default function DishRow({ item }) {
  return (
    <View style={styles.viewcontainer}>
      <View style={styles.viewcontent}>
        <View style={styles.viewtext}>
          <Text style={styles.textname}> Ingredientes:</Text>
          {/* ingredientes */}

          {item.ingredients.map((ingredient, listcategories) => (
            <IngredientRow item={{ ...ingredient }} key={listcategories} />
          ))}

          <Text style={styles.textname}> Preparación: </Text>
          {/* preparacion */}
          {item.preparations.map((preparati, listcategories) => (
            <PreparationRow item={{ ...preparati }} key={listcategories} />
          ))}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  viewcontainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 50,
    marginBottom: 10,
    backgroundColor: "white",
    shadowOpacity: 0.3,
    elevation: 20,
  },
  viewcontent: {
    flex: 1,
    paddingVertical: 30,
  },
  viewtext: {},
  textname: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textdescription: {
    color: "gray",
  },
});
