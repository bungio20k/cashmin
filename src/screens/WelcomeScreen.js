import { View, Text } from 'react-native'
import LoginButton from '../components/login-signup/LoginButton'
import RegisterButton from '../components/login-signup/RegisterButton'
import Logo from '../components/login-signup/Logo'
import style from '../styles/login-signup/WelcomeStyle'

export default function WelcomeScreen() {
    const titleText = 'Chào mừng đến với Cashmin! \n'
    const bodyText = 'Cashmin sẽ là trợ thủ đắc lực của bạn trong việc ghi chú và quản lý chi tiêu hằng ngày\nĐăng ký hoặc đăng nhập để bắt đầu ngay'
    return (
        <View>
            <Logo />
            <Text>{titleText}</Text>
            <Text>{bodyText}</Text>
            <LoginButton />
            <RegisterButton />
        </View>
    )
}