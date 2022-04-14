import { View } from 'react-native'
import WelcomeText from '../components/WelcomeText'
import LoginButton from '../components/LoginButton'
import RegisterButton from '../components/RegisterButton'
import Logo from '../components/Logo'
import style from '../styles/WelcomeStyle.js'

export default function WelcomeScreen() {
    return (
        <View style={style.container}>
            <Logo />
            <WelcomeText style={style.text}/>
            <LoginButton />
            <RegisterButton />
        </View>
    )
}