import React, { useState, useContext } from "react";
import { View } from "react-native";

import { 
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup
} from "victory-native";

import { print } from "src/utils";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);



export default function ReportGraph(props) {

  const { transactions, currency, timeRange } = props;

  // console.log(transactions);

  const tickValues = getTickValues(timeRange);

  const transactionsInBarGroups = getTransactionsInBarGroups(transactions, tickValues, timeRange);
  
  const graphData = {
    in: toGraphData(transactionsInBarGroups, tickValues, "income", timeRange),
    out: toGraphData(transactionsInBarGroups, tickValues, "expense", timeRange),
  }

  const maxBarHeightDefault = 100;
  const maxBarHeight = getMaxBarHeight(transactionsInBarGroups);
  const barWidth = getBarWidth(timeRange);

  // console.log("===== graphData ===========");
  // print(graphData);
  // console.log("===== tickValues ==========");
  // print(tickValues);


  return (
    <View>
      <VictoryChart
        domain={{
          x: [tickValues[0], tickValues[tickValues.length - 1]],
          y: [0, maxBarHeight? maxBarHeight : maxBarHeightDefault],
        }}
      >
        <VictoryGroup 
          offset={barWidth}
          colorScale={["#009900", "#bf0000"]}
        >
          <VictoryBar
            data={graphData.in}
            x="x"
            y="y"
            barWidth={barWidth}
          />
          <VictoryBar
            data={graphData.out}
            x="x"
            y="y"
            barWidth={barWidth}
          />
        </VictoryGroup>

        <VictoryAxis
          tickValues={tickValues}
          tickFormat={tickValue => formatTickValue(tickValue, timeRange)}
        />

        <VictoryAxis
          dependentAxis
          tickFormat={tickValue => `${tickValue}${currency === "VND"? "k": ""}`}
        />
      </VictoryChart>
    </View>
  )
}


// --- Functions ---------

/*
  "week": 7 pairs, 1 pair = 1 day
  "month": 5 pairs, 1 pair = 6 days
  "year": 12 pairs, 1 pair = 1 month

*/
// Array of arrays ([[transactions], [transactions], ...])
const getTransactionsInBarGroups = (transactions, tickValues, timeRange) => {
  // console.log("===== getTransactionsInBarGroups ===========");

  const result = [];
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
  
  // console.log(result);
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
        tickValues.unshift(tickValue.startOf("day"));
      break;
        
    case "month":
      for (let tickValue = dateNow; tickValue.isAfter(datePast, "day"); tickValue = tickValue.subtract(6, "day"))
        tickValues.unshift(tickValue.startOf("day"));
      break;

    case "year":
      for (let tickValue = dateNow; tickValue.isAfter(datePast, "day"); tickValue = tickValue.subtract(1, "month"))
        tickValues.unshift(tickValue.startOf("day"));
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
// tickValues = array of dates (of the endpoint, subtract from it to get the startpoint)
// typeOfTransaction = String ("income", "expense")
// timeRange = String ("week", "month", "year")
// Output: [[{}], [], [{}, {}], ...]             NO
// Output: [{}, {}, {}, {}, ...]
// where {} = { x: tickValue, y: totalAmountForGroup }
const toGraphData = (transactionsInBarGroups, tickValues, typeOfTransaction, timeRange) => {
  // console.log("======= toGraphData ==========================");
  const result = [];

  // console.log("  tickValues = ");
  // print(tickValues);

  for (let barGroup of transactionsInBarGroups) {
    for (let transaction of barGroup) {
      if ((typeOfTransaction === "income" && transaction.amount < 0) ||
          (typeOfTransaction === "expense" && transaction.amount > 0))
        continue;

      // if data point already exists...
      let graphDataIndexIfExists;
      switch (timeRange) {
        case "week":
          graphDataIndexIfExists = result.findIndex(graphDataEntry => {
            const result = dayjs(graphDataEntry.x).date() === dayjs(transaction.date).date();
            // console.log(`${dayjs(graphDataEntry.x).date()} === ${dayjs(transaction.date).date()}? ${result}`);
            return result;
          });
          break;
          
        case "month":
          graphDataIndexIfExists = result.findIndex(graphDataEntry => {
            const endDate = dayjs(graphDataEntry.x);
            const startDate = endDate.subtract(5, "day");
            
            const actualDate = dayjs(transaction.date);

            const result = actualDate.isBetween(startDate, endDate, "day", "[]");
            // console.log(`    ${actualDate.toISOString()} is between ${startDate.toISOString()} ~ ${endDate.toISOString()}? ${result}`);
            return result;
          });
          break;  
          
        case "year":
          graphDataIndexIfExists = result.findIndex(graphDataEntry => {
            const result = dayjs(graphDataEntry.x).month() === dayjs(transaction.date).month();
            // console.log(`${dayjs(graphDataEntry.x).month()} === ${dayjs(transaction.date).month()}? ${result}`);
            return result;
          });
          break;
      }

      // ... then add to it
      if (graphDataIndexIfExists !== -1) {
        result[graphDataIndexIfExists].y += Math.abs(transaction.amount) / 1000;
        continue;
      }

      // ... else, add a data point
      let graphDataEntry;
      switch (timeRange) {
        case "week":
          graphDataEntry = {
            x: dayjs(transaction.date).startOf("day"),
            y: Math.abs(transaction.amount) / 1000
          };
          break;

        case "month":
          const actualDataEntryX = dayjs(transaction.date).startOf("day");

          // find index of tickValue that this entry belongs to (endpoint) -> this entry X is BEFORE that endpoint
          // then index-1 is the startpoint, EXCLUSIVE
          // reminder that the range is 6 days (e.g: 23-28/5), but only subtract 5 (28 - 5 = 23)
          const endDate = tickValues.find(tickValue => !actualDataEntryX.isAfter(tickValue));
          const startDate = endDate.subtract(5, "day");

          // console.log(`  graphX = ${actualDataEntryX.toISOString()} |  startDate = ${startDate.toISOString()} |  endDate = ${endDate?.toISOString()}`);

          graphDataEntry = {
            x: endDate,
            y: Math.abs(transaction.amount) / 1000
          };
          break;

        case "year":
          graphDataEntry = {
            // x: dayjs(transaction.date).startOf("month"),
            x: dayjs(transaction.date).endOf("month"),
            y: Math.abs(transaction.amount) / 1000
          };
          break;
      }

      result.push(graphDataEntry);
    }
  }

  return result;
}

const getMaxBarHeight = (transactionsInBarGroups) => {
  const maxBarHeights = [];

  for (let barGroup of transactionsInBarGroups) {
    let incomeSumOfBarGroup = 0;
    let expenseSumOfBarGroup = 0;

    for (let transaction of barGroup) {
      if (transaction.amount > 0)
        incomeSumOfBarGroup += transaction.amount;
      else
        expenseSumOfBarGroup += -transaction.amount;
    }

    maxBarHeights.push(Math.max(incomeSumOfBarGroup, expenseSumOfBarGroup));
  }


  return Math.max(...maxBarHeights) / 1000;
}

const getBarWidth = (timeRange) => {
  switch (timeRange) {
    case "week":
      return 12;
    
    case "month":
      return 10;

    case "year":
      return 8;
  }
}