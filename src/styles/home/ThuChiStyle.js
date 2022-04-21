import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  thuchiContainer: {
    backgroundColor: "#C9DAEA",
    padding: 12,
    marginBottom: 8,
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
    color: "black",
    fontSize: 24,
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
    fontSize: 18,
    fontWeight: "400",
  },
  thuMoney: {
    color: "#198155",
    fontSize: 18,
    fontWeight: "400",
  },
  chiMoney: {
    color: "#d3180c",
    fontSize: 18,
    fontWeight: "400",
  },
  result: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
  },
});

export default styles;
