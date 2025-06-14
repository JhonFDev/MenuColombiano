import { View, Text, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TextInput, useTheme } from "react-native-paper";

//mis Imports componentes necesarios
import RecipesRow from "../components/Home/RecipesRow";

const Home = () => {
  const insets = useSafeAreaInsets(); // Obteniendo los insets de la safe area
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {/* Barra buscador de recipientes */}
      <View className="py-2 w-full px-4">
        <View>
          <TextInput
            placeholder="Buscar recetas"
            left={
              <TextInput.Icon
                icon="food-turkey"
                color="black"
                style={{ left: 20 }}
              />
            }
            mode="outlined"
            outlineColor="green"
            activeOutlineColor="blue"
            cursorColor="orange"
            autoCapitalize="sentences"
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="search"
            onSubmitEditing={() =>
              alert("Buscando... y detruyendo al mundo! JAJAJA!")
            }
            clearButtonMode="always"
            clearTextOnFocus={true}
            underlineColorAndroid="green"
            selectionColor="orange"
            label={"¿Qué quieres preparar hoy?"}
            theme={{
              animation: {
                scale: 2, // Aumenta la animación de escala
              },
              roundness: 20,
            }}
            style={{
              height: 56,
              fontSize: 16,
              fontWeight: "500",
              paddingHorizontal: 30,
            }}
          />
        </View>
      </View>

      <ScrollView
        scrollEnabled={true}
        className="bg-amber-300 border-4 border-red-600"
      >
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
        <View>{<RecipesRow />}</View>
      </ScrollView>
    </View>
  );
};

export default Home;
