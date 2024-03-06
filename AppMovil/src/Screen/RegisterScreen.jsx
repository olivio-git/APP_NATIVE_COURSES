import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import GoogleIcon from '../../assets/google.png';
import GitHubIcon from '../../assets/git.png';
import { useNavigation } from "@react-navigation/native";
import { handleRegisterUserFetch } from "../utils/fetchReq";
import { Alert } from 'react-native';


export const RegisterScreen = () => {
  const navigate = useNavigation();
  const [user, setUser] = useState({
    nombre:"",
    apellidos:"",
    telefono:"",
    semestre:0,
    email:"",
    password:""
  }); 
  const handleChange = (property) => (value) => {
    setUser((prevUser)=> ({...prevUser, [property]:value})) 
  }
  const handleLogin = () => {
    navigate.goBack();
  };
  const handleRegister = async () => {
    const response = await handleRegisterUserFetch(user);
    Alert.alert(
      "Éxito!",
      `Usuario creado exitosamente!`
    );
    navigate.goBack();
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombres"
        onChangeText={handleChange("nombre")}
        value={user.nombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        onChangeText={handleChange("apellidos")}
        value={user.apellidos}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefono"
        onChangeText={handleChange("telefono")}
        value={user.telefono}
      />
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
      <Picker
        selectedValue={user.semestre}
        style={styles.picker}
        onValueChange={(itemValue) => handleChange("semestre")(itemValue)}
      > 
        {Array.from({ length: 9 }, (_, i) => i + 1).map((value) => (
          <Picker.Item key={value} label={`Semestre ${value}`} value={value} />
        ))}
      </Picker>
      <Pressable style={styles.button} title="Ingresar" onPress={handleRegister}>
        <Text style={styles.text}>Crear cuenta</Text>
      </Pressable>
      <View style={styles.buttonCrearCuenta}>
        <Pressable
          style={styles.buttonGoogle}
          onPress={handleLogin}
        >
          <Text>Iniciar sesión</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.buttonGoogle}
          onPress={handleLogin}
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
          onPress={handleLogin}
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
    paddingTop:50,
    gap:4
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
    marginTop:20 // Asegura que el contenedor ocupe todo el ancho disponible
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
