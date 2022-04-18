import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginHorizontal: 12,
    backgroundColor: "rgba(236, 252, 229, 1)",
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginBottom: 16,
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontSize: 16,
    marginLeft: 16,
  },

  actions: {
    flexDirection: "row",
  },
});

export default styles;
