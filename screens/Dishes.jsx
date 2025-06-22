import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "react-native-paper";
import FoodTime from "../components/Home/foodTime";
import DishRow from "../components/Home/dishRow";

export default function Dishes() {
  const { params } = useRoute();
  const insets = useSafeAreaInsets(); // Obteniendo los insets de la safe area

  let item = params;

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
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <ScrollView>
        <View className="items-center ">
          <View className="relative">
            <Image source={item.image} className="w-[350] h-72" />
          </View>

          <View className=" w-[380] mt-2 rounded-tl-3xl rounded-tr-3xl border ">
            <View className="flex-row justify-around items-center ">
              <Text className="font-bold text-xl">{item.name}</Text>
              <StarRating rating={item.stars} />
            </View>

            <View className=" flex flex-row mt-2 items-center gap-14 left-4">
              <View className=" flex-row items-center gap-3 ">
                <Icon source="clock-time-seven" color="#808080" size={25} />
                <View>
                  {item.time.map((timeprepa1, CategoriesRecipes) => (
                    <FoodTime
                      key={CategoriesRecipes}
                      item={{ ...timeprepa1 }}
                    />
                  ))}
                </View>
              </View>
              <View className="">
                <Text className="font-semibold">{item.category}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* preparacion e ingredientes */}

        <View className="border">
          <Text>Ingredientes y Preparación</Text>

        {/* dishes */}

        {item.dishes.map((dish, CategoriesRecipes) =>(
          <DishRow item={{...dish}} key={CategoriesRecipes} />
        ))}


        </View>


        

        {/* fin preparacion e ingredientes */}
      </ScrollView>
    </View>
  );
}
