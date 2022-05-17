import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import IncomeExpenseScreen from "./src/screens/IncomeExpenseScreen";
import CategoryScreen from "./src/screens/CategoryScreen";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RetrieveScreen from "./src/screens/RetrieveScreen";
import LimitScreen from "./src/screens/LimitScreen";

import ReportHistoryScreen from "./src/screens/ReportHistoryScreen";
import WalletScreen from "./src/screens/WalletScreen";

import AddWalletScreen from "./src/screens/AddWalletScreen";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
        <AddWalletScreen />
        

        {/* <Tab.Navigator 
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}>
          
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Trang chủ"
            }} />

          <Tab.Screen 
            name="ReportHistory" 
            component={ReportHistoryScreen} 
            options={{
              tabBarLabel: "Thống kê"
            }} />

          <Tab.Screen 
            name="IncomeExpense" 
            component={IncomeExpenseScreen} 
            options={{
              tabBarLabel: "Thu - Chi"
            }} />

          <Tab.Screen 
            name="Limit" 
            component={LimitScreen} 
            options={{
              tabBarLabel: "Hạn mức"
            }} />
        </Tab.Navigator> */}

      {/* </NavigationContainer> */}
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
