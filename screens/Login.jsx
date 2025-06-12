import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

//mis imports
import LoginForm from "../components/LoginForm";

export default function Login() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
  return (
    <>
      <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }} className="border h-screen">
      <View className="flex-1 justify-center items-center w-max:[400] border-4">

        <Text>yo soy la vista Login XD</Text>
        {
            <LoginForm />
        }
        <View className="border p-3 flex flex-row gap-2">
            <Text className="text-black text-xl">Con que no tienes un usuario </Text>
            <Pressable onPress={() => navigation.navigate('register')} ><Text className="text-blue-500 font-bold text-xl">Crea Tu Cuenta</Text></Pressable>
        </View>
      </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({});
