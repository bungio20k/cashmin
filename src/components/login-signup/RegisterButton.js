import { Button, Alert } from 'react-native'

export default function RegisterButton() {
    return (
        <Button
            title = 'ĐĂNG KÝ'
            onPress = {() => {Alert.alert('Register button pressed!')}}
        />
    )
}