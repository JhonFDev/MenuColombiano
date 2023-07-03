import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function IngredientRow({ item }) {

  const ingredientstring = (item.ingredient01);
  const ingri = ingredientstring.split(". ")
  

  return (
    <View style={styles.viewcontainer}>
    {ingri.map((ingristring, listCategories) => (

      <Text style={styles.textname} key={listCategories}>{ingristring}</Text>
    ))}
   
    </View>
  );
}

const styles = StyleSheet.create({
  viewcontainer: {
    flex: 1,
    gap:10,
    top:10,
    marginHorizontal:20,
    paddingBottom:40
  },
  textname:{
    fontSize:18,
    justifyContent:"center",
    alignContent:"center"
  },  
});
