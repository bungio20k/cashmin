import { Text, Alert } from 'react-native'
import { useState } from 'react'
import { VStack, FormControl, Input } from 'native-base';
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import LoginButton from './LoginButton'

export default function RegisterForm() {
    const [formData, setData] = useState({});
    const [errors, setErrors] = useState({});
    const [show, setShow] = useState(false)

    const validate = () => {
        if (formData.name === undefined) {
            setErrors({
                ...errors,
                name: 'Chưa có tên đăng nhập'
            })
            return false
        }

        if (formData.password === undefined) {
            setErrors({
                ...errors,
                password: 'Chưa có mật khẩu'
            })
            return false
        }

        // server authentication
        // ...
        const authen = {
            user: 'bungio20k',
            token: 'lwqj292kjld12nd1293dasndlcpi2'
        }

        if (authen.user === undefined) {
            setErrors({
                ...errors,
                name: 'Tên đăng nhập không tồn tại'
            })
            return false
        }
        else if (authen.token === undefined) {
            setErrors({
                ...errors,
                password: 'Mật khẩu không đúng'
            })
            return false
        }

        return true;
    };

    const onSubmit = () => {
        validate() ? console.log(formData) : console.log('Validation Failed');
    };

    return (
        <VStack width="90%" mx="3" maxW="300px">

            <FormControl isRequired isInvalid={'name' in errors}>
                <Input
                    InputLeftElement={<FontAwesome name='user' size={25} color="black" />}
                    placeholder="Tên đăng nhập"
                    onChangeText={value => {
                        setData({
                            ...formData,
                            name: value
                        })
                        delete errors.name
                    }} />
                {'name' in errors
                    ?
                    <FormControl.ErrorMessage>
                        {errors.name}
                    </FormControl.ErrorMessage>
                    :
                    <></>
                }
            </FormControl>

            <FormControl isRequired isInvalid={'password' in errors}>
                <Input
                    placeholder="Mật khẩu"
                    type={show ? "text" : "password"}
                    InputLeftElement={<FontAwesome name='lock' size={25} color="black"/>}
                    InputRightElement={<Ionicons name={show ? 'eye' : 'eye-off'} size={25} color="black" onPress={() => setShow(!show)} />}
                    onChangeText={value => {
                        setData({
                            ...formData,
                            password: value
                        })
                        delete errors.password
                    }} />
                {'password' in errors
                    ?
                    <FormControl.ErrorMessage>
                        {errors.password}
                    </FormControl.ErrorMessage>
                    :
                    <></>
                }
            </FormControl>
            
            <LoginButton onPress={onSubmit}/>
            <Text> Hoặc đăng nhập bằng </Text>
            
            <Text onPress={() => Alert.alert('Quen mat khau pressed')}> Quên mật khẩu </Text>
            <Text onPress={() => Alert.alert('Dang ky pressed')}> Đăng ký </Text>
        </VStack>
    )
}