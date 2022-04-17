import { Button } from 'react-native'

export default function LoginButton(props) {
    return (
        <Button
            title = 'NHẬN MẬT KHẨU MỚI'
            onPress={props.onPress}
        />
    )
}