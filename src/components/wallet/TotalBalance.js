import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useContext } from "react";
import styles from "../../styles/wallet/TotalBalane";
import DataContext from '../../hooks/data/DataContext';

const TotalBalance = () => {
    const [hideMoney, setHideMoney] = useState(false);
    const { wallets, settings } = useContext(DataContext);
    const mainWalletBalance = wallets.find((w) => w.isMain)?.balance;

    return (
        <View style={styles.top}>
            <View style={styles.moneyContainer}>
                <View style={styles.content}>
                    <Text style={styles.contentTitle}>Tổng số dư</Text>
                    <Text style={styles.money}>
                        {hideMoney ? "***.***.***" : mainWalletBalance} {settings.currency}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() =>
                        setHideMoney((prev) => {
                            return !prev;
                        })
                    }
                >
                    {hideMoney ? (
                        <Ionicons name="eye-off" size={24} color="#fff" />
                    ) : (
                        <Ionicons name="eye" size={24} color="#fff" />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TotalBalance;
