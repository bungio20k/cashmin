import { Text, Alert, View } from 'react-native'
import { useState } from 'react'
import { VStack, HStack, FormControl, Input } from 'native-base';
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import LoginButton from './LoginButton'
import style from '../../styles/login-signup/LoginStyle'

export default function LoginForm() {
    const [formData, setData] = useState({});
    const [errors, setErrors] = useState({});
    const [show, setShow] = useState(false)

    const validate = () => {
        if (formData.name === undefined || formData.name == '') {
            setErrors({
                ...errors,
                name: 'Chưa có tên đăng nhập'
            })
            return false
        }

        if (formData.password === undefined || formData.password == '') {
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
        <VStack marginTop='10'>

            <FormControl isRequired isInvalid={'name' in errors}>
                <Input
                    variant={style.input.variant}
                    borderWidth={style.input.borderWidth}
                    borderColor={style.input.borderColor}
                    fontSize={style.input.fontSize}
                    width={style.input.width}
                    alignSelf={style.input.alignSelf}
                    margin={style.input.margin}

                    InputLeftElement={<FontAwesome name='user' size={style.icon.size} color={style.icon.color} style={style.left_icon} />}
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
                    <FormControl.ErrorMessage marginLeft='10' marginTop='0'>
                        {errors.name}
                    </FormControl.ErrorMessage>
                    :
                    <></>
                }
            </FormControl>

            <FormControl isRequired isInvalid={'password' in errors}>
                <Input
                    variant={style.input.variant}
                    borderWidth={style.input.borderWidth}
                    borderColor={style.input.borderColor}
                    fontSize={style.input.fontSize}
                    width={style.input.width}
                    alignSelf={style.input.alignSelf}
                    margin={style.input.margin}

                    placeholder="Mật khẩu"
                    type={show ? "text" : "password"}

                    InputLeftElement={<FontAwesome name='lock' size={style.icon.size} color={style.icon.color} style={style.left_icon} />}
                    InputRightElement={<Ionicons name={show ? 'eye' : 'eye-off'} size={style.icon.size} color={style.icon.color} style={style.right_icon} onPress={() => setShow(!show)} />}
                    onChangeText={value => {
                        setData({
                            ...formData,
                            password: value
                        })
                        delete errors.password
                    }} />
                {'password' in errors
                    ?
                    <FormControl.ErrorMessage marginLeft='9' marginTop='0'>
                        {errors.password}
                    </FormControl.ErrorMessage>
                    :
                    <></>
                }
            </FormControl>

            <LoginButton onPress={onSubmit}/>
            <Text style={[style.text, { alignSelf: 'center' }]}> Hoặc đăng nhập bằng </Text>
            
            <HStack justifyContent='center'>
                <FontAwesome name="facebook" size={30} color="gray" style={{margin: 10}}/>
                <FontAwesome name="google" size={30} color='gray' style={{margin: 10}}/>
            </HStack>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 50 }}>
                <VStack>
                    <Text style={style.text}> Bạn chưa có tài khoản? </Text>
                    <Text
                        onPress={() => Alert.alert('Dang ky pressed')}
                        style={[style.text, style.link, { alignSelf: 'center' }]}
                    > Đăng ký </Text>
                </VStack>
                <Text
                    onPress={() => Alert.alert('Quen mat khau pressed')}
                    style={[style.text, style.link]}
                > Quên mật khẩu? </Text>
            </View>

        </VStack>
    )
}