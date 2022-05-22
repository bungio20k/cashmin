import { View, Text } from "native-base";
import TotalBalance from "src/components/wallet/TotalBalance";
import Wallet from "src/components/wallet/Wallet";
import Debit from "src/components/wallet/Debit";
import { ScrollView, StatusBar } from "react-native";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
export default function WalletScreen() {
  return (
    <View
      style={{
        backgroundColor: "#fbfbff",
      }}
    >
      <Text
        style={{
          fontSize: 28,
          marginTop: STATUSBAR_HEIGHT,
          fontWeight: "700",
          color: "#198155",
          lineHeight: 36,
          marginLeft: 12,
        }}
      >
        Quản lý
      </Text>
      <ScrollView nestedScrollEnabled>
        <TotalBalance />
        <Wallet />
        <Debit />
      </ScrollView>
    </View>
  );
}
