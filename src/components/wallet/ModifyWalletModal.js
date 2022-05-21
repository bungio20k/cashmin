import {
    Modal,
    FormControl,
    Input,
    Button,
} from 'native-base';
import Theme from '../../theme/mainTheme';
export default function ModifyWalletModal(props) {
    const { showModal, setShowModal, currentWallet } = props
    return (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Ví hiện tại</Modal.Header>
                <Modal.Body>
                    <FormControl>
                        <FormControl.Label>Tên ví</FormControl.Label>
                        <Input defaultValue={currentWallet?.name}/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Số dư</FormControl.Label>
                        <Input defaultValue={currentWallet?.balance}/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Hạng mục</FormControl.Label>
                        <Input defaultValue={currentWallet?.category}/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Mô tả</FormControl.Label>
                        <Input defaultValue={currentWallet?.desc}/>
                    </FormControl>
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