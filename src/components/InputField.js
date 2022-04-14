import { TextInput } from "react-native"
import { View } from "react-native"

export default function InputField(props) {
    const { icon, value, onChange, placeholder } = props
    return (
        <View>
            <TextInput 
                value = {value}
                onChangeText = {onChange}
                placeholder = {placeholder}
            />
            <Image source={icon}/>
        </View>
    )
}