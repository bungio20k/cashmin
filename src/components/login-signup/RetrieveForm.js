import { Text, Alert } from 'react-native'
import { useState } from 'react'
import { VStack, FormControl, Input } from 'native-base';
import { FontAwesome } from '@expo/vector-icons'
import RetrieveButton from './RetrieveButton'

export default function RegisterForm() {
    const [formData, setData] = useState({});
    const [errors, setErrors] = useState({});

    const validate = () => {
        if (formData.name === undefined || formData.name == '') {
            setErrors({
                ...errors,
                name: 'Chưa có tên đăng nhập'
            })
            return false
        }

        // server authentication
        // ...
        const response = true

        if (!response) {
            setErrors({
                ...errors,
                name: 'Tên đăng nhập không tồn tại'
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
           
            <RetrieveButton onPress={onSubmit} />
            <Text> Hoặc đăng nhập bằng </Text>
            
            <Text onPress={() => Alert.alert('Quen mat khau pressed')}> Đăng nhập </Text>
            <Text onPress={() => Alert.alert('Dang ky pressed')}> Đăng ký </Text>
        </VStack>
    )
}