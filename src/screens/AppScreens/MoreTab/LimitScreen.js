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

const LimitScreen = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const [showModal, setShowModal] = useState(false);
  const [limit, setLimit] = useState({});
  const { limits, setLimits } = useContext(DataContext);
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
