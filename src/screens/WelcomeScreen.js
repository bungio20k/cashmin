import { View, Text } from 'react-native'
import LoginButton from '../components/login-signup/LoginButton'
import RegisterButton from '../components/login-signup/RegisterButton'
import Logo from '../components/login-signup/Logo'
import style from '../styles/login-signup/WelcomeStyle'
import Typo from '../theme/mainTypo'

export default function WelcomeScreen() {
    const titleText = 'Chào mừng đến với Cashmin! \n'
    const bodyText = 'Cashmin sẽ là trợ thủ đắc lực của bạn trong việc ghi chú và quản lý chi tiêu hằng ngày\n\nĐăng ký hoặc đăng nhập để bắt đầu ngay'
    return (
        <View style={style.container}>
            <Logo />
            <Text style={[Typo.h4, style.title]}>{titleText}</Text>
            <Text style={[Typo.body, style.body]}>{bodyText}</Text>
            <RegisterButton />
            <LoginButton />
        </View>
    )
}