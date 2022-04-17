import { Button, Alert } from 'react-native'

export default function LoginButton(props) {
    return (
        <Button
            title = 'ĐĂNG NHẬP'
            onPress={props.onPress}
        />
    )
}