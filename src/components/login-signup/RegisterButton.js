import { Button, Alert } from 'react-native'

export default function RegisterButton(props) {
    return (
        <Button
            title = 'ĐĂNG KÝ'
            onPress = {props.onPress}
        />
    )
}