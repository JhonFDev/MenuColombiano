import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
//import { Avatar } from "@rneui/themed";
import { BlurView } from "expo-blur";
import { Avatar } from "@react-native-material/core";

import RegisterForm from "../components/RegisterForm"
import { LinearGradient } from "expo-linear-gradient";

export default function Register() {
  return (
    <View style={styles.container}>
    <LinearGradient colors={["darkgreen", "darkorange","darkred","yellow"]} style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>

      {/* <Image
        source={require("../assets/fondo.png")}
        style={[styles.image, StyleSheet.absoluteFill]}
      /> */}

      <ScrollView contentContainerStyle={styles.scrollview}>
        <BlurView intensity={100} style={styles.blur} shouldRasterizeIOS={true} renderToHardwareTextureAndroid={true}>
          <View style={styles.viewlogin}>
          <Avatar image={require("../assets/VAN.png")} size={80} />
            <RegisterForm/>
          </View>
        </BlurView>
      </ScrollView>
    </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  viewlogin: {
    width: 350,
    height: 500,
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  blur: {
    borderRadius: 10,
  },
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 400,
  },
});
