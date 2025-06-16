import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DishesCard() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>DishesCard XD</Text>
      <Pressable onPress={() => navigation.navigate("login")}>
        <Text>icono favorito</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
