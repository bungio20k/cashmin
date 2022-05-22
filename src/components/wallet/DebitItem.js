import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Button } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const DebitItem = ({ debit, setCurrentDebit, setShowModal2, setHold }) => {
  return (
    <TouchableOpacity
      style={style.card}
      onPress={() => {
        setCurrentDebit(debit);
        setShowModal2(true);
      }}
      onLongPress={() => {
        setCurrentDebit(debit);
        setHold(true);
      }}
      delayLongPress={100}
    >
      <Text style={[style.name, { color: (debit.debt && "red") || "green" }]}>
        {debit.name}
      </Text>
      <View style={style.textContainer}>
        <FontAwesome5
          name="coins"
          size={28}
          color="#198155"
          style={style.icon}
        />
        <Text style={style.tit}>Số tiền</Text>
        <Text
          style={[style.value, { color: (debit.debt && "red") || "green" }]}
        >
          {debit.amount}
        </Text>
      </View>
      <View style={style.textContainer}>
        <MaterialIcons
          name="category"
          size={28}
          color="#198155"
          style={style.icon}
        />
        <Text style={style.tit}>Hạng mục</Text>
        <Text style={style.value}>{debit.category}</Text>
      </View>
      <View style={style.textContainer}>
        <MaterialIcons
          name="description"
          size={28}
          color="#198155"
          style={style.icon}
        />
        <Text style={style.tit}>Mô tả</Text>
        <Text style={style.value}>{debit.desc}</Text>
      </View>
      <View style={style.textContainer}>
        <Ionicons name="time" size={28} color="#198155" style={style.icon} />
        <Text style={style.tit}>Ngày thanh toán</Text>
        <Text
          style={[style.value, { color: (debit.debt && "red") || "green" }]}
        >
          {debit.time}
        </Text>
      </View>
      <Button style={{ marginLeft: 18 }} colorScheme="success">
        Thanh toán
      </Button>
    </TouchableOpacity>
  );
};

export default DebitItem;

const style = StyleSheet.create({
  card: {
    backgroundColor: "#ECFCE5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: 20,
    paddingLeft: 8,
    paddingRight: 24,
    paddingVertical: 12,
    marginBottom: 12,
    width: "90%",
    marginHorizontal: "5%",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    // color: "#555",
    marginBottom: 8,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  value: {
    flex: 2,
    textAlign: "right",
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
  tit: {
    flex: 2,
    textAlign: "left",
    fontSize: 14,
    color: "#555",
  },
  icon: {
    flex: 1,
    textAlign: "center",
  },
});
