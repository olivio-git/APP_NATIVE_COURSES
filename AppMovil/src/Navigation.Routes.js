import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./Screen/HomeScreen";
import { LoginScreen } from "./Screen/LoginScreen";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RegisterScreen } from "./Screen/RegisterScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => { 
  const auth = useSelector((state) => state.authenticacion.auth);
  const [authState,setAuthState]=useState(false);
  
  useEffect(()=>{
    setAuthState(auth);
  },[auth])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={authState ? "home" : "login"}>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
