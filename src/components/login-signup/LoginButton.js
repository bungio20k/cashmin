import { Button, Alert } from 'react-native'

export default function LoginButton() {
    return (
        <Button
            title = 'ĐĂNG NHẬP'
            onPress = {() => {Alert.alert('Login button pressed!')}}
        />
    )
}