import style from '../styles/BigIconStyle'
import { Image } from 'react-native'

const icon = require('../assets/logo.png')

export default function BigIcon() {
    return (
        <Image source={icon} style={style}/>
    )
}