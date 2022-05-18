import { StyleSheet, StatusBar } from "react-native";
import Theme from '../../theme/mainTheme';

const styles = StyleSheet.create({
    top: {
        backgroundColor: "#fff",
        marginTop: 10,
        paddingHorizontal: 12,
        paddingVertical: 12,
    },

    title: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    name: {
        color: Theme.gray,
        fontSize: 18,
        fontWeight: "700",
    },
    iconWrapper: {},

    walletContainer: {
        borderRadius: 10,
        backgroundColor: Theme.mint,
        paddingHorizontal: 24,
        paddingVertical: 14,
        marginBottom: 8,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },

    moneyContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 20,
        borderColor: Theme.lightGreen,
        borderWidth: 1,
        paddingHorizontal: 24,
        paddingVertical: 10,
        marginBottom: 8,
    },

    content: {},
    contentTitle: {
        fontSize: 22,
        fontWeight: "700",
        color: "#fff",
        marginBottom: 2,
    },
    money: {
        fontWeight: "400",
        color: "#fff",
    },
});

export default styles;
