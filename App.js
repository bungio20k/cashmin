import { NativeBaseProvider } from "native-base";

// Authentication screens
import WelcomeScreen from "src/screens/AuthScreens/WelcomeScreen";
import RegisterScreen from "src/screens/AuthScreens/RegisterScreen";
import LoginScreen from "src/screens/AuthScreens/LoginScreen";
import RetrieveScreen from "src/screens/AuthScreens/RetrieveScreen";

// Home tab
import HomeScreen from "src/screens/AppScreens/HomeTab/HomeScreen";

// Transaction tab
import IncomeExpenseScreen from "src/screens/AppScreens/TransactionTab/IncomeExpenseScreen";

// Wallet tab
import WalletScreen from "./src/screens/AppScreens/WalletTab/WalletScreen";
import AddWalletScreen from "src/screens/AppScreens/WalletTab/AddWalletScreen";

// More tab
import ReportHistoryScreen from "src/screens/AppScreens/MoreTab/ReportHistoryScreen";
import CategoryScreen from "src/screens/AppScreens/MoreTab/CategoryScreen";
import LimitScreen from "src/screens/AppScreens/MoreTab/LimitScreen";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "src/navigation/TabNavigator";


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>  
        <TabNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}