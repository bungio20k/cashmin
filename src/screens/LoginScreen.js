import { View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import Logo from '../components/login-signup/Logo'
import LoginForm from '../components/login-signup/LoginForm'

export default function LoginScreen() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{ flex: 1 }}>
                <Logo />
                <LoginForm />
            </View>
        </TouchableWithoutFeedback>
    )
}