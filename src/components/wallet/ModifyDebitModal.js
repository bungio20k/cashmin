import {
    Modal,
    FormControl,
    Input,
    Button,
} from 'native-base';
import Theme from '../../theme/mainTheme';
export default function ModifyDebitModal(props) {
    const { showModal, setShowModal, currentDebit } = props
    return (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Khoản nợ hiện tại</Modal.Header>
                <Modal.Body>
                    <FormControl>
                        <FormControl.Label>Tên khoản nợ</FormControl.Label>
                        <Input defaultValue={currentDebit?.name} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Số tiền</FormControl.Label>
                        <Input defaultValue={currentDebit?.amount} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Nợ/ Cho nợ</FormControl.Label>
                        <Input defaultValue={currentDebit?.debt.toString()} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Hạng mục</FormControl.Label>
                        <Input defaultValue={currentDebit?.category} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Mô tả</FormControl.Label>
                        <Input defaultValue={currentDebit?.desc} />
                    </FormControl>
                    {currentDebit?.periodic &&
                        <FormControl>
                            <FormControl.Label>Định kỳ</FormControl.Label>
                            <Input defaultValue={currentDebit?.periodic.period} />
                        </FormControl>
                    }
                </Modal.Body>
                <Modal.Footer justifyContent="center">
                    <Button.Group>
                        <Button marginX={10} size="lg" backgroundColor={Theme.danger} shadow='9' onPress={() => {
                            setShowModal(false);
                        }}>
                            Hủy
                        </Button>
                        <Button marginX={10} size="lg" backgroundColor={Theme.darkGreen} shadow='9' onPress={() => {
                            setShowModal(false);
                        }}>
                            Lưu
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    )
}