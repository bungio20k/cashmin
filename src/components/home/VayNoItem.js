import { Text, View } from "react-native";
import React from "react";
import styles from "../../styles/home/VayNoItemStyle";

const VayNoItem = ({ item }) => {
  return (
    <View style={styles.vaynoItem}>
      <Text style={styles.vaynoItemName}>{item.name}</Text>
      <Text
        style={[
          styles.vaynoItemMoney,
          { color: (item.money.includes("-") && "red") || "green" },
        ]}
      >
        {item.money}
      </Text>
      <Text style={styles.vaynoItemTime}>{item.time}</Text>
    </View>
  );
};

export default VayNoItem;
