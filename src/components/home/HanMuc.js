import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import styles from "../../styles/home/HanMucStyle";

const HanMuc = () => {
  return (
    <View style={styles.hanmucContainer}>
      <View style={styles.hanmucTop}>
        <Text style={styles.hanmucTitle}>Hạn mức chi</Text>
        <AntDesign name="arrowright" size={24} color="#198155" />
      </View>
      <View style={styles.hanmucInfo}>
        <Text style={styles.hanmucDate}>01/04 - 30/04</Text>
        <Text style={styles.hanmucMoney}>999.999.999 đ</Text>
      </View>
      <View style={styles.hanmucChart}>
        <View
          style={{
            width: "50%",
            height: "100%",
            backgroundColor: "#198155",
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
          }}
        ></View>
      </View>
      <View style={styles.hanmucInfoBottom}>
        <Text style={styles.hanmucDateLeft}>Còn lại 15 ngày</Text>
        <Text style={styles.hanmucMoneyLeft}>555.555.555 đ</Text>
      </View>
    </View>
  );
};

export default HanMuc;
