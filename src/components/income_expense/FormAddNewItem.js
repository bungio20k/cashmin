import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "../../styles/income_expense/FormStyle";
import {
  Button,
  Radio,
  Input,
  FormControl,
  Select,
  TextArea,
  Modal,
} from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";

import { AntDesign } from "@expo/vector-icons";

const FormAddNewItem = () => {
  const [type, setType] = useState("0");
  const [category, setCategory] = useState("");
  const [wallet, setWallet] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
    <FormControl isRequired style={styles.container}>
      <Radio.Group
        name="type"
        value={type}
        onChange={(nextValue) => {
          setType(nextValue);
        }}
        style={styles.radioGroup}
        accessibilityLabel="favorite number"
        my="1"
        size="sm"
      >
        <Radio value="0" my={1}>
          <Text style={{ fontSize: 18 }}>Thêm khoản thu</Text>
        </Radio>
        <Radio value="1" my={1}>
          <Text style={{ fontSize: 18 }}>Thêm khoản chi</Text>
        </Radio>
      </Radio.Group>
      <Input
        fontSize="md"
        type="number"
        placeholder="Số tiền"
        variant="rounded"
        bg="white"
        my="1"
        keyboardType="numeric"
      />
      <Select
        fontSize="md"
        my="1"
        bg="white"
        borderRadius="full"
        selectedValue={category}
        minWidth="100%"
        accessibilityLabel="Chọn hạng mục"
        placeholder="Chọn hạng mục"
        _selectedItem={{
          bg: "teal.600",
        }}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select>
      <TouchableOpacity onPress={showDatepicker}>
        <Input
          fontSize="md"
          my="1"
          bg="white"
          w={{
            md: "100%",
          }}
          variant="rounded"
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
          value={(date && date.toLocaleString()) || new Date().toLocaleString()}
          editable={false}
        />
      </TouchableOpacity>
      <Select
        fontSize="md"
        my="1"
        bg="white"
        borderRadius="full"
        selectedValue={wallet}
        minWidth="100%"
        accessibilityLabel="Chọn ví tiền"
        placeholder="Chọn ví tiền"
        _selectedItem={{
          bg: "teal.600",
        }}
        onValueChange={(itemValue) => setWallet(itemValue)}
      >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select>

      <TextArea
        fontSize="md"
        my="1"
        bg="white"
        borderRadius="2xl"
        value={desc}
        onChange={(e) => {
          setDesc(e.currentTarget.value);
        }}
        w="100%"
        minHeight="100px"
        placeholder="Mô tả"
      />
      <Button
        fontSize="xl"
        my="2"
        mx="auto"
        py="3"
        style={{
          backgroundColor: "#4FB286",
        }}
        w="80%"
        onPress={() => setShowModal(true)}
      >
        Thêm
      </Button>
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
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
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
    </FormControl>
  );
};

export default FormAddNewItem;
