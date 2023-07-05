import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Icon, Image } from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import DishRow from "../components/home/dishRow";
import FoodTime from "../components/home/foodTime";

export default function Dishes() {
  const { params } = useRoute();
  let item = params;
  //console.log('dishes: ', item)
  return (
    <>
        {/* presentacion */}
            <ArrowLeft/>
        <ScrollView>

        <View>
          <View style={styles.viewimg}>
            <Image source={item.image} style={styles.img} />
          </View>
          
          <View style={styles.viewcontainerpresentation}>
            <View style={styles.viewname}>
              <Text style={styles.textname}>{item.name}</Text>

              <View style={styles.viewicontr}>
                <View style={styles.viewcontentisrc}>
                  <Icon
                    name="star"
                    type="material-community"
                    color={"#ffd700"}
                    size={15}
                  />
                  <Text style={styles.textstars}>{item.stars}</Text>
                  <Text style={styles.textreviews}>
                    ({item.reviews} Reviews) .{" "}
                    <Text style={styles.textcategory}>{item.category}</Text>
                  </Text>
                </View>
                <View style={styles.viewtime}>
                  <Icon
                    name="clock-time-seven"
                    type="material-community"
                    color={"#808080"}
                    size={15}
                  />
                  <View>
                    {
                      item.time.map((timeprepa, listcategories) => <FoodTime item={{...timeprepa}} key={listcategories}/>)
                    }
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* fin presentacion */}


        {/* preparacion  y ingredientes*/}
        <View style={styles.viewcontainerMenu}>
        <Text style={styles.textmenu}>Ingredientes y Preparacion</Text>

        {/* dishes */}

        {
          item.dishes.map((dish, listcategories)=> <DishRow item={{...dish}} key={listcategories}/>)
        }


        </View>
        
        {/* fin preparacion y ingredientes*/}
      </ScrollView>
    </>
  );
}


function ArrowLeft () {
  const navigation = useNavigation();

  return(
    <View style={styles.arrowleft}>
      <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.goBack()}
            >
              <Icon
                name="arrow-left"
                type="feather"
                color={"#ffd700"}
                size={35}
              />
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  viewimg: {
    position: "relative",
  },
  img: {
    width: "100%",
    height: 300,
    resizeMode: "stretch",
  },
  touch: {
    position: "absolute",
    top: 30,
    left: 13,
    borderRadius: 30,
    backgroundColor: "#808080",
  },
  viewcontainerpresentation: {
    position: "absolute",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 25,
    top: 209,
    width: "100%",
    backgroundColor: "white",
    paddingBottom: 10,
  },
  textname: {
    fontWeight: "bold",
    fontSize: 30,
    left: 20,
    bottom: 10,
    top:5
  },
  viewicontr: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    justifyContent: "center",
    
  },
  textstars: {
    color: "#228b22",
    fontSize: 13,
  },
  textreviews: {
    fontWeight: "normal",
    fontSize: 13,
  },
  textcategory: {
    fontWeight: "600",
    fontSize: 13,
  },
  viewtime: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textpc: {
    fontWeight: "700",
    fontSize: 13,
  },
  viewcontentisrc: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  viewname: {
    marginTop: 6,
    bottom: 29,
  },
  textpct: {
    fontSize: 13,
  },
// menu
  viewcontainerMenu:{
    backgroundColor:"white",
    top:10

  },
  textmenu:{
    fontWeight:"bold",
    paddingHorizontal:20,
    paddingBottom:20,  
    fontSize:22,
    textShadowRadius:10,
    textShadowColor:"lightgray"    
  },
  arrowleft:{
    zIndex:50
  }
});
