import { StyleSheet, StatusBar } from "react-native";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    marginTop: STATUSBAR_HEIGHT,
    backgroundColor: "#C9DAEA",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#198155",
    marginLeft: 10,
  },
  historyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 12,
  },
  history: {
    fontSize: 22,
    fontWeight: "400",
    color: "#39A0ED",
    marginLeft: 4,
  },
});

export default styles;
