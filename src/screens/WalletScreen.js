import { View, Text } from "native-base";
import TotalBalance from "../components/wallet/TotalBalance";
import AddWallet from "../components/wallet/AddWallet";
import Debit from "../components/wallet/Debit";

export default function WalletScreen() {
    return (
        <View>
            <TotalBalance />
            <AddWallet />         
            <Debit />
        </View>
    )
}