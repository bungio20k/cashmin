import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/wallet/AddWallet";
import { AntDesign } from "@expo/vector-icons";

// Navigation
import { useNavigation } from "@react-navigation/native";

const walletData = [
  {
    key: "1",
    name: "Ví chính",
    balance: "999.999.999đ",
  },
  {
    key: "2",
    name: "Ví phụ",
    balance: "999.999.999đ",
  },
  {
    key: "3",
    name: "Ví phụ 2",
    balance: "999.999.999đ",
  },
  {
    key: "4",
    name: "Ví phụ 3",
    balance: "999.999.999đ",
  },
  {
    key: "5",
    name: "Ví phụ 4",
    balance: "999.999.999đ",
  },
];

const Wallet = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.top}>
      <View style={styles.title}>
        <Text style={styles.name}>Thêm - xóa ví</Text>
        <AntDesign
          name="arrowright"
          size={24}
          color="#198155"
          onPress={() => navigation.navigate("Ví", { screen: "AddWallet" })}
        />
      </View>

      <ScrollView nestedScrollEnabled>
        {walletData.map((wallet) => (
          <View style={styles.moneyContainer} key={wallet.key}>
            <Text style={styles.contentTitle}>{wallet.name}</Text>
            <Text style={styles.money}>{wallet.balance}</Text>
          </View>
        ))}
      </ScrollView>
      {/* <TouchableOpacity
        style={styles.walletContainer}
        onPress={() => navigation.navigate("Ví", { screen: "AddWallet" })}
      >
        <View style={styles.content}>
          {walletData.map((wallet) => (
            <View style={styles.moneyContainer} key={wallet.key}>
              <Text style={styles.contentTitle}>{wallet.name}</Text>
              <Text style={styles.money}>{wallet.balance}</Text>
            </View>
          ))}
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default Wallet;
