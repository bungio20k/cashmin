import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import styles from "../../styles/home/ThuChiStyle";
import { Select } from "native-base";
import { useState } from "react";

const ThuChi = () => {
  const [type, setType] = useState("day");

  return (
    <View style={styles.thuchiContainer}>
      <View style={styles.thuchiTop}>
        <View style={styles.thuchiTitleWrapper}>
          <Text style={styles.thuchiTitle}>Tình hình thu chi</Text>
          <Select
            w="86px"
            h="18px"
            p="0"
            selectedValue={type}
            onValueChange={(itemValue) => {
              setType(itemValue);
            }}
            _selectedItem={{
              bg: "teal.600",
            }}
            borderColor="transparent"
            borderBottomColor="#888"
            borderRadius="none"
          >
            <Select.Item label="Hôm nay" value="day" />
            <Select.Item label="Tuần này" value="week" />
            <Select.Item label="Tháng này" value="month" />
            <Select.Item label="Năm này" value="year" />
          </Select>
        </View>
        <AntDesign name="arrowright" size={24} color="#198155" />
      </View>
      <View style={styles.thuchiContent}>
        <View style={styles.thuchiChart}>
          <View
            style={{
              width: 36,
              height: "100%",
              backgroundColor: "#198155",
              marginHorizontal: 4,
            }}
          ></View>
          <View
            style={{
              width: 36,
              height: "20%",
              backgroundColor: "#D3180C",
            }}
          ></View>
        </View>
        <View style={styles.thuchiDesc}>
          <View style={styles.thuItem}>
            <View style={styles.nameItemWrapper}>
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: "#198155",
                  marginRight: 4,
                  borderRadius: 8,
                }}
              ></View>
              <Text style={styles.nameItem}>Thu</Text>
            </View>
            <Text style={styles.thuMoney}>1.000.000.000 đ</Text>
          </View>
          <View style={styles.chiItem}>
            <View style={styles.nameItemWrapper}>
              <View
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: "#D3180C",
                  marginRight: 4,
                  borderRadius: 8,
                }}
              ></View>
              <Text style={styles.nameItem}>Chi</Text>
            </View>
            <Text style={styles.chiMoney}>1 đ</Text>
          </View>
          <Text style={styles.result}>999.999.999 đ</Text>
        </View>
      </View>
    </View>
  );
};

export default ThuChi;
