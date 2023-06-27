import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { categories } from "./constants/listCategories";
import { TouchableOpacity } from "react-native";
import { Image, SearchBar } from "@rneui/themed";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState();
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollview}
        contentContainerStyle={styles.scrollviewcontentcontainer}
      >
        {categories.map((category, listCategories) => {
          let isActive = category.id == activeCategory;

          return (
            <View key={listCategories} style={styles.viewcategories}>
              <TouchableOpacity
                style={[styles.touchcategories, { backgroundColor: isActive ? '#666' : '#ccc' }]}
                onPress={() => setActiveCategory(category.id)}
                btnClass
              >
                <Image source={category.image} style={styles.imgcategories} />
              </TouchableOpacity>
              <Text style={[styles.textcategories, { color: isActive ? '#000' : '#777', fontWeight: isActive?'bold' : 'normal' }]} textClass>
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    overflow: "visible",
  },
  scrollviewcontentcontainer: {
    paddingHorizontal: 15,
    paddingBottom: 30,
    paddingTop: 20,
  },
  viewcategories: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 11,
  },
  touchcategories: {
    width: 100,
    backgroundColor: "lightgray",
    alignItems: "center",
    borderRadius: 20,
  },
  imgcategories: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  textcategories: {
    textAlign: "center",
  },
});
