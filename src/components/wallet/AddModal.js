import {
    Modal,
    FormControl,
    Input,
    Button,
    Center,
    VStack,
    HStack,
} from 'native-base';
import Theme from '../../theme/mainTheme';

export default function AddModal(props) {
    const { showModal, setShowModal } = props
    return (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Tạo ví mới</Modal.Header>
                <Modal.Body>
                    <FormControl>
                        <FormControl.Label>Tên ví</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Số dư</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Hạng mục</FormControl.Label>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Mô tả</FormControl.Label>
                        <Input />
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