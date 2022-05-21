import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  hanmucContainer: {
    // backgroundColor: "#C9DAEA",
    backgroundColor: "#fbfbff",
    padding: 12,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  hanmucTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  hanmucTitle: {
    color: "#445",
    fontSize: 20,
    fontWeight: "700",
    marginRight: 10,
  },

  hanmucInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 4,
  },
  hanmucChart: {
    width: "100%",
    height: 24,
    borderRadius: 24,
    marginVertical: 8,
    backgroundColor: "#c4c4c4",
  },
  hanmucInfoBottom: {
    marginLeft: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  hanmucDate: {
    fontSize: 16,
    fontWeight: "400",
  },
  hanmucMoney: {
    fontSize: 16,
    fontWeight: "400",
  },
  hanmucDateLeft: {
    fontSize: 16,
    fontWeight: "400",
  },
  hanmucMoneyLeft: {
    fontSize: 16,
    fontWeight: "400",
    color: "#198155",
  },
});

export default styles;
