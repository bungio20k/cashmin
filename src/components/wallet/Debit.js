import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/wallet/Debit";

const walletData = [
  {
    key: '1',
    name: 'Nợ 1',
    amount: '100.000đ'
  },
  {
    key: '2',
    name: 'Nợ 2',
    amount: '100.000đ'
  },
  {
    key: '3',
    name: 'Nợ 3',
    amount: '100.000đ',
  }
]

const Debit = () => {
  return (
    <View style={styles.top}>
      <View style={styles.title}>
        <Text style={styles.name}>Sổ ghi nợ</Text>
      </View>

      <TouchableOpacity style={styles.walletContainer}>
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
      </TouchableOpacity>

    </View>
  );
};

export default Debit;
