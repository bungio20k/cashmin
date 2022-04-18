import { StyleSheet } from "react-native"
import Theme from '../../theme/mainTheme'

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        color: Theme.mint,
        marginTop: 30,
    },
    body: {
        width: 320,
        textAlign: 'center',
        color: Theme.mint,
        marginBottom: 100
    }
})

export default style