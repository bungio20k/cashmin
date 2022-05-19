import { StyleSheet, StatusBar } from "react-native";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C9DAEA",
    flex: 1,
    marginTop: STATUSBAR_HEIGHT,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    lineHeight: 40,
    fontWeight: "400",
    marginBottom: 16,
    marginTop: 60,
  },
  featureContainer: {
    backgroundColor: "#ECFCE5",
    width: "85%",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginBottom: 16,
  },
  containerTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 8,
  },
  featureItem: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  featureTitle: {
    fontSize: 16,
  },
  moreContainer: {
    backgroundColor: "#ECFCE5",
    width: "85%",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginBottom: 16,
  },
  moreItemContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
  },
  moreItem: {
    fontSize: 18,
  },
});

export default styles;
