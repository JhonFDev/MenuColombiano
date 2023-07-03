import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PreparationRow({item}) {
  const preparationstring = (item.preparation01);
  const prepa = preparationstring.split(". ")

  return (
    <View style={styles.viewcontainer}>
    {prepa.map((prepastring, listCategories) => (

      <Text style={styles.textname} key={listCategories}>{prepastring}</Text>
    ))}
   
    </View>
  )
}

const styles = StyleSheet.create({
  viewcontainer: {
        flex: 1,
        gap:20,
        top:10,
        marginHorizontal:20
      },
      textname:{
        fontSize:18,
          letterSpacing:0.7        
      }
})