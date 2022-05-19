import { StyleSheet, StatusBar } from "react-native";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C9DAEA",
    flex: 1,
    marginTop: STATUSBAR_HEIGHT,
    alignItems: "center",
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#198155",
    alignSelf: "flex-start",
    marginBottom: 12,
    marginTop: 16,
  },
  itemContainer: {
    backgroundColor: "#ECFCE5",
    width: "100%",
    marginBottom: 8,
    borderRadius: 20,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "700",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    lineHeight: 28,
  },
  subItemTitle: {
    fontSize: 16,
  },
});
export default styles;
