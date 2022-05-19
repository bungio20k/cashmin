import WalletScreen from "src/screens/AppScreens/WalletTab/WalletScreen";
import AddWalletScreen from "src/screens/AppScreens/WalletTab/AddWalletScreen"
// TODO: import DebtScreen from "src/screens/AppScreens/WalletTab/..."

import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function WalletNavigator() {
  const navigation = useNavigation();
  useEffect(() => {
    return () => {
      navigation.setParams({ screen: undefined });
    }
  }, [navigation]);

  return (
    <Stack.Navigator initialRouteName="Wallet" screenOptions={{ headerShown: false, unmountOnBlur: true }}>
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="AddWallet" component={AddWalletScreen} />
    </Stack.Navigator>
  )
}