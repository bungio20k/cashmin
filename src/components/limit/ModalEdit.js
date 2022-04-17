import { View, Text } from "react-native";
import React from "react";
import { Modal, Input, Button } from "native-base";
import styles from "../../styles/limit/ModalStyle";
import { Entypo } from "@expo/vector-icons";

const ModalEdit = ({ showModal, setShowModal, limit, setLimit }) => {
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content
        w="90%"
        style={{ backgroundColor: " rgba(236, 252, 229, 1)", padding: 20 }}
      >
        <Modal.Body>
          <Text style={styles.title}>Đặt hạn mức chi</Text>
          <Text style={styles.label}>Nhập hạn mức chi mới</Text>
          <Input
            fontSize="xl"
            mt="1"
            mb="4"
            variant="rounded"
            InputRightElement={
              <Entypo
                name="pencil"
                size={24}
                color="#198155"
                style={{ marginRight: 8 }}
              />
            }
            placeholder="200.000 đ"
            value={limit}
            onChange={(value) => setLimit(value)}
          />

          <View style={styles.actions}>
            <Button
              py="3"
              px="8"
              style={{
                backgroundColor: "#D3180C",
              }}
              onPress={() => {
                setLimit("");
                setShowModal(false);
              }}
            >
              Hủy bỏ
            </Button>
            <Button
              py="3"
              px="8"
              style={{
                backgroundColor: "#4FB286",
              }}
              onPress={() => {
                setLimit("");
                setShowModal(false);
              }}
            >
              Xác nhận
            </Button>
          </View>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default ModalEdit;
