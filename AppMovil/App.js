import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation.Routes';
import { Provider } from 'react-redux';
import store from './src/Context/Store';

export default function App() {
  return (
    <Provider store={store} >
      <Navigation></Navigation>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
