import { View } from 'react-native'
import RegisterForm from '../components/login-signup/RegisterForm'
import Logo from '../components/login-signup/Logo'

export default function LoginScreen() {
    return (
        <View>
            <Logo />
            <RegisterForm />
        </View>
    )
}