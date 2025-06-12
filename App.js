import { StatusBar } from "expo-status-bar";

import Navigation from "./navigation/Navigation";
import "./global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Navigation />
    </SafeAreaProvider>
  );
}
