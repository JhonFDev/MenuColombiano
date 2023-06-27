import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["green", "orange","red","yellow"]} style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <SafeAreaView style={styles.safeareaview}>
        <View style={styles.viewelcome}>
          <Text style={styles.textelcome}>Menu Colombiano</Text>

          <View>
            <Image
              source={require("../assets/pruebaMiproyecto.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.viewtouch}>
            <TouchableOpacity
              style={styles.toucha}
              onPress={() => navigation.navigate("login")}
            >
              <Text style={styles.textouch}>Empezemos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  safeareaview: {},
  viewelcome: {
    flex: 1,
    justifyContent: "center",
  },
  textelcome: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
  },
  img: {
    width: 320,
    height: 320,
    alignSelf: "center",
  },
  toucha: {
    backgroundColor: "yellow",
    // borderWidth: 2,
    // borderColor: "red",
    marginVertical: 10,
    marginHorizontal: 40,
    borderRadius: 20,
    paddingVertical: 7,
  },
  textouch: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 400,
  },
});
