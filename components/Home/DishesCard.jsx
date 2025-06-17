import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-paper";

export default function DishesCard({ item }) {
  const navigation = useNavigation();
  return (
    <View className="border border-green-500 ">
      <Text className="">DishesCard XD</Text>
      <View className="border-4 border-red-600">
        <Pressable onPress={() => navigation.navigate("login")}>
          <Text>icono favorito</Text>
        </Pressable>

        <Image source={item.image} className="w-28 h-28" />
        <View>
          <Text>{item.name}</Text>
          <View>
            <Icon source="star" color="gold" size={25} />
            <Text>{item.stars}</Text>
            <Text>{item.reviews} Reviews</Text>
            <Text>{item.category}</Text>
          </View>
          <View>
            <Icon source="clock-time-seven" color="#808080"/>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
