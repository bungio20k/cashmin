import { Text } from 'react-native'

export default function WelcomeText() {
    const titleText = 'Chào mừng đến với Cashmin! \n'
    const bodyText = 'Cashmin sẽ là trợ thủ đắc lực của bạn trong việc ghi chú và quản lý chi tiêu hằng ngày\nĐăng ký hoặc đăng nhập để bắt đầu ngay'
    return (
        <Text>
            <Text>{titleText}</Text>
            <Text>{bodyText}</Text>
        </Text>
    )
}