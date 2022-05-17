import { View, Text } from "native-base";
import TotalBalance from "src/components/wallet/TotalBalance";
import AddWallet from "src/components/wallet/AddWallet";
import Debit from "src/components/wallet/Debit";

export default function WalletScreen() {
    return (
        <View>
            <TotalBalance />
            <AddWallet />         
            <Debit />
        </View>
    )
}