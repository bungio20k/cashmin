import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import styles from "../../styles/wallet/Debit";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import DataContext from "../../hooks/data/DataContext";
import { formatAmountOnly, formatCurrencyOnly } from "src/utils";

const Debit = () => {
  const navigation = useNavigation();
  const { debits, settings } = useContext(DataContext);

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
          <View style={styles.moneyContainer} key={debit.id}>
            <Text style={styles.contentTitle}>{debit.name}</Text>
            <Text
              style={[
                styles.money,
                { color: (debit.isDebt && "red") || "green" },
              ]}
            >
              {formatAmountOnly(debit.amount || 0, settings.currency)}
              {formatCurrencyOnly(settings.currency)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Debit;
