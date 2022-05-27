import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

import { 
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLabel
} from "victory-native";

import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);




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





export default function ReportGraph(props) {

  const transactions = props.transactions;
  const timeRange = props.timeRange;

  const totalBarsForRange = getTotalBarsForRange(timeRange);
  const tickValues = getTickValues(timeRange);

  const transactionsInEachBar = getTransactionsInEachBar(transactions, tickValues, timeRange);
  
  const graphData = {
    // in: toGraphData(transactionsInEachBar, "income"),
    out: toGraphData(transactionsInEachBar, "expense"),
  }


  return (
    <View>
      <VictoryChart
        domain={{
          x: [tickValues[0] - (tickValues[1] - tickValues[0])/5, tickValues[tickValues.length - 1]],
          y: [0, getMaxTransactionAmount(transactions)],
        }}
      >
        <VictoryGroup offset={5}>
          {/* <VictoryBar
            data={graphData.in}
            x="x"
            y="y"
            style={{ data: { fill: "#009900" } }}
          /> */}
          <VictoryBar
            data={graphData.out}
            x="x"
            y="y"
            barWidth={8}
            style={{ data: { fill: "#bf0000" } }}
          />
        </VictoryGroup>

        <VictoryAxis
          tickValues={tickValues}
          tickFormat={tickValue => formatTickValue(tickValue, timeRange)}
          offsetX={0}
          axisLabelComponent={<VictoryLabel dy={0} />}
        />

        <VictoryAxis
          dependentAxis
        />
      </VictoryChart>
    </View>
  )
}


// --- Functions ---------

const getMaxTransactionAmount = (transactions) => {
  const maxTransaction = transactions.reduce((prevT, currT) => Math.abs(prevT.amount) > Math.abs(currT.amount)? prevT : currT);
  return Math.abs(maxTransaction.amount) / 1000;
}

const getTotalBarsForRange = (timeRange) => {
  switch (timeRange) {
    case "week":
      return 7; // 7 pairs, 1 pair = 1 day
    case "month":
      return 5; // 5 pairs, 1 pair = 6 days
    case "year":
      return 12; // 12 pairs, 1 pair = 1 month
  }
};

// Array of arrays ([[transactions], [transactions], ...])
const getTransactionsInEachBar = (transactions, tickValues, timeRange) => {
  const dateNow = tickValues[tickValues.length - 1];

  const result = [];

  console.log("getTransactionsInEachBar");
  for (let tickValue of tickValues.slice().reverse()) {
    // console.log(tickValue);

    switch (timeRange) {
      case "week":
        result.unshift(transactions.filter((transaction) => {
          const transactionDate = dayjs(transaction.date);
          return transactionDate.isSame(tickValue, "day");
        }));
        break;
        
      case "month":
        result.unshift(transactions.filter((transaction) => {
          const tRight = tickValue;
          const tLeft = tickValue.subtract(6, "day");
          
          const transactionDate = dayjs(transaction.date);
          return transactionDate.isBetween(tLeft, tRight, "day", "(]");
        }));
        break;
        
      case "year":
        result.unshift(transactions.filter((transaction) => {
          const transactionDate = dayjs(transaction.date);
          return transactionDate.isSame(tickValue, "month");
        }));
        break;
    }
  }
  
  console.log(result);
  return result;
}

const getTickValues = (timeRange) => {
  const dateNow = dayjs();
  let datePast;
  switch (timeRange) {
    case "week":
      datePast = dateNow.subtract(7, "day");
      break;
    case "month":
      datePast = dateNow.subtract(1, "month");
      break;
    case "year":
      datePast = dateNow.subtract(1, "year");
      break;
  }

  const tickValues = [];

  switch (timeRange) {
    case "week":
      for (let tickValue = dateNow; tickValue.isAfter(datePast, "day"); tickValue = tickValue.subtract(1, "day"))
        tickValues.unshift(tickValue);
        break;
        
    case "month":
      for (let tickValue = dateNow; tickValue.isAfter(datePast, "day"); tickValue = tickValue.subtract(6, "day"))
      tickValues.unshift(tickValue);
      break;

    case "year":
      for (let tickValue = dateNow; tickValue.isAfter(datePast, "day"); tickValue = tickValue.subtract(1, "month"))
        tickValues.unshift(tickValue);
      break;
  }

  return tickValues;
}


const formatTickValue = (tickValue, timeRange) => {
  let tickLabel;

  switch (timeRange) {
    case "week":
      tickLabel = `${tickValue.date()}/${tickValue.month() + 1}`;
      break;

    case "month":
      const tickEnd = dayjs(tickValue);
      const tickStart = tickEnd.subtract(5, "day");

      tickLabel = `${tickStart.date()}-${tickEnd.date()}/${tickValue.month()+1}`;
      break;

    case "year":
      tickLabel = `${tickValue.month()+1}`;
      break;
  }

  return tickLabel;
}


// Array of array ([[transactions], [], [transactions], ...])
// typeOfTransaction = String ("income", "expense")
// Output: [[{}], [], [{}, {}], ...]             NO
// Output: [{}, {}, {}, {}, ...]
// where {} = { x: tickValue, y: amount }
const toGraphData = (transactionsInEachBar, typeOfTransaction) => {
  console.log("=================================");
  const result = [];

  for (let barGroup of transactionsInEachBar) {
    console.log("barGroup ="); 
    console.log(barGroup);

    for (let transaction of barGroup) {
      if ((typeOfTransaction === "income" && transaction.amount < 0) ||
          (typeOfTransaction === "expense" && transaction.amount > 0))
        continue;

      const graphDataEntry = {
        x: dayjs(transaction.date),
        y: Math.abs(transaction.amount) / 1000,
      }

      result.push(graphDataEntry)
    }
  }

  console.log(result);

  return result;
}