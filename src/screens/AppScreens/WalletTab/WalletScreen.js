import { View, Text } from "native-base";
import TotalBalance from "src/components/wallet/TotalBalance";
import Wallet from "src/components/wallet/Wallet";
import Debit from "src/components/wallet/Debit";

export default function WalletScreen() {
    return (
        <View>
            <TotalBalance />
            <Wallet />    
            <Debit />
        </View>
    )
}