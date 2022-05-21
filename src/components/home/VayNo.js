import { Text, View, FlatList, SafeAreaView, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import VayNoItem from "./VayNoItem";
import styles from "../../styles/home/VayNoStyle";

const data = [
  {
    name: "Nợ A",
    money: "+9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "-9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "-9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "+9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "-9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "+9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "-9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "-9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "+9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "+9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "-9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "+9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "-9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "-9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "+9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "+9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "-9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "-9.000.000",
    time: "30/04/2022",
  },
  {
    name: "Nợ A",
    money: "+9.000.000",
    time: "30/04/2022",
  },
];

const VayNo = () => {
  return (
    <View style={styles.vaynoContainer}>
      <View style={styles.vaynoTop}>
        <Text style={styles.vaynoTitle}>Tình hình vay nợ</Text>

        <AntDesign name="arrowright" size={24} color="#198155" />
      </View>
      <SafeAreaView>
        <ScrollView nestedScrollEnabled>
          {data.map((item, index) => (
            <VayNoItem item={item} key={index} />
          ))}
        </ScrollView>
      </SafeAreaView>
      {/* <SafeAreaView style={styles.vaynoList}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <VayNoItem item={item} />}
          nestedScrollEnabled
        />
      </SafeAreaView> */}
    </View>
  );
};

export default VayNo;
