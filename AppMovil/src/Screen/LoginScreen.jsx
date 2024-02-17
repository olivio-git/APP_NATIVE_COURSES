import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import GoogleIcon from '../../assets/google.png';
export const LoginScreen = () => {
  const [user, setUser] = useState({
    email:"",
    password:""
  }); 
  const handleChange = (property) => (value) => {
    setUser((prevUser)=> ({...prevUser, [property]:value}))
  }
  const handleLogin = () => {
    console.log(user);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={handleChange("email")}
        value={user.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={handleChange("password")}
        value={user.password}
      />
      <Pressable style={styles.button} title="Ingresar" onPress={handleLogin}>
        <Text style={styles.text}>Iniciar sesión</Text>
      </Pressable>
      <Pressable
        style={styles.buttonGoogle}
        title="Ingresar"
        onPress={handleLogin}
      >
        <Text >{GoogleIcon}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  buttonGoogle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
