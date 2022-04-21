import { StyleSheet } from "react-native"
import Theme from '../../theme/mainTheme'

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        color: Theme.gray,
        marginTop: 30,
    },
    body1: {
        width: 320,
        textAlign: 'center',
        color: Theme.gray,
        marginBottom: 100
    },
    body2: {
        width: 320,
        textAlign: 'center',
        color: Theme.gray,
        marginBottom: 30
    }
})

export default style