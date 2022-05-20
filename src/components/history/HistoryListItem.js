import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Theme from 'src/theme/mainTheme';
import Typo from 'src/theme/mainTypo';

export function HistoryListItem({ data }) {
  return (
    <View style={st.container}>
      <Image
        style={st.icon}
        source={require("../../../assets/favicon.png")} />
      <View style={st.textContainer}>
        <Text style={[Typo.body, st.textDescription]}>{data.description}</Text>
        <Text style={st.textTime}>1/1/2022</Text>
      </View>
      <View style={st.amountContainer}>
        <Text>{data.amount}</Text>
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: '4%',
    marginBottom: 7,
    backgroundColor: Theme.lightGreen,
    width: '92%'
  },
  icon: {
    flex: 1,
    margin: 10
  },
  textContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
    textDescription: {
    },
    textTime: {

    },
  amountContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});