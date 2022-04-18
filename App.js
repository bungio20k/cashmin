import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import IncomeExpenseScreen from "./src/screens/IncomeExpenseScreen";

import WelcomeScreen from './src/screens/WelcomeScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import LoginScreen from './src/screens/LoginScreen'
import RetrieveScreen from './src/screens/RetrieveScreen'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NativeBaseProvider>
      {/* <HomeScreen /> */}
      <WelcomeScreen />
      {/* <RegisterScreen /> */}
      {/* <LoginScreen /> */}
      {/* <RetrieveScreen /> */}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
