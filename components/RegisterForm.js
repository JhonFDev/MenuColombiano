import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Icon, Input } from "@rneui/themed";
import { Button } from "@react-native-material/core";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { size } from "lodash";
import { TouchableOpacity } from "react-native-gesture-handler";
import { registerUser } from "../utils/actions";

//mis imports

export default function RegisterForm() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doRegisterUser = async () => {
    await registerUser(email, password);
  };

  return (
    <View>
      <View style={styles.viewinputs}>
        <Input
          placeholder="Ingresar Usuario"
          inputContainerStyle={styles.inputCS}
        />
        <Input
          value={email}
          onChangeText={(value) => setEmail(value)}
          placeholder="Ingresa tu correo"
          inputContainerStyle={styles.inputCS}
          keyboardType={"email-address"}
          autoCapitalize={"none"}
        />
        <Input
          value={password}
          onChangeText={(value) => setPassword(value)}
          placeholder="Ingresa tu contraseña"
          inputContainerStyle={styles.inputCS}
          password={true}
          secureTextEntry={true}
        />
        <Input
          placeholder="Confirma la contraseña"
          inputContainerStyle={styles.inputCS}
          password={true}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.toucha} onPress={doRegisterUser}>
          <Text style={styles.textouch}>Registrarme</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  viewlogin: {
    width: 350,
    height: 500,
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    alignItems: "center",
  },
  inputCS: {
    width: 250,
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#ffffff90",
    marginTop: 10,
  },
  label: {
    color: "black",
    alignSelf: "center",
    marginTop: 10,
  },
  textregister: {
    marginTop: 15,
    marginHorizontal: 10,
    alignSelf: "center",
  },
  btntextregister: {
    marginTop: 10,
  },
  viewstyle: {
    flexDirection: "row",
  },
  viewinputs: {
    alignSelf: "center",
  },
  titlestyle: {
    color: "white",
    fontWeight: "normal",
    fontSize: 15,
  },
  toucha: {
    backgroundColor: "yellow",
    // borderWidth: 2,
    // borderColor: "red",
    marginVertical: 10,
    marginHorizontal: 40,
    borderRadius: 20,
    paddingVertical: 7,
  },
  textouch: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
