import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      className="border-4 border-red-500 h-full"
    >
      <View className="flex-1 justify-center items-center">
        <Text>yo soy la vista Register</Text>
        {
            <RegisterForm />
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
