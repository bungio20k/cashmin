import { View } from 'react-native'
import Logo from '../components/login-signup/Logo'
import LoginForm from '../components/login-signup/LoginForm'

export default function LoginScreen() {
    return (
        <View>
            <Logo />
            <LoginForm />            
        </View>
    )
}