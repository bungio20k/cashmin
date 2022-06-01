import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, {
  useContext,
} from "react";
import styles from "../../styles/home/HanMucStyle";
import DataContext from "../../hooks/data/DataContext";

// Navigation
import { useNavigation } from "@react-navigation/native";
import { formatAmountOnly, formatCurrencyOnly } from "src/utils";

const HanMuc = () => {
  const navigation = useNavigation();
  const { limits, settings } = useContext(DataContext);
  return (
    <View style={styles.hanmucContainer}>
      <View style={styles.hanmucTop}>
        <Text style={styles.hanmucTitle}>Hạn mức chi</Text>
        <AntDesign
          name="arrowright"
          size={24}
          color="#198155"
          onPress={() => navigation.navigate("Khác", { screen: "Limit" })}
        />
      </View>
      <View style={styles.hanmucInfo}>
        <Text style={styles.hanmucDate}>Hạn mức chi hôm nay</Text>
        <Text style={styles.hanmucMoney}>
          {limits.daily.isActive ?
            formatAmountOnly(limits.daily.limit, settings.currency)
            : "Chưa đặt"} {" "}
          {formatCurrencyOnly(settings.currency)}
        </Text>
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
        <Text style={styles.hanmucDateLeft}>Đã tiêu</Text>
        <Text style={styles.hanmucMoneyLeft}>Chờ hoàn thiện</Text>
      </View>
    </View>
  );
};

export default HanMuc;
