import { View } from "react-native";
import styles from "../styles/navigation/navigationStyle";

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

const getStyle = (focused, color, size) => {
  return {
    justifyContent: "center",
    alignItems: "center",
    borderColor: color,
    padding: 2,
    borderRadius: size + 4,
    borderWidth: (focused && 2) || 0,
  };
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Trang chủ"
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
        tabBarStyle: { position: "absolute", zIndex: 10 },
        tabBarIconStyle: {},
        tabBarLabelStyle: {
          marginBottom: 2,
        },
      }}
    >
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={getStyle(focused, color, size)}>
              <IonIcon
                name="home-sharp"
                color={color}
                size={size}
                style={{ lineHeight: size }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Thu - Chi"
        component={IncomeExpenseScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={getStyle(focused, color, size)}>
              <IonIcon
                name="logo-usd"
                color={color}
                size={size}
                style={{ lineHeight: size, marginLeft: 1, marginRight: -1 }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Ví"
        component={WalletNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={getStyle(focused, color, size)}>
              <IonIcon
                name="wallet"
                color={color}
                size={size}
                style={{
                  lineHeight: size,
                  marginLeft: 2,
                  marginRight: -1,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Khác"
        component={MoreNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={getStyle(focused, color, size)}>
              <IonIcon
                name="ellipsis-horizontal"
                color={color}
                size={size}
                style={{ lineHeight: size, marginLeft: 1 }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const iconStyle = {
  //   position: "absolute",
  //   zIndex: 10,
};

const options = ({ route }) => ({});
