import { View, Text, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import styles from "src/styles/limit/MainStyle";
import { Ionicons } from "@expo/vector-icons";
import LimitItem from "src/components/limit/LimitItem";
import { FlatList } from "native-base";
import ModalEdit from "src/components/limit/ModalEdit";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import DataContext from "../../../hooks/data/DataContext";
import { FontAwesome } from "@expo/vector-icons";

const data = [
  {
    time: "Trong ngày",
    money: "120000",
    total: "200000",
  },
  {
    time: "Trong tuần",
    money: "2000000",
    total: "2000000",
  },
  {
    time: "Trong tháng",
    money: "17000000",
    total: "20000000",
  },
];

const LimitScreen = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const [showModal, setShowModal] = useState(false);
  const [limit, setLimit] = useState({});
  const { limits, setLimits } = useContext(DataContext);
  console.log(limits);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hạn mức chi</Text>
        <FontAwesome
          name="history"
          size={28}
          // color="#198155"
          color="#39A0ED"
          style={{
            marginRight: "5%",
          }}
        />
      </View>
      {/* <FlatList
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
      /> */}

      <ScrollView>
        <LimitItem
          title="Trong ngày"
          item={limits.daily}
          setLimit={setLimit}
          setShowModal={setShowModal}
        />
        <LimitItem
          title="Trong tuần"
          item={limits.weekly}
          setLimit={setLimit}
          setShowModal={setShowModal}
        />
        <LimitItem
          title="Trong tháng"
          item={limits.monthly}
          setLimit={setLimit}
          setShowModal={setShowModal}
        />
      </ScrollView>
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
