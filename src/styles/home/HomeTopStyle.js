import { StyleSheet, StatusBar } from "react-native";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const styles = StyleSheet.create({
  top: {
    backgroundColor: "#4fb286",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },

  title: {
    marginTop: STATUSBAR_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  name: {
    color: "#ECFCE5",
    fontSize: 18,
    fontWeight: "700",
  },
  iconWrapper: {},
  moneyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    width: "100%",
    backgroundColor: "#ECFCE5",
    paddingHorizontal: 24,
    paddingVertical: 14,
    marginBottom: 8,
  },
  content: {},
  contentTitle: {
    fontWeight: "400",
    marginBottom: 2,
  },
  money: {
    fontSize: 28,
    fontWeight: "700",
    color: "#3C896D",
  },
});

export default styles;
