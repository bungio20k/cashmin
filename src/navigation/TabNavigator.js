import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import IncomeExpenseScreen from "../screens/IncomeExpenseScreen";
import WalletScreen from "../screens/WalletScreen";
import MoreScreen from "../screens/MoreScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Trang chủ' component={HomeScreen} />
            <Tab.Screen name='Thu chi' component={IncomeExpenseScreen} />
            <Tab.Screen name='Ví' component={WalletScreen} />
            <Tab.Screen name='Khác' component={MoreScreen} />
        </Tab.Navigator>
    )
}

const options = ({ route }) => ({
    
})