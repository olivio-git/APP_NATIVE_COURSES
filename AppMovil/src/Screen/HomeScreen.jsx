import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { updateAuth } from "../Context/Actions/AuthActions";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const authUpdate = () => {
    dispatch(updateAuth(false));
    navigate.navigate('login');
  };
  return (
    <View>
      <Text>Hola Screen!</Text>
      <TouchableOpacity onPress={authUpdate}>
        <Text>Cerrar sesion</Text>
      </TouchableOpacity>
    </View>
  );
};
