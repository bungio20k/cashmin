import { useState } from 'react'
import { VStack, FormControl, Input, Button, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

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
        } else if (formData.name.length < 3) {
            setErrors({
                ...errors,
                name: 'Tên đăng nhập quá ngắn'
            })
            return false
        }

        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        if (formData.email === undefined) {
            setErrors({
                ...errors,
                email: 'Chưa có email'
            })
            return false
        }
        else if (!expression.test(String(formData.email).toLowerCase())) {
            setErrors({
                ...errors,
                email: 'Email không hợp lệ'
            })
            return false
        }

        if (formData.password === undefined) {
            setErrors({
                ...errors,
                password: 'Chưa có mật khẩu'
            })
            return false
        } else if (formData.password.length < 6) {
            setErrors({
                ...errors,
                password: 'Mật khẩu quá ngắn'
            })
            return false
        }

        if (formData.password_ === undefined) {
            setErrors({
                ...errors,
                password_: 'Chưa có mật khẩu'
            })
            return false
        } else if (formData.password_ != formData.password) {
            setErrors({
                ...errors,
                password_: 'Mật khẩu không trùng'
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
                    <FormControl.HelperText>
                        Tên đăng nhập phải có ít nhất 3 ký tự
                    </FormControl.HelperText>}
            </FormControl>

            <FormControl isRequired isInvalid={'email' in errors}>
                <Input
                    InputLeftElement={<Ionicons name='mail' size={25} color="black"/>}
                    placeholder="Email"
                    type='email'
                    onChangeText={value => {
                        setData({
                            ...formData,
                            email: value
                        })
                        delete errors.email
                    }} />
                {'email' in errors
                    ?
                    <FormControl.ErrorMessage>
                        {errors.email}
                    </FormControl.ErrorMessage>
                    :
                    <FormControl.HelperText>
                        Email để nhận thông báo khi quên mật khẩu
                    </FormControl.HelperText>}
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
                    <FormControl.HelperText>
                        Mật khẩu phải có ít nhất 6 ký tự
                    </FormControl.HelperText>}
            </FormControl>

            <FormControl isRequired isInvalid={'password_' in errors}>
                <Input
                    placeholder="Nhập lại mật khẩu"
                    type={show ? "text" : "password"}
                    InputLeftElement={<FontAwesome name='lock' size={25} color="black"/>}
                    InputRightElement={<Ionicons name={show ? 'eye' : 'eye-off'} size={25} color="black" onPress={() => setShow(!show)} />}
                    onChangeText={value => {
                        setData({
                            ...formData,
                            password_: value
                        })
                        delete errors.password_
                    }} />
                {'password_' in errors
                    ?
                    <FormControl.ErrorMessage>
                        {errors.password_}
                    </FormControl.ErrorMessage>
                    :
                    <FormControl.HelperText>
                        Nhập lại mật khẩu để chắc chắn
                    </FormControl.HelperText>}
            </FormControl>

            <Button onPress={onSubmit} mt="5" colorScheme="cyan">
                Đăng ký
            </Button>
        </VStack>
    )
}