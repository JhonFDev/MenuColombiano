import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-paper";
import FoodTime from "./foodTime";

export default function DishesCard({ item }) {
  const navigation = useNavigation();

  const StarRating = ({ rating }) => {
    return (
      <View className="flex flex-row">
        {[1, 2, 3, 4, 5].map((i) => (
          <Icon
            key={i}
            source={i <= rating ? "star" : "star-outline"}
            color="gold"
            size={25}
          />
        ))}
      </View>
    );
  };
  return (
    <View className="border border-green-500  bg-white opacity-60 elevation-xl rounded-2xl shadow-black shadow-2xl w-[250] mr-4">
      <Pressable onPress={() => navigation.navigate("dishes", {...item})}>
        {/* <Text className="">DishesCard XD</Text> */}
        <View className=" flex ">
          {/* <Pressable onPress={() => navigation.navigate("login")}>
          </Pressable> */}

          <Image
            source={item.image}
            className="w-[250] h-36 rounded-tl-2xl rounded-tr-2xl"
          />
          <View className=" border w-[250] justify-center items-center">
            <Text className=" text-lg font-bold">{item.name}</Text>
            <View className="flex flex-row mt-2  items-center justify-evenly border w-full">
              <StarRating rating={item.stars} />
              <Text className="font-semibold">{item.category}</Text>
            </View>
            <View className="flex flex-row mt-1 items-center gap-10">
              <Icon source="clock-time-seven" color="#808080" size={25} />
              <View>
                {item.time.map((timeprepa1, CategoriesRecipes) => (
                  <FoodTime key={CategoriesRecipes} item={{ ...timeprepa1 }} />
                ))}
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
