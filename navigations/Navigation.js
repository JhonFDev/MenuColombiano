import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//mis imports
import { isUserLoggedAuthChaged } from "../utils/actions";
import Welcome from "../screeens/Welcome";
import Login from "../screeens/Login";
import Home from "../screeens/Home";
import Register from "../screeens/Register";
import Profile from "../screeens/account/Profile";
import Dishes from "../screeens/Dishes";
import { Icon } from "@rneui/themed";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  //agregar iconos a la tab
  const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
      case "homep":
        iconName = "book-open-outline";
        break;
        case "profile":
          iconName = "home-circle-outline";
          break;
          
          default:
            break;
          }
          return <Icon type="material-community" name={iconName} size={28} color={color}/>;
        };
        // fin agregar iconos a la tab
        
        

  const { user } = isUserLoggedAuthChaged();
  if (user) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="homep"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({color}) => screenOptions(route, color),
            tabBarActiveTintColor:"black",
            tabBarInactiveTintColor:"gray",
            tabBarAllowFontScaling:true,
            tabBarLabelStyle:({fontSize:14, fontWeight:"bold"})
            
          })}
        >
          <Tab.Screen
            name="homep"
            component={Homep}
            options={{ title: "Recetas" }}
            
            
          />
          <Tab.Screen name="profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function Homep() {
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
