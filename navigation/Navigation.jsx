import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-paper";

//mis imports
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Dishes from "../screens/Dishes";
import Settings from "../screens/account/settings";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

const Navigation = () => {
  const screenOptions = (route, color) => {
    let iconname;
    switch (route.name) {
      case "homenologin":
        iconname = "book-open";
        break;
      case "profile":
        iconname = "home-circle-outline";
        break;
      case "settings":
        iconname = "cog";
        break;

      default:
        break;
    }
    return <Icon source={iconname} size={28} color={color} />;
  };

  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="homenologin"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarActiveTintColor:"black",
          tabBarInactiveTintColor:"gray",
          tabBarAllowFontScaling:true,
          tabBarLabelStyle:({fontSize:12 , fontWeight:"bold"})
        })}
      >
        <Tabs.Screen
          name="homenologin"
          component={HomeNoLogin}
          options={{ title: "Recetas" }}
        />
        <Tabs.Screen
          name="settings"
          component={Settings}
          options={{ title: "Configuración" }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};



function HomeNoLogin() {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="dishes" component={Dishes} />
    </Stack.Navigator>
  );
}
function HomeLogin() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="dishes" component={Dishes} />
    </Stack.Navigator>
  );
}
export default Navigation;
