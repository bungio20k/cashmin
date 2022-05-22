import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import styles from "../../styles/wallet/Debit";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const walletData = [
  {
    key: "1",
    name: "Nợ 1",
    amount: "+100.000đ",
  },
  {
    key: "2",
    name: "Nợ 2",
    amount: "-100.000đ",
  },
  {
    key: "3",
    name: "Nợ 3",
    amount: "+100.000đ",
  },
  {
    key: "4",
    name: "Nợ 4",
    amount: "-100.000đ",
  },
  {
    key: "5",
    name: "Nợ 5",
    amount: "-100.000đ",
  },
  {
    key: "6",
    name: "Nợ 4",
    amount: "+100.000đ",
  },
  {
    key: "7",
    name: "Nợ 5",
    amount: "-100.000đ",
  },
];

const Debit = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.top}>
      <View style={styles.title}>
        <Text style={styles.name}>Sổ ghi nợ</Text>
        <AntDesign
          name="arrowright"
          size={24}
          color="#198155"
          onPress={() => navigation.navigate("Ví", { screen: "AddDebit" })}
        />
      </View>

      <ScrollView nestedScrollEnabled>
        {walletData.map((wallet) => (
          <View style={styles.moneyContainer} key={wallet.key}>
            <Text style={styles.contentTitle}>{wallet.name}</Text>
            <Text
              style={[
                styles.money,
                { color: (wallet.amount.includes("-") && "red") || "green" },
              ]}
            >
              {wallet.amount}
            </Text>
          </View>
        ))}
      </ScrollView>
      {/* <TouchableOpacity style={styles.walletContainer} onPress={() => navigation.navigate("Ví", { screen: "AddDebit" })}>
        <View style={styles.content}>
          {walletData.map(wallet => (
            <View style={styles.moneyContainer} key={wallet.key}>
              <Text style={styles.contentTitle}>{wallet.name}</Text>
              <Text style={styles.money}>
                {wallet.amount}
              </Text>
            </View>
          ))}
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default Debit;
