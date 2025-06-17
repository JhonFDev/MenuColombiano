import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Importando los componentes necesarios de React Native y Expo

const Welcome = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets(); // Obteniendo los insets de la safe area
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("home");
    }, 2000); // 3 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={["#2c2f31", "#221f16", "#7d4419"]}
      locations={[0, 0.5, 1]}
      style={styles.linearGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <View className="flex-1 justify-center items-center w-max:[400]">
          <Text className="text-6xl font-bold text-center text-yellow-400 justify-center tracking-widest">
            Recetas Colombianas
          </Text>
          {/* Puedes agregar una imagen aquí si es necesario */}
          <ImageBackground
            source={require("../assets/imagenWelcome.png")}
            className="w-[399px] h-[450px] w-max:[400px] my-4"
          ></ImageBackground>
          <Pressable
            className="bg-yellow-400 rounded-full p-3 w-[350px] "
            onPress={() => navigation.navigate("home")}
          >
            <Text className="text-3xl font-semibold text-center text-black tracking-widest">
              Comenzar
            </Text>
          </Pressable>
        </View>
      </View>
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
