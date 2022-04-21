import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import styles from "../../styles/home/HomeTopStyle";

const HomeTop = () => {
  const [hideMoney, setHideMoney] = useState(false);

  return (
    <View style={styles.top}>
      <View style={styles.title}>
        <Text style={styles.name}>Chào Nguyễn Văn A!</Text>
        {/* <View style={styles.iconWrapper}>
          <Ionicons name="notifications" size={24} color="#ECFCE5" />
        </View> */}
      </View>
      <View style={styles.moneyContainer}>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Tổng số dư</Text>
          <Text style={styles.money}>
            {hideMoney ? "***.***.*** đ" : "999.999.999đ"}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            setHideMoney((prev) => {
              console.log("hello");
              return !prev;
            })
          }
        >
          {hideMoney ? (
            <Ionicons name="eye-off" size={24} color="#3C896D" />
          ) : (
            <Ionicons name="eye" size={24} color="#3C896D" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeTop;
