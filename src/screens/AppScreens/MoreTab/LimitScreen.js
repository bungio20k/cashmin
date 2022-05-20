import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "src/styles/limit/MainStyle";
import { Ionicons } from "@expo/vector-icons";
import LimitItem from "src/components/limit/LimitItem";
import { FlatList } from "native-base";
import ModalEdit from "src/components/limit/ModalEdit";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const data = [
  {
    time: "hôm nay",
    money: "120000",
    total: "200000",
  },
  {
    time: "tuần này",
    money: "2000000",
    total: "2000000",
  },
  {
    time: "tháng này",
    money: "17000000",
    total: "20000000",
  },
];

const LimitScreen = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const [showModal, setShowModal] = useState(false);
  const [limit, setLimit] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hạn mức chi</Text>
        <View style={styles.addIcon}>
          <Ionicons name="add-circle" size={48} color="#198155" />
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <LimitItem
            item={item}
            setLimit={setLimit}
            setShowModal={setShowModal}
          />
        )}
        keyExtractor={(item, index) => index}
        style={{ paddingHorizontal: 12, marginBottom: tabBarHeight }}
      />
      <ModalEdit
        showModal={showModal}
        setShowModal={setShowModal}
        limit={limit}
        setLimit={setLimit}
      />
    </View>
  );
};

export default LimitScreen;
