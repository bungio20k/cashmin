import { View } from "react-native";

import Theme from "src/theme/mainTheme";

// Home tab
import HomeScreen from "src/screens/AppScreens/HomeTab/HomeScreen";

// Transaction tab
import IncomeExpenseScreen from "src/screens/AppScreens/TransactionTab/IncomeExpenseScreen";

// Wallet tab
import WalletNavigator from "src/navigation/WalletNavigator";
import WalletScreen from "src/screens/AppScreens/WalletTab/WalletScreen";

// More tab
import MoreNavigator from "src/navigation/MoreNavigator";
import MoreScreen from "src/screens/AppScreens/MoreTab/MoreScreen";

import IonIcon from "@expo/vector-icons/Ionicons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator 
            initialRouteName="Trang chủ" 
            screenOptions={{ 
                headerShown: false, 
                unmountOnBlur: true,
                tabBarActiveTintColor: Theme.darkGreen }}>
            <Tab.Screen 
                name='Trang chủ' 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ position: "relative", justifyContent: "center", alignItems: "center" }}>
                            {focused && <IonIcon name="radio-button-off" color={color} size={size * 1.35} />}
                            <IonIcon name="home-sharp" color={color} size={size * 0.8} style={focused? iconStyle : {}} />
                        </View>
                    )
                }} />

            <Tab.Screen 
                name='Thu - Chi' 
                component={IncomeExpenseScreen} 
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ position: "relative", justifyContent: "center", alignItems: "center" }}>
                            {focused && <IonIcon name="radio-button-off" color={color} size={size * 1.35} />}
                            <IonIcon name="logo-usd" color={color} size={size} style={focused? iconStyle : {}} />
                        </View>
                    )
                }} />
            <Tab.Screen 
                name='Ví' 
                component={WalletNavigator}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ position: "relative", justifyContent: "center", alignItems: "center" }}>
                            {focused && <IonIcon name="radio-button-off" color={color} size={size * 1.35} />}
                            <IonIcon name="wallet" color={color} size={size * 0.85} style={focused? iconStyle : {}} />
                        </View>
                    )
                }} />
            <Tab.Screen
                name='Khác' 
                component={MoreNavigator}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ position: "relative", justifyContent: "center", alignItems: "center" }}>
                            {focused && <IonIcon name="radio-button-off" color={color} size={size * 1.35} />}
                            <IonIcon name="ellipsis-horizontal" color={color} size={size} style={focused? iconStyle : {}} />
                        </View>
                    )
                }} />
        </Tab.Navigator>
    )
}

const iconStyle = {
    position: "absolute",
    zIndex: 10
};

const options = ({ route }) => ({

})