import { Text, View } from "react-native";
import React from "react";
import styles from "../../styles/home/VayNoItemStyle";
import { HStack, VStack } from "native-base";

const VayNoItem = ({ item }) => {
  return (
    <View style={styles.vaynoItem}>
      <VStack space={1}>
        <Text style={styles.vaynoItemName}>{item.name}</Text>
        <HStack justifyContent="space-between" paddingRight={4} paddingLeft={4}>
          <Text
            style={[
              styles.vaynoItemMoney,
              { color: (item.isDebt && "red") || "green" },
            ]}
          >
            {item.amount}
          </Text>
          <Text style={styles.vaynoItemTime}>{item.deadline}</Text>
        </HStack>
      </VStack>
    </View>
  );
};

export default VayNoItem;
