import {
    Text
} from 'react-native';
import {
    Actionsheet,
    Box,
    AlertDialog,
    Button
} from 'native-base';
import { TouchableWithoutFeedback } from "react-native";
import { useState } from 'react';
import Theme from '../../theme/mainTheme';

export default function DebitLongPress(props) {
    const { hold, setHold, currentDebit, setShowModal2 } = props;
    const [alert, setAlert] = useState(false);

    return (
        <>
            <Actionsheet isOpen={hold} onClose={() => { setHold(false) }}>
                <Actionsheet.Content>
                    <Box w="100%" h={60} px={4} justifyContent="center">
                        <Text>
                            {currentDebit?.name}
                        </Text>
                    </Box>
                    <Actionsheet.Item
                        onPress={() => {
                            setHold(false);
                            setShowModal2(true);
                        }}
                    >
                        Xem thông tin khoản nợ</Actionsheet.Item>
                    <Actionsheet.Item
                        onPress={() => {
                            setAlert(true);
                        }}
                    >Xóa khoản nợ</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => setHold(false)}>Đóng</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
            <TouchableWithoutFeedback onPress={() => setAlert(false)}>
                <AlertDialog isOpen={alert} onClose={() => { setAlert(false) }}>
                    <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>Xóa khoản nợ hiện tại</AlertDialog.Header>
                        <AlertDialog.Body>
                            <Text>Bạn có chắc chắn muốn xóa {currentDebit?.name}?</Text>
                            <Text>Khoản nợ đã xóa sẽ không thể khôi phục</Text>
                        </AlertDialog.Body>
                        <AlertDialog.Footer justifyContent="center">
                            <Button.Group>
                                <Button marginX={10} size="lg" backgroundColor={Theme.darkGreen} shadow='9' onPress={() => {setAlert(false);}}>
                                    Hủy
                                </Button>
                                <Button marginX={10} size="lg" backgroundColor={Theme.danger} shadow='9' onPress={() => {setAlert(false);}}>
                                    Xóa
                                </Button>
                            </Button.Group>
                        </AlertDialog.Footer>
                    </AlertDialog.Content>
                </AlertDialog>
            </TouchableWithoutFeedback>
        </>
    )
}