import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, FlatList, Button } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryTheme } from 'victory-native';

import Theme from '../theme/mainTheme';
import Typo from '../theme/mainTypo';
import { HistoryListItem } from '../components/history/HistoryListItem';


// Data (TODO: get from database)

const DATA = [
  {
    id: '1',
    description: "aaaaaaaaa",
    amount: "+100,000 đ"
  },
  {
    id: '2',
    description: "bbbbbbbbb",
    amount: "-150,000 đ"
  },
  {
    id: '3',
    description: "ccccccccc",
    amount: "+500,000 đ"
  },
  {
    id: '4',
    description: "ddddddddd",
    amount: "-1,000,000 đ"
  },
  {
    id: '5',
    description: "eeeeeeeee",
    amount: "+1,000,000 đ"
  },
  {
    id: '6',
    description: "fffffffff",
    amount: "-100,000 đ"
  },
  {
    id: '7',
    description: "ggggggggg",
    amount: "+150,000 đ"
  }
];

const toGraphData = (data) => {
  // TODO:
};

const graphData = {
  in: [
    {
      id: 1,
      amount: 10
    },
    {
      id: 3,
      amount: 50
    },
    {
      id: 5,
      amount: 100
    },
    {
      id: 7,
      amount: 15
    }
  ],
  out: [
    {
      id: 2,
      amount: 15
    },
    {
      id: 4,
      amount: 100
    },
    {
      id: 6,
      amount: 10
    }
  ]
};

var graphViewY; var graphViewHeight;

// Screen
export default function ReportHistoryScreen() {
  const [selectedTime, setSelectedTime] = useState();
  const [selectedWallet, setSelectedWallet] = useState();
  return (
    <View style={st.container}>
      <View style={st.reportContainer}>
        <Text style={[Typo.h4, st.reportHeader]}>Thống kê</Text>

        <View style={st.btnContainer}>
          <Picker selectedValue={selectedTime}
                  onValueChange={(itemValue, itemIndex) => setSelectedTime(itemValue)}
                  style={st.picker}>
            <Picker.Item label="Tuần" value="week" />
            <Picker.Item label="Tháng" value="month" />
            <Picker.Item label="Năm" value="year" />
          </Picker>
          <Picker selectedValue={selectedWallet}
                  onValueChange={(itemValue, itemIndex) => setSelectedWallet(itemValue)}
                  style={st.picker}>
            <Picker.Item label="Ví #1" value="Ví #1" />
            <Picker.Item label="Ví #2" value="Ví #2" />
            <Picker.Item label="Ví #3" value="Ví #3" />
          </Picker>
        </View>

        <View style={st.graph}
          onLayout={(event) => {
            var layout = event.nativeEvent.layout;
            graphViewY = layout.y;
            graphViewHeight = layout.height; 
            console.log("Y = " + graphViewY + " + " + graphViewHeight); 
          }}>
          <VictoryChart
            width={360}
            height={250}
            //height={graphViewY + graphViewHeight}
            
            domain={{ x: [0, graphData.in.length + graphData.out.length], y: [0, 275] }}
            //theme={VictoryTheme.material}
            style={{
              chart: {
                //width: '30%'
                // flex: 0.5,
                // height: '50%'
              }
            }}>
              <VictoryGroup
                offset={15}>
                <VictoryBar data={graphData.in} x="id" y="amount" 
                            style={{ data: { fill: "#009900" }}}/>
                <VictoryBar data={graphData.out} x="id" y="amount" 
                            style={{ data: { fill: "#bf0000" }}}/>
              </VictoryGroup>
            </VictoryChart>
        </View>
        
        <View style={st.summaryContainer}>
          <View style={st.summaryRowContainer}>
            <View style={st.summaryRow}>
              <View>
                <Text style={st.textCenter}>Tổng thu:</Text>
                <Text style={st.textCenter}>100,000 đ</Text>
              </View>
            </View>
            <View style={st.summaryRow}>
              <View>
                <Text style={st.textCenter}>Tổng chi:</Text>
                <Text style={st.textCenter}>-200,000 đ</Text>
              </View>
            </View>
          </View>
          <View style={st.summaryRowContainer}>
            <View style={st.summaryRow}>
              <View>
                <Text style={st.textCenter}>Tổng thu chi:</Text>
                <Text style={st.textCenter}>-100,000 đ</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      
      <View style={st.historyContainer}>
        <Text style={[Typo.h4, st.historyHeader]}>Lịch sử</Text>
        <View style={st.historyListContainer}>
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return <HistoryListItem data={item} />
            }} 
            contentContainerStyle={st.historyList}>

          </FlatList>
        </View>
      </View>

    </View>
  );
}

const st = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
    textAlignVertical: 'center'
  },

  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: Theme.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  reportContainer: {
    flex: 0.53,
    width: '100%'
  },
    reportHeader: {
      flex: 0.7,
      textAlign: 'center',
      textAlignVertical: 'center',
      color: Theme.black,
      backgroundColor: Theme.mint
    },

    btnContainer: {
      flex: 1.1,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center'
    },
      picker: {
        width: '31%',
        marginHorizontal: '2%',
        backgroundColor: '#008000',
        color: '#800000'
      },

    graph: {
      flex: 4.5,
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%'
    },

    summaryContainer: {
      flex: 1.7
    },
      summaryRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      },
        summaryRow: {
          flexDirection: 'column',
          width: '25%'
        },


  historyContainer: {
    flex: 0.47,
    width: '100%',
  },
    historyHeader: {
      flex: 1,
      textAlign: 'center',
      textAlignVertical: 'center',
      color: Theme.black,
      backgroundColor: Theme.mint
    },
    historyListContainer: {
      flex: 8.5
    },
    historyList: {
      justifyContent: 'center',
      alignItems: 'flex-start'
    }
});
