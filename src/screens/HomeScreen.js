import { StyleSheet, Text, View } from "react-native";

import HomeTop from "../components/home/HomeTop";
import ThuChi from "../components/home/ThuChi";
import HanMuc from "../components/home/HanMuc";
import VayNo from "../components/home/VayNo";

export default function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <HomeTop />
      <View style={styles.mainContainer}>
        <ThuChi />
        <HanMuc />
        <VayNo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#c9daea",
  },
});
