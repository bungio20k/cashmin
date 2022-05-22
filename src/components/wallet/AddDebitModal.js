import {
  Modal,
  FormControl,
  Input,
  Button,
  Radio,
  Select,
  TextArea,
} from "native-base";
import { useState } from "react";
import Theme from "../../theme/mainTheme";
import { View, TouchableOpacity, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { AntDesign } from "@expo/vector-icons";

export default function AddDebitModal(props) {
  const { showModal, setShowModal } = props;
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="xl">
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Khoản nợ hiện tại</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Tên khoản nợ</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Số tiền</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Nợ/ Cho nợ</FormControl.Label>
            {/* <Input /> */}
            <Select
              selectedValue="0"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: "teal.500",
              }}
              mt={1}
            >
              <Select.Item label="Nợ" value="0" />
              <Select.Item label="Cho nợ" value="1" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label>Hạng mục</FormControl.Label>
            <Input />
          </FormControl>{" "}
          <FormControl>
            <FormControl.Label> Thời hạn thanh toán</FormControl.Label>
            {/* <Input /> */}
            <TouchableOpacity onPress={showDatepicker}>
              <Input
                type="date"
                InputRightElement={
                  <AntDesign
                    name="calendar"
                    size={24}
                    color="#7a7975"
                    onPress={showDatepicker}
                    style={{
                      marginRight: 8,
                    }}
                  />
                }
                placeholder="Thời gian"
                value={
                  (date && date.toLocaleString()) || new Date().toLocaleString()
                }
                editable={false}
              />
            </TouchableOpacity>
          </FormControl>
          <FormControl>
            <FormControl.Label>Mô tả</FormControl.Label>
            <TextArea h={20} />
          </FormControl>
        </Modal.Body>
        <Modal.Footer justifyContent="center">
          <Button.Group>
            <Button
              marginX={10}
              size="lg"
              backgroundColor={Theme.danger}
              shadow="9"
              onPress={() => {
                setShowModal(false);
              }}
            >
              Hủy
            </Button>
            <Button
              marginX={10}
              size="lg"
              backgroundColor={Theme.darkGreen}
              shadow="9"
              onPress={() => {
                setShowModal(false);
              }}
            >
              Lưu
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date || new Date()}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
      <Modal isOpen={showModal1} onClose={() => setShowModal1(false)}>
        <Modal.Content
          w="90%"
          style={{ backgroundColor: " rgba(236, 252, 229, 1)", padding: 20 }}
        >
          <Modal.Body>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              Bạn đã thêm thành công!
            </Text>
            <Button
              fontSize="xl"
              my="2"
              mx="auto"
              py="3"
              style={{
                backgroundColor: "#4FB286",
              }}
              w="80%"
              onPress={() => setShowModal(false)}
            >
              Thành công
            </Button>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Modal>
  );
}
