import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import DishesCard from "./dishesCard";

export default function FeaturedRow({ title, description, restaurants }) {
  return (
    <View>
      <View style={styles.viewcontainer}>
        <View>
          <Text style={styles.texttitle}>{title}</Text>
          <Text style={styles.textdescription}>{description}</Text>
        </View>
        <TouchableOpacity>
            <Text>Ver Todo</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollviewcontentcontiner}
      style={styles.scrollview}
      >
      {
        restaurants.map((restaurant,listCategories) => {
            return (
                <DishesCard
                    item={restaurant}
                    key={listCategories}
                />
            )
        })
      }

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewcontainer: {
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    bottom:1,
    marginRight:10,
    marginLeft:10,
    marginVertical:10
  },
  texttitle: {
    fontWeight: "bold",
    fontSize:20
  },
  textdescription:{
    fontSize:15,
    color:"gray"
  },
  scrollviewcontentcontiner:{
    paddingHorizontal:15
  },
  scrollview:{
    overflow:"visible",
  }
});
