import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  thuchiContainer: {
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
  thuchiTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  thuchiTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  thuchiTitle: {
    color: "#445",
    fontSize: 18,
    fontWeight: "700",
    marginRight: 10,
  },
  thuchiContent: {
    flexDirection: "row",
  },
  thuchiChart: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginRight: 16,
  },
  thuchiDesc: { flex: 1 },
  nameItemWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  thuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
    marginTop: 42,
  },
  chiItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#999",
    borderBottomWidth: 1,
    marginBottom: 4,
  },
  nameItem: {
    color: "#888",
    fontSize: 14,
    fontWeight: "400",
  },
  thuMoney: {
    color: "#198155",
    fontSize: 16,
    fontWeight: "400",
  },
  chiMoney: {
    color: "#d3180c",
    fontSize: 16,
    fontWeight: "400",
  },
  result: {
    color: "#444",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "right",
  },
});

export default styles;
