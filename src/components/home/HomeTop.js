import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import styles from "../../styles/home/HomeTopStyle";

const HomeTop = () => {
  return (
    <View style={styles.top}>
      <View style={styles.title}>
        <Text style={styles.name}>Chào Nguyễn Văn A!</Text>
        <View style={styles.iconWrapper}>
          <Ionicons name="notifications" size={24} color="#ECFCE5" />
        </View>
      </View>
      <View style={styles.moneyContainer}>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Tổng số dư</Text>
          <Text style={styles.money}>999.999.999đ</Text>
        </View>
        <View sytle={styles.viewIcon}>
          <AntDesign name="eye" size={24} color="#3C896D" />
        </View>
      </View>
    </View>
  );
};

export default HomeTop;
