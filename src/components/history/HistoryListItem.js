import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Theme from "src/theme/mainTheme";
import Typo from "src/theme/mainTypo";
import { Ionicons } from "@expo/vector-icons";

export function HistoryListItem({ data }) {
  return (
    <View style={st.container}>
      <Ionicons name={data.icon} size={30} color="#198155" />
      <View style={st.textContainer}>
        <Text style={st.description}>{data.name}</Text>
        <Text style={st.textTime}>1/1/2022</Text>
      </View>
      <View style={st.amountContainer}>
        <Text
          style={{
            color: (data.amount.includes("-") && "red") || "green",
            fontWeight: "700",
          }}
        >
          {data.amount}
        </Text>
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: "5%",
    marginBottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    backgroundColor: Theme.lightGreen,
    width: "90%",
  },
  icon: {
    flex: 1,
    margin: 10,
  },
  textContainer: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 8,
  },
  description: {
    fontSize: 16,
  },
  textTime: {
    fontSize: 12,
    color: "#555",
    fontStyle: "italic",
  },
  amountContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontWeight: "700",
  },
});
