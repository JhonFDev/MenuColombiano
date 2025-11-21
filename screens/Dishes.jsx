import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "react-native-paper";
import FoodTime from "../components/Home/foodTime";
import DishRow from "../components/Home/dishRow";
import ArrowLeft from "../components/ArrowLeft";

export default function Dishes() {
  const { params } = useRoute();
  const insets = useSafeAreaInsets(); // Obteniendo los insets de la safe area

  let item = params;

  return (
    <View
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      className="flex-1 bg-white">
      <ArrowLeft />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="items-center">
          <View className="w-full relative">
            <Image
              source={item.image}
              className="w-full h-72"
              resizeMode="cover"
            />
          </View>

          <View className="w-full bg-white rounded-t-[50px] -mt-12 pt-8 pb-5 px-6 shadow-lg elevation-md">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="font-bold text-xl flex-1 mr-2">{item.name}</Text>
              <StarRating rating={item.stars} />
            </View>

            <View className="flex-row items-center justify-between mt-2">
              <View className="flex-row items-center gap-3">
                <Icon source="clock-time-seven" color="#808080" size={25} />
                <View>
                  {item.time.map((timeprepa1, index) => (
                    <FoodTime key={index} item={{ ...timeprepa1 }} />
                  ))}
                </View>
              </View>
              <View>
                <Text className="font-semibold text-xl text-gray-600">
                  {item.category}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* preparacion e ingredientes */}
        <View className="bg-white px-4 pb-10">
          {/* dishes */}
          {item.dishes.map((dish, index) => (
            <DishRow item={{ ...dish }} key={index} />
          ))}
        </View>
        {/* fin preparacion e ingredientes */}
      </ScrollView>
    </View>
  );
}

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
