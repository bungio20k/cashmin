import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";

// Authentication screens
import WelcomeScreen from "src/screens/AuthScreens/WelcomeScreen";
import RegisterScreen from "src/screens/AuthScreens/RegisterScreen";
import LoginScreen from "src/screens/AuthScreens/LoginScreen";
import RetrieveScreen from "src/screens/AuthScreens/RetrieveScreen";

// Home tab
import HomeScreen from "src/screens/AppScreens/HomeTab/HomeScreen";
import ReportHistoryScreen from "src/screens/AppScreens/HomeTab/ReportHistoryScreen";

// Transaction tab
import IncomeExpenseScreen from "src/screens/AppScreens/TransactionTab/IncomeExpenseScreen";

// Wallet tab
import AddWalletScreen from "src/screens/AppScreens/WalletTab/AddWalletScreen";

// More tab
import CategoryScreen from "src/screens/AppScreens/MoreTab/CategoryScreen";
import LimitScreen from "src/screens/AppScreens/MoreTab/LimitScreen";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
        {/* <AddWalletScreen /> */}

      <NavigationContainer>  
        <Tab.Navigator 
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
        </Tab.Navigator>

      </NavigationContainer>
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
