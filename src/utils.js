import { formatCurrency } from "react-native-format-currency";

import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);


// HOW TO USE:
// param or output: type (example of param or output)


// --- Debug util ----------
// Faster than typing console.log.....
export const print = (obj, label) => {
  if (typeof label !== "undefined")
    console.log(label);

  console.log(JSON.stringify(obj, null, 2));
}


// --- Money utils ---------

// amount: Number
// currency: String ("VND", "USD")
// output: String ("100000 ₫")
export const formatMoney = (amount, currency) => {
  const formattedAmount = formatCurrency({
    "amount": amount? amount : 0, 
    "code": currency
  })[1];

  const formattedCurrency = currency === "VND"? "₫" : "$";

  return formattedAmount + " " + formattedCurrency;
}


// amount: Number
// currency: String ("VND", "USD")
// output: Number (100000)
export const formatAmountOnly = (amount, currency) => {
  const formattedAmount = formatCurrency({
    "amount": amount, 
    "code": currency
  })[1];

  return formattedAmount;
}

// currency: String ("VND", "USD")
// output: String ("₫", "$")
export const formatCurrencyOnly = (currency) => {
  return currency === "VND"? "₫" : "$";
}



// --- Date utils ----------

// dateStr: String ("2022-05-22T06:31:09.969Z")
// format: String ("dd/mm/yyyy", "mm/dd/yyyy"...)
// output: String ("22/5/2022")
export const formatDate = (dateStr, format) => {
  const date = new Date(dateStr);

  const format1 = format.split("/")[0].toLowerCase();
  const format2 = format.split("/")[1].toLowerCase();

  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();

  let result = "";

  if (format1 === "dd" && format2 === "mm")
    result = `${dd}/${mm}/${yyyy}`;
  else if (format1 === "mm" && format2 === "dd")
    result = `${mm}/${dd}/${yyyy}`;

  return result;
}


// dateStr: String ("2022-05-22T06:31:09.969Z")
// timeRange: String ("week", "month", "year")
// output: Boolean (true if date is in range counting from NOW, else false)
export const checkDateInRange = (dateStr, timeRange) => {
  const dateToCheck = dayjs(dateStr);

  const dateNow = dayjs();
  const datePast = ((timeRange) => {
    switch (timeRange) {
      case "week":
        return dateNow.subtract(7, "day");
      case "month":
        return dateNow.subtract(1, "month");
      case "year":
        return dateNow.subtract(1, "year");
    }
  })(timeRange);

  return dateToCheck.isBetween(datePast, dateNow, "day", "(]");
}