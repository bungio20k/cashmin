import { Text, View, FlatList, SafeAreaView, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import VayNoItem from "./VayNoItem";
import styles from "../../styles/home/VayNoStyle";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import DataContext from "../../hooks/data/DataContext";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { LimitScreen } from "src/screens/AppScreens/MoreTab/LimitScreen";
import { AddDebitScreen } from "src/screens/AppScreens/WalletTab/AddDebitScreen";

const VayNo = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation();
  const { debits } = useContext(DataContext);
  return (
    <View style={[styles.vaynoContainer, { marginBottom: tabBarHeight + 10 }]}>
      <View style={styles.vaynoTop}>
        <Text style={styles.vaynoTitle}>Tình hình vay nợ</Text>

        <AntDesign
          name="arrowright"
          size={24}
          color="#198155"
          onPress={() => navigation.navigate("Ví", { screen: "AddDebit" })}
        />
      </View>
      <SafeAreaView>
        <ScrollView nestedScrollEnabled>
          {debits.map((item) => (
            <VayNoItem item={item} key={item._id} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default VayNo;
