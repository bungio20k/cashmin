import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "../styles/income_expense/MainStyle";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import FormAddNewItem from "../components/income_expense/FormAddNewItem";
import { Keyboard } from "react-native";

const IncomeExpenseScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          {/* <Ionicons name="add-circle" size={36} color="#198155" /> */}
          <Text style={styles.title}>Thêm thu chi</Text>
        </View>
        <View style={styles.historyContainer}>
          <FontAwesome name="history" size={22} color="#39A0ED" />
          <Text style={styles.history}>Xem lịch sử</Text>
        </View>
        <FormAddNewItem />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default IncomeExpenseScreen;
