import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-paper";
import FoodTime from "./foodTime";

export default function DishesCard({ item }) {
  const navigation = useNavigation();
  return (
    <View className="border border-green-500 mr-5 bg-white opacity-60 elevation-xl rounded-full shadow-black shadow-2xl">
      {/* <Text className="">DishesCard XD</Text> */}
      <View className="border-4 border-red-600 rounded-full">
        <Pressable onPress={() => navigation.navigate("login")}>
          <Text>icono favorito</Text>
        </Pressable>

        <Image source={item.image} className="w-28 h-28 rounded-full" />
        <View className="ml-3 mb-3 mt-1 border">
          <Text className="pb-10 text-lg font-bold">{item.name}</Text>
          <View className="flex flex-row mt-2 gap-2 items-center justify-center">
            <Icon source="star" color="gold" size={25} />
            <Text style={{color:"#228b22"}} >{item.stars}</Text>
            <Text>{item.reviews} Reviews</Text>
            <Text className="font-semibold">{item.category}</Text>
          </View>
          <View className="border">
            <Icon source="clock-time-seven" color="#808080" />
            <View>
              {item.time.map((timeprepa1, CategoriesRecipes) => (
                <FoodTime key={CategoriesRecipes} item={{ ...timeprepa1 }} />
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
