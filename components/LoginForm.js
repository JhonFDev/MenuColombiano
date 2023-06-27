import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Icon, Input } from "@rneui/base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "../utils/actions";

export default function LoginForm() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doLoginUser = async () => {
    await loginUser(email, password);
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.viewinputs}>
        <Input
        value={email}
          onChangeText={(value) => setEmail(value)}
          placeholder="abcdef@dominio.com"
          inputContainerStyle={styles.inputCS}
          label="Ingresa tu correo"
          labelStyle={styles.label}
          keyboardType={"email-address"}
          autoCapitalize={"none"}
        />
        <Input
        value={password}
          onChangeText={(value) => setPassword(value)}
          placeholder="xxxxxxxx"
          inputContainerStyle={styles.inputCS}
          label="Ingresa tu contraseña"
          labelStyle={styles.label}
          password={true}
          secureTextEntry={true}

          //   rightIcon={
          //     <Icon
          //       type="material-community"
          //       name={showPassword ? "eye-outline" : "eye-off-outline"}
          //       onPress={() => setShowPassword(!showPassword)}
          //     />
          //   }
        />

        <TouchableOpacity style={styles.toucha} onPress={doLoginUser}>
          <Text style={styles.textouch}>Inicar Sesion</Text>
        </TouchableOpacity>

        <View style={styles.viewgotoregister}>
          <Text style={styles.texttoregister}>¿No tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("register")}>
            <Text style={styles.texttoregister}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputCS: {
    width: 250,
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ffffff90",
  },
  label: {
    color: "black",
    alignSelf: "center",
    marginTop: 10,
  },
  viewinputs: {
    alignSelf: "center",
  },
  viewgotoregister: {
    flexDirection: "row",
    gap: 10,
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 25,
  },
  texttoregister: {
    fontSize: 15,
    fontWeight: "bold",
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
