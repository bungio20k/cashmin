import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/wallet/AddWallet";

const walletData = [
  {
    key: '1',
    name: 'Ví chính',
    balance: '999.999.999đ'
  },
  {
    key: '2',
    name: 'Ví phụ',
    balance: '999.999.999đ'
  },
  {
    key: '3',
    name: 'Ví phụ 2',
    balance: '999.999.999đ'
  }
]

const AddWallet = () => {
  return (
    <View style={styles.top}>
      <View style={styles.title}>
        <Text style={styles.name}>Thêm - xóa ví</Text>
      </View>

      <TouchableOpacity style={styles.walletContainer}>
        <View style={styles.content}>
          {walletData.map(wallet => (
            <View style={styles.moneyContainer} key={wallet.key}>
              <Text style={styles.contentTitle}>{wallet.name}</Text>
              <Text style={styles.money}>
                {wallet.balance}
              </Text>
            </View>
          ))}
        </View>
      </TouchableOpacity>

    </View>
  );
};

export default AddWallet;
