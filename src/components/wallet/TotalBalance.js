import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import styles from "../../styles/wallet/TotalBalane";

const TotalBalance = () => {
    const [hideMoney, setHideMoney] = useState(false);

    return (
        <View style={styles.top}>
            <View style={styles.moneyContainer}>
                <View style={styles.content}>
                    <Text style={styles.contentTitle}>Tổng số dư</Text>
                    <Text style={styles.money}>
                        {hideMoney ? "***.***.*** đ" : "999.999.999đ"}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() =>
                        setHideMoney((prev) => {
                            console.log("hello");
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
