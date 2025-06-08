import { View, Text, SafeAreaView, Image, ImageBackground, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";



const Welcome = () => {

  const navigation = useNavigation();

  useEffect(() => {
  const timer = setTimeout(() => {
    navigation.navigate('home');
  }, 5000); // 3 segundos

  return () => clearTimeout(timer);
}, []);
  return (
    <LinearGradient
      colors={["#2c3032", "#824d21", "#763d15"]}
      style={styles.linearGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView>
        <View className="flex-1 justify-center items-center w-max:[400]">
          {/* Puedes agregar una imagen aquí si es necesario */}
          <ImageBackground
            source={require("../assets/imagenWelcome.png")}
            className="w-[399px] h-[600px] w-max:[400px]"
          >
            <Text className="text-2xl font-bold text-center text-yellow-400 justify-center border border-yellow-400">
              Recetas Colombianas
            </Text>
          </ImageBackground>
          <Pressable className="bg-yellow-400 rounded-full p-3 w-[350px] " onPress={() => navigation.navigate('home')}>
            <Text className="text-5xl font-semibold text-center text-white">
              Comenzar
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 400,
  },
});
