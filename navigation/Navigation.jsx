import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//mis imports
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';


const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='welcome'  screenOptions={{ headerShown: false }}>
       <Stack.Screen name="welcome" component={Welcome} />
       <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation