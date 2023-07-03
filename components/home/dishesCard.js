import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { isUserLoggedAuthChaged } from "../../utils/actions";

export default function DishesCard({ item }) {
  const navigation = useNavigation();
  const { user } = isUserLoggedAuthChaged();
  if (user) {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("dishes", { ...item })}
      >
        <View style={styles.viewcontiner}>
          <Image source={item.image} style={styles.img} />
          <View style={styles.viewname}>
            <Text style={styles.textname}>{item.name}</Text>
            <View style={styles.viewicontr}>
              <Icon name="star" type="material-community" color={"#ffd700"} />
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
              />
              <View>
                <Text>
                  Preparación:{" "}
                  <Text style={styles.textpc}> {item.preparationtime}</Text>{" "}
                </Text>
                <Text>
                  Cocción:{" "}
                  <Text style={styles.textpc}> {item.cocciontime}</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate("login")}>
        <View style={styles.viewcontiner}>
          <Image source={item.image} style={styles.img} />
          <View style={styles.viewname}>
            <Text style={styles.textname}>{item.name}</Text>
            <View style={styles.viewicontr}>
              <Icon name="star" type="material-community" color={"#ffd700"} />
              <Text style={styles.textstars}>{item.stars}</Text>
              <Text style={styles.textreviews}>
                ({item.reviews} Reviews) .{" "}
                <Text style={styles.textcategory}>{item.category}</Text>
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  viewcontiner: {
    marginRight: 20,
    backgroundColor: "white",
    shadowOpacity: 0.6,
    elevation: 14,
    bottom: 3,
    borderRadius: 20,
    shadowRadius: 7,
  },
  img: {
    height: 138,
    width: 244,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  viewname: {
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  textname: {
    paddingBottom: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  viewicontr: {
    flexDirection: "row",
    marginTop: 2,
    gap: 2,
    alignItems: "center",
  },
  textstars: {
    color: "#228b22",
  },
  textreviews: {
    fontWeight: "normal",
  },
  textcategory: {
    fontWeight: "600",
  },
  viewtime: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 5,
  },
  textpc: {
    fontWeight: "700",
  },
});
