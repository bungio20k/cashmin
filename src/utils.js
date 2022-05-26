import { formatCurrency } from "react-native-format-currency";

// HOW TO USE:
// param or output: type (example of param or output)

// --- Money utils ---------

// amount: Number
// currency: String ("VND", "USD")
// output: String ("100000 ₫")
export const formatMoney = (amount, currency) => {
  const formattedAmount = formatCurrency({
    "amount": amount, 
    "code": currency
  })[1];

  const formattedCurrency = currency === "VND"? "₫" : "$";

  return formattedAmount + " " + formattedCurrency;
}


// amount: Number
// currency: String ("VND", "USD")
// output: Number (100000)
export const formatAmount = (amount, currency) => {
  const formattedAmount = formatCurrency({
    "amount": amount, 
    "code": currency
  })[1];

  return formattedAmount;
}

// currency: String ("VND", "USD")
// output: String ("₫")
export const formatCurrencyDisplay = (currency) => {
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
// period: String ("week", "month", "year")
// output: Boolean (true if in range, else false)
export const checkDateInRange = (dateStr, period) => {
  const date = (new Date(dateStr)).valueOf();
  const dateNow = (new Date()).valueOf();

  /*  1 week  =   604800000 milliseconds (7 days)
      1 month =  2592000000 milliseconds (30 days)
      1 year  = 31536000000 milliseconds (365 days) */
  let range;
  switch (period.toLowerCase()) {
    case "week":
      range = 604800000;
      break;
    case "month":
      range = 2592000000;
      break;
    case "year":
      range = 31536000000;
      break;
  }

  const earliestDateInRange = dateNow - range;

  return date >= earliestDateInRange;
}