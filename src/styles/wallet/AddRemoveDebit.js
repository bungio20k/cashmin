import { StyleSheet } from 'react-native';
import Theme from '../../theme/mainTheme';
import Typo from '../../theme/mainTypo';

const style = StyleSheet.create({
    container: {
        marginTop: "20%",
    },
    card: {
        backgroundColor: Theme.lightGreen,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 10,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,

    },
    name: Typo.h4,
    balance: Typo.body,
    category: Typo.body,
    desc: Typo.body,
})

export default style;
