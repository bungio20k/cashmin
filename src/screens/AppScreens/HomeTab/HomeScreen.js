import { StyleSheet, Text, View } from "react-native";

import HomeTop from "src/components/home/HomeTop";
import ThuChi from "src/components/home/ThuChi";
import HanMuc from "src/components/home/HanMuc";
import VayNo from "src/components/home/VayNo";

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
    backgroundColor: "white",
  },
});
