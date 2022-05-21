import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  FlatList,
  Button,
  SafeAreaView,
} from "react-native";

import { HStack, Select, VStack } from "native-base";
import { Picker } from "@react-native-picker/picker";
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryTheme,
} from "victory-native";

import Theme from "src/theme/mainTheme";
import Typo from "src/theme/mainTypo";
import { HistoryListItem } from "src/components/history/HistoryListItem";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
// Data (TODO: get from database)

const DATA = [
  { icon: "fast-food", name: "Ăn sáng", amount: "-10.000 VNĐ" },
  { icon: "fast-food", name: "Ăn trưa", amount: "-25.000 VNĐ" },
  { icon: "fast-food", name: "Ăn tối", amount: "-15.000 VNĐ" },
  { icon: "cafe", name: "Cà phê", amount: "-25.000 VNĐ" },
  { icon: "car", name: "Chạy xe ôm", amount: "+90.000 VNĐ" },
  { icon: "basket", name: "Bán hàng", amount: "+125.000 VNĐ" },
  { icon: "shirt", name: "Bán áo, quần", amount: "+225.000 VNĐ" },
  { icon: "cafe", name: "Cà phê", amount: "-25.000 VNĐ" },
  { icon: "car", name: "Xăng", amount: "-80.000 VNĐ" },
  { icon: "car", name: "Sửa xe", amount: "-60.000 VNĐ" },
  { icon: "car", name: "Rửa xe", amount: "-40.000 VNĐ" },
  { icon: "home", name: "Tiền thuê trọ", amount: "-30.000 VNĐ" },
  { icon: "home", name: "Đồ dùng sinh hoạt", amount: "-110.000 VNĐ" },
  { icon: "home", name: "Bảo trì phòng", amount: "-50.000 VNĐ" },
  { icon: "basket", name: "Đi chợ", amount: "-200.000 VNĐ" },
  { icon: "shirt", name: "Shopping", amount: "-100.000 VNĐ" },
];

const toGraphData = (data) => {
  // TODO:
};

const graphData = {
  in: [
    {
      id: 1,
      amount: 10,
    },
    {
      id: 3,
      amount: 50,
    },
    {
      id: 5,
      amount: 100,
    },
    {
      id: 7,
      amount: 15,
    },
  ],
  out: [
    {
      id: 2,
      amount: 15,
    },
    {
      id: 4,
      amount: 100,
    },
    {
      id: 6,
      amount: 10,
    },
  ],
};

var graphViewY;
var graphViewHeight;

// Screen
export default function ReportHistoryScreen() {
  const tabBarHeight = useBottomTabBarHeight();
  const [selectedTime, setSelectedTime] = useState("week");
  const [selectedWallet, setSelectedWallet] = useState("Ví #1");
  return (
    <View style={[st.container, { marginBottom: tabBarHeight }]}>
      <ScrollView nestedScrollEnabled>
        <View style={st.reportContainer}>
          <Text style={[Typo.h4, st.reportHeader]}>Thống kê</Text>
          <View style={st.btnContainer}>
            <Select
              w="90"
              py="0"
              px="2"
              marginX="1"
              zIndex={3}
              borderColor="transparent"
              backgroundColor="#4FB286"
              color="white"
              fontSize="16"
              borderRadius="full"
              selectedValue={selectedTime}
              onValueChange={(itemValue) => {
                setSelectedTime(itemValue);
              }}
              _selectedItem={{
                bg: "teal.600",
              }}
            >
              <Select.Item label="Tuần" value="week" />
              <Select.Item label="Tháng" value="month" />
              <Select.Item label="Năm" value="year" />
            </Select>
            <Select
              w="90"
              py="0"
              px="2"
              marginX="1"
              zIndex={3}
              borderColor="transparent"
              backgroundColor="#4FB286"
              color="white"
              fontSize="16"
              borderRadius="full"
              selectedValue={selectedWallet}
              onValueChange={(itemValue) => {
                setSelectedWallet(itemValue);
              }}
              _selectedItem={{
                bg: "teal.600",
              }}
            >
              <Select.Item label="Ví #1" value="Ví #1" />
              <Select.Item label="Ví #2" value="Ví #2" />
              <Select.Item label="Ví #3" value="Ví #3" />
            </Select>
          </View>

          <View
            style={st.graph}
            onLayout={(event) => {
              // var layout = event.nativeEvent.layout;
              // graphViewY = layout.y;
              // graphViewHeight = layout.height;
              // console.log("Y = " + graphViewY + " + " + graphViewHeight);
            }}
          >
            <VictoryChart
              width={360}
              // height={220}
              //height={graphViewY + graphViewHeight}

              domain={{
                x: [0, graphData.in.length + graphData.out.length],
                y: [0, 275],
              }}
              //theme={VictoryTheme.material}
              style={{
                chart: {
                  //width: '30%'
                  // flex: 0.5,
                  // height: '50%'
                },
              }}
            >
              <VictoryGroup offset={15}>
                <VictoryBar
                  data={graphData.in}
                  x="id"
                  y="amount"
                  style={{ data: { fill: "#009900" } }}
                />
                <VictoryBar
                  data={graphData.out}
                  x="id"
                  y="amount"
                  style={{ data: { fill: "#bf0000" } }}
                />
              </VictoryGroup>
            </VictoryChart>
          </View>

          <VStack space={1} alignItems="center">
            <HStack space={6} justifyContent="center">
              <View style={st.incomeMoneyContainer}>
                <Text style={st.moneyTitle}>Tổng thu</Text>
                <Text style={st.incomeMoney}>1.600.000 VNĐ</Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontWeight: "700" }}>---</Text>
              </View>
              <View style={st.expenseMoneyContainer}>
                <Text style={st.moneyTitle}>Tổng chi</Text>
                <Text style={st.expenseMoney}>800.000 VNĐ</Text>
              </View>
            </HStack>
            <View style={st.totalContainer}>
              <Text style={st.moneyTitle}> Tổng thu - chi</Text>
              <Text style={st.incomeMoney}>800.000 VNĐ</Text>
            </View>
          </VStack>
        </View>
        <View
          style={{
            height: 8,
            backgroundColor: "white",
            width: "100%",
            borderRadius: 8,
            marginTop: 8,
          }}
        ></View>
        <View style={[st.historyContainer, { marginBottom: tabBarHeight }]}>
          <Text style={[Typo.h4, st.historyHeader]}>Lịch sử</Text>
          <View style={st.historyListContainer}>
            <SafeAreaView>
              <ScrollView nestedScrollEnabled>
                {DATA.map((item, index) => (
                  <HistoryListItem data={item} key={index} />
                ))}
              </ScrollView>
            </SafeAreaView>

            {/* <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <HistoryListItem data={item} />;
            }}
            contentContainerStyle={st.historyList}
          ></FlatList> */}
          </View>
          <View style={st.historyEmpty}></View>
        </View>
      </ScrollView>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: Theme.background,
    alignItems: "center",
    justifyContent: "space-between",
  },

  reportContainer: {
    // flex: 0.55,
    // height: "50%",
    width: "100%",
  },
  reportHeader: {
    // flex: 0.7,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#198155",
    marginVertical: 4,
    // backgroundColor: Theme.mint,
  },

  btnContainer: {
    // flex: 0.7,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },

  graph: {
    // flex: 4.5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: -40,
    marginBottom: -20,
  },

  historyContainer: {
    // flex: 0.45,
    height: 580,
    width: "100%",
  },
  historyHeader: {
    // flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    color: Theme.black,
    fontSize: 24,
    fontWeight: "700",
    color: "#198155",
    marginBottom: 8,
    marginTop: 12,
    // backgroundColor: Theme.mint
  },
  historyListContainer: {
    // flex: 8.5,
    // paddingHorizontal: 12,
  },

  historyEmpty: {
    // flex: 1.5,
  },

  moneyTitle: {
    fontSize: 16,
  },
  incomeMoney: {
    fontSize: 16,
    color: "green",
    fontWeight: "700",
  },

  expenseMoney: {
    fontSize: 16,
    color: "red",
    fontWeight: "700",
  },
  moneyTitle: {
    color: "#222",
  },
});
