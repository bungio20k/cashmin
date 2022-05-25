import { View, Text } from "react-native";
import React from "react";
import styles from "../../styles/limit/LimitItemStyle";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const LimitItem = ({ item, setShowModal, setLimit }) => {
  const progress = (item.money / item.total) * 100;
  if (progress > 100) {
    progress = 100;
  }
  return (
    <View
      style={{
        backgroundColor: progress === 100 ? "#FFE5E5" : "#ECFCE5",
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginVertical: 8,
        borderRadius: 20,
      }}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.time}</Text>
        <View style={styles.actions}>
          <Entypo
            name="pencil"
            size={28}
            color="#198155"
            // color="#d8d511"
            style={{ marginRight: 16 }}
            onPress={() => {
              setLimit(item.money), setShowModal(true);
            }}
          />
          <FontAwesome
            name="history"
            size={28}
            color="#198155"
            // color="#3F00FF"
          />
        </View>
      </View>
      <Text
        style={{
          textAlign: "center",
          color: "#198155",
          fontSize: 16,
          marginTop: 12,
          marginBottom: 8,
          color: progress === 100 ? "#D3180C" : "#198155",
        }}
      >
        {item.money} / {item.total}
      </Text>
      <View
        style={{
          width: "100%",
          height: 26,
          borderRadius: 26,
          backgroundColor: "#c4c4c4",
        }}
      >
        <View
          style={{
            width: progress.toString() + "%",
            height: 26,
            borderRadius: 26,
            backgroundColor: progress === 100 ? "#D3180C" : "#3C896D",
          }}
        ></View>
      </View>
      <View style={styles.desc}>
        <View style={styles.descItem}>
          <Text style={styles.descTitle}>Hôm nay</Text>
          <Text style={styles.day}>
            {new Date().getDate()}/{new Date().getMonth() + 1}/
            {new Date().getFullYear()}
          </Text>
        </View>
        <View style={styles.descItem}>
          <Text style={styles.descTitle}>Giờ</Text>
          <Text style={styles.time}>
            {new Date().getHours()}:{new Date().getMinutes()}:
            {new Date().getSeconds()}
          </Text>
        </View>
        <View style={styles.descItem}>
          <Text style={styles.descTitle}>Đã tiêu</Text>
          <Text
            style={[
              styles.money,
              { color: progress === 100 ? "red" : "green" },
            ]}
          >
            {item.money}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LimitItem;
