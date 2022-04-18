import { Image } from 'react-native'
import { Center } from 'native-base'

const icon = require('../../assets/logo.png')

export default function BigIcon() {
    return (
        <Center>
            <Image source={icon} style={style} />
        </Center>
    )
}

const style = {
    width: 300,
    height: 300,
    marginTop: 100,
}