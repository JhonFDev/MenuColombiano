import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, Input } from "@rneui/base";
import Categories from "../components/home/categories";
import { featureBebidas, featureSalsas, featured, featuredAcompañamientos, featurepostresyamasijos } from "../components/home/constants/listCategories";
import FeaturedRow from "../components/home/featuredRow";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./account/Profile";


const Tab = createBottomTabNavigator();


export default function Home() {
  return (

    


    <SafeAreaView style={styles.safeareaview}> 
      {/* barraBuscador */}
      <View style={styles.viewcontainerbar}>
        <View style={styles.viewsearchbar}>
          <Input
            placeholder="Que quieres preparar hoy?"
            inputStyle={styles.input}
            inputContainerStyle={styles.inputcontainr}
            leftIcon={
              <Icon
                type="material-community"
                name="magnify"
                size={25}
                color={"gray"}
              />
            }
          />
        </View>
      </View>

      {/* menu */}
      <ScrollView>

      {/* categorias */}
            <Categories/>

      {/* features */}
      <View style={styles.viewfeatures}>
      {
        [featured, featuredAcompañamientos, featurepostresyamasijos, featureBebidas, featureSalsas].map((item, listCategories) => {
          return(
          <FeaturedRow
              key={listCategories}
              title={item.title}
              restaurants={item.restaurants}
              description={item.description}
          />
          )
        })
      }
      </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeareaview: {
    backgroundColor: "white",
    flex: 1,

  },
  viewcontainerbar: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  viewsearchbar: {
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    flexDirection: "row",
    width: "100%",
    flex: 1,
  },
  input: {
    paddingLeft: 10,
  },
  inputcontainr: {
    borderBottomColor: "transparent",
  },
  viewfeatures:{
  }
});
