import { StyleSheet, StatusBar } from "react-native";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    marginTop: STATUSBAR_HEIGHT,
    backgroundColor: "#C9DAEA",
    height: "100%",
    paddingTop: 14,
  },
  header: {
    position: "relative",
    minHeight: 60,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#198155",
    marginLeft: 12,
  },
  addIcon: {
    position: "absolute",
    top: 8,
    right: 20,
  },
});

export default styles;
