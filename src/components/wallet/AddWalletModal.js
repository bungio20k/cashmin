import {
    Modal,
    FormControl,
    Input,
    Button,
} from 'native-base';
import Theme from '../../theme/mainTheme';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

import style from '../../styles/wallet/walletModal'

export default function AddModal(props) {
    const { showModal, setShowModal } = props;
    const [formData, setData] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setData({});
        setErrors({});
    }, [showModal]);

    const validate = async () => {
        if (formData.name === undefined || formData.name == '') {
            setErrors({
                ...errors,
                name: 'Chưa có tên ví'
            })
            return false
        }

        if (formData.balance === undefined || formData.balance == '') {
            setErrors({
                ...errors,
                balance: 'Chưa nhập số dư'
            })
            return false
        }

        console.log(formData);
        setShowModal(false);
    };

    return (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} shadow="9">
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Tạo ví mới</Modal.Header>
                <Modal.Body>
                    <FormControl isRequired isInvalid={'name' in errors}>
                        <Input
                            variant={style.input.variant}
                            borderWidth={style.input.borderWidth}
                            borderColor={style.input.borderColor}
                            fontSize={style.input.fontSize}
                            width={style.input.width}
                            alignSelf={style.input.alignSelf}
                            margin={style.input.margin}

                            InputLeftElement={<Ionicons name='wallet' size={style.icon.size} color={style.icon.color} style={style.left_icon} />}
                            placeholder="Tên ví"
                            onChangeText={value => {
                                setData({
                                    ...formData,
                                    name: value
                                })
                                delete errors.name
                            }} />
                        {'name' in errors
                            ?
                            <FormControl.ErrorMessage marginLeft='9' marginTop='0'>
                                {errors.name}
                            </FormControl.ErrorMessage>
                            :
                            <></>
                        }
                    </FormControl>

                    <FormControl isRequired isInvalid={'balance' in errors}>
                        <Input
                            variant={style.input.variant}
                            borderWidth={style.input.borderWidth}
                            borderColor={style.input.borderColor}
                            fontSize={style.input.fontSize}
                            width={style.input.width}
                            alignSelf={style.input.alignSelf}
                            margin={style.input.margin}

                            InputLeftElement={<FontAwesome name='money' size={style.icon.size} color={style.icon.color} style={style.left_icon} />}
                            placeholder="Số dư"
                            onChangeText={value => {
                                setData({
                                    ...formData,
                                    balance: value
                                })
                                delete errors.balance
                            }} />
                        {'balance' in errors
                            ?
                            <FormControl.ErrorMessage marginLeft='9' marginTop='0'>
                                {errors.balance}
                            </FormControl.ErrorMessage>
                            :
                            <></>
                        }
                    </FormControl>

                    <FormControl>
                        <Input
                            variant={style.input.variant}
                            borderWidth={style.input.borderWidth}
                            borderColor={style.input.borderColor}
                            fontSize={style.input.fontSize}
                            width={style.input.width}
                            alignSelf={style.input.alignSelf}
                            margin={style.input.margin}
                            
                            placeholder="Hạng mục"
                            InputLeftElement={<Ionicons name='menu-sharp' size={style.icon.size} color={style.icon.color} style={style.left_icon} />}
                            onChangeText={value => {
                                setData({
                                    ...formData,
                                    category: value
                                })
                                delete errors.category
                            }} />
                    </FormControl>

                    <FormControl>
                        <Input
                            variant={style.input.variant}
                            borderWidth={style.input.borderWidth}
                            borderColor={style.input.borderColor}
                            fontSize={style.input.fontSize}
                            width={style.input.width}
                            alignSelf={style.input.alignSelf}
                            margin={style.input.margin}

                            placeholder="Mô tả"
                            InputLeftElement={<FontAwesome name='credit-card' size={style.icon.size} color={style.icon.color} style={style.left_icon} />}
                            onChangeText={value => {
                                setData({
                                    ...formData,
                                    desc: value
                                })
                                delete errors.desc
                            }} />
                    </FormControl>
                </Modal.Body>
                <Modal.Footer justifyContent="center">
                    <Button.Group>
                        <Button marginX={10} size="lg" backgroundColor={Theme.danger} shadow='5' onPress={() => {
                            setShowModal(false);
                        }}>
                            Hủy
                        </Button>
                        <Button 
                            marginX={10} 
                            size="lg" 
                            backgroundColor={Theme.darkGreen} 
                            shadow='5' 
                            onPress={() => validate()}
                        >
                            Lưu
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    )
}