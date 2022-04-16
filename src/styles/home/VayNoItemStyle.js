import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  vaynoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: "#4fb286b3",
    borderRadius: 6,
    marginBottom: 6,
  },
  vaynoItemTime: {
    color: "#fbfbff",
    fontStyle: "italic",
  },
  vaynoItemMoney: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default styles;
