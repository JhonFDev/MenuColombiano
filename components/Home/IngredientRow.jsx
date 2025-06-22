import { View, Text } from 'react-native'
import React from 'react'

export default function IngredientRow({item}) {

    const ingredientString = (item.ingredient01);
    const ingri = ingredientString.split(". ");

  return (
    <View>
      {ingri.map((ingristring , CategoriesRecipes) => (
        <Text key={CategoriesRecipes}>{ingristring}</Text>
      ))}
    </View>
  )
}