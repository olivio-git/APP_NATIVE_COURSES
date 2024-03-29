import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert } from "react-native";
import GoogleIcon from '../../assets/google.png';
import GitHubIcon from '../../assets/git.png';
import { useNavigation } from "@react-navigation/native";
import { handleLoginUserFetch } from "../utils/fetchReq";

export const LoginScreen = () => {
  const navigate = useNavigation();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const handleChange = (property) => (value) => {
    setUser((prevUser) => ({ ...prevUser, [property]: value }))
  }
  const handleLogin = async () => {
    const response = await handleLoginUserFetch(user);
    Alert.alert("Exito!", "Usuario logeado exitosamente!");
    navigate.navigate('home');
  };
  const handleRegister = () => {
    navigate.navigate('register')
  };
  const handleLoguinGoogle = () => {

  };
  const handleLoginGitHub = () => {

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
      <View style={styles.buttonCrearCuenta}>
        <Pressable
          style={styles.buttonGoogle}
          onPress={handleRegister}
        >
          <Text>Crear cuentas</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.buttonGoogle}
          onPress={handleLoguinGoogle}
        >
          <Image source={GoogleIcon} style={styles.googleIcon} />
          <Text>Ingresar con Google</Text>
        </Pressable>
      </View>
      <View style={styles.centerContainer}>
        <Text>o</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.buttonGoogle}
          onPress={handleLoginGitHub}
        >
          <Image source={GitHubIcon} style={styles.googleIcon} />
          <Text>GitHub</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingTop: 50,
    gap: 4
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
  googleIcon: {
    width: 24, // Ajusta el tamaño según necesites
    height: 24, // Ajusta el tamaño según necesites
    marginRight: 10, // Espacio a la derecha del ícono
  },
  buttonCrearCuenta: {
    width: '100%',
    marginTop: 20 // Asegura que el contenedor ocupe todo el ancho disponible
  },
  buttonContainer: {
    width: '100%', // Asegura que el contenedor ocupe todo el ancho disponible
  },
  centerContainer: {
    justifyContent: 'center', // Centra verticalmente el texto "o"
    alignItems: 'center', // Asegura que el texto "o" esté centrado horizontalmente
    marginVertical: 5, // Espacio vertical entre los botones y el texto "o"
  },
});
