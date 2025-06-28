import { View, Text, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TextInput, useTheme } from "react-native-paper";

//mis Imports componentes necesarios
import RecipesRow from "../components/Home/RecipesRow";
import {
  featureBebidas,
  featuredAcompañamientos,
  featuredPlatosFuertes,
  featurepostresyamasijos,
  featureSalsas,
} from "../components/Home/recipes/CategoriesRecipes";
import Categories from "../components/Home/Categories";

const Home = () => {
  const insets = useSafeAreaInsets(); // Obteniendo los insets de la safe area
  return (
    <View
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      className=" flex flex-col gap-2"
    >
      {/* Barra buscador de recipientes */}
      <View className="w-full px-4">
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
      {/* fin Barra buscador de recipientes */}

      {/* <Categories/> */}
      <View>
        <ScrollView>{<Categories />}</ScrollView>
      </View>
      {/* <Categories/> */}

      <ScrollView>
        <View className="gap-2 border mb-[195px]">
          {[
            featuredPlatosFuertes,
            featureBebidas,
            featureSalsas,
            featuredAcompañamientos,
            featurepostresyamasijos,
          ].map((item, CategoriesRecipes) => {
            return (
              <RecipesRow
                key={CategoriesRecipes}
                title={item.title}
                recipes={item.recipes}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
