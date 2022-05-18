import MoreScreen from "src/screens/AppScreens/MoreTab/MoreScreen";
import ReportHistoryScreen from "src/screens/AppScreens/MoreTab/ReportHistoryScreen";
import LimitScreen from "src/screens/AppScreens/MoreTab/LimitScreen";

import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function MoreNavigator() {
  const navigation = useNavigation();
  useEffect(() => {
    return () => {
      navigation.setParams({ screen: undefined });
    }    
  }, [navigation]);

  return (
    <Stack.Navigator initialRouteName="More" screenOptions={{ headerShown: false, unmountOnBlur: true }}>
      <Stack.Screen name="More" component={MoreScreen}  />
      <Stack.Screen name="ReportHistory" component={ReportHistoryScreen} />
      <Stack.Screen name="Limit" component={LimitScreen} />
    </Stack.Navigator>
  )
}