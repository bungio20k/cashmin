import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import styles from "../../styles/wallet/Debit";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import DataContext from '../../hooks/data/DataContext';

const debits = [
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
  const { debits } = useContext(DataContext);

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
        {debits.map((debit) => (
          <View style={styles.moneyContainer} key={debit._id}>
            <Text style={styles.contentTitle}>{debit.name}</Text>
            <Text
              style={[
                styles.money,
                { color: (debit.isDebt && "red") || "green" },
              ]}
            >
              {debit.amount}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Debit;
