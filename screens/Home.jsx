import { View, Text, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//mis Imports componentes necesarios
import RecipesRow from "../components/Home/RecipesRow";



const Home = () => {
  const insets = useSafeAreaInsets(); // Obteniendo los insets de la safe area
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>

      <ScrollView scrollEnabled={true} className="bg-amber-300 border-4 border-red-600">        
        <Text className="text-2xl font-bold text-gray-900 mb-4 text-center tracking-widest pt-3">
          Home del menu colombiano
        </Text>
        {/* <View  className="bg-gray-100 rounded-2xl p-4 shadow-md w-100">
            <Image source={{ uri:'https://picsum.photos/300/200' }} className="h-52 w-full rounded-3xl mb-2 " />
            <View className=" left-4">

            <Text className="font-semibold text-lg">Recipe </Text>
            <Text className="text-gray-500">30 min</Text>
            </View>
          </View> */}
          <View>

          {
            <RecipesRow />
          }

          </View>
      </ScrollView>
    </View>
  );
};

export default Home;
