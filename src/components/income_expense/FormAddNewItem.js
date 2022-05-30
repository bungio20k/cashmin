import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import styles from "../../styles/income_expense/FormStyle";
import {
  Button,
  Radio,
  Input,
  FormControl,
  Select,
  TextArea,
  Modal,
  useToast,
} from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";

import { AntDesign } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DataContext from "../../hooks/data/DataContext";
import AuthContext from "../../hooks/login-signup/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import ModalSelector from "react-native-modal-selector";
import axios from "axios";

const FormAddNewItem = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const [type, setType] = useState("0");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { categories, setDebits, wallets, setWallets } = useContext(DataContext);
  const { token } = useContext(AuthContext);
  const toast = useToast();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    amount: "",
    categoryName: "",
    categoryIcon: "",
    date: new Date(),
    desc: "",
    walletId: "",
  });

  const list = categories.map((item) => ({
    key: item.id,
    label: item.name,
    value: item.icon,
    component: (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name={item.icon} size={24} color="#198155" />
        <Text style={{ fontSize: 16, marginLeft: 6 }}>{item.name}</Text>
      </View>
    ),
  }));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setFormData((prev) => ({ ...prev, date: currentDate }));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const handleSubmit = async () => {
    if (formData.amount === "") {
      setErrors({ ...errors, amount: "Vui lòng nhập số tiền" });
      return;
    }
    if (formData.categoryName === "") {
      setErrors({ ...errors, category: "Vui lòng chọn hạng mục" });
      return;
    }
    if (formData.walletId === "") {
      setErrors({ ...errors, wallet: "Vui lòng chọn ví" });
      return;
    }

    const data = {
      ...formData,
      amount: type === "1" ? -Number(formData.amount) : Number(formData.amount),
    };
    console.log(data);

    try {
      const index = wallets.findIndex(w => w.id == formData.walletId);
      if (index != -1) {
        let modified = [...wallets];
        modified[index].transactions.push(data);
        const res = await axios.put("/wallets", {data: modified}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setWallets(modified);
      }
        
      setShowModal(true);
    } catch (error) {
      // offline
      console.log(error);
    }

    setFormData({
      amount: "",
      categoryName: "",
      categoryIcon: "",
      date: new Date(),
      desc: "",
      walletId: "",
    });
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flex: 1 }}
      scrollEnabled={false}
    >
      <ScrollView style={{ marginBottom: tabBarHeight + 4 }}>
        <FormControl style={styles.container}>
          <FormControl.Label>Thu/Chi</FormControl.Label>
          <Radio.Group
            name="type"
            value={type}
            onChange={(nextValue) => {
              setType(nextValue);
            }}
            style={styles.radioGroup}
            accessibilityLabel="favorite number"
            my="1"
            // size="sm"
          >
            <Radio value="0" my={1} colorScheme="success">
              <Text style={{ fontSize: 14 }}>Thêm khoản thu</Text>
            </Radio>
            <Radio value="1" my={1} colorScheme="success">
              <Text style={{ fontSize: 14, marginRight: 12 }}>
                Thêm khoản chi
              </Text>
            </Radio>
          </Radio.Group>

          <FormControl isRequired isInvalid={"amount" in errors}>
            <FormControl.Label>Số tiền</FormControl.Label>
            <Input
              type="number"
              placeholder="Số tiền"
              variant="rounded"
              bg="white"
              my="1"
              borderWidth={2}
              borderColor="#4fb286"
              keyboardType="numeric"
              InputLeftElement={
                <Ionicons
                  name="cash"
                  size={24}
                  color="#999"
                  style={{ marginLeft: 12 }}
                />
              }
              value={formData.amount}
              onChangeText={(text) => {
                setFormData((prev) => ({ ...prev, amount: text }));
                delete errors.amount;
              }}
            />
            {"amount" in errors ? (
              <FormControl.ErrorMessage marginLeft="4" marginTop="0">
                {errors.amount}
              </FormControl.ErrorMessage>
            ) : (
              <></>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={"category" in errors}>
            <FormControl.Label> Hạng mục</FormControl.Label>
            <ModalSelector
              data={list}
              scrollViewAccessibilityLabel={"Scrollable options"}
              cancelButtonAccessibilityLabel={"Cancel Button"}
              onChange={(option) => {
                setFormData((prev) => ({
                  ...prev,
                  categoryName: option.label,
                  categoryIcon: option.value,
                }));
                delete errors.category;
              }}
              style={{
                borderRadius: 24,
                backgroundColor: "white",
                paddingHorizontal: 12,
                borderWidth: 2,
                borderColor: "category" in errors ? "#4FB286" : "#4FB286",
                // width: 280,
                // paddingVertical: 2,
                // marginLeft: 5,
                marginVertical: 4,
                // marginHorizontal: ,
              }}
              optionContainerStyle={{
                backgroundColor: "#ECFCE5",
                marginHorizontal: 30,
              }}
              cancelContainerStyle={{ marginHorizontal: 60 }}
              cancelStyle={{
                backgroundColor: "#FF9800",
              }}
              cancelTextStyle={{ color: "#ECFCE5" }}
              optionStyle={{ flexDirection: "row", justifyContent: "center" }}
            >
              {formData?.categoryName ? (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: 5,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons
                      name={formData.categoryIcon}
                      size={28}
                      color="#4FB286"
                      style={{ marginRight: 12 }}
                    />
                    <Text style={{ fontSize: 14 }}>
                      {formData.categoryName}
                    </Text>
                  </View>
                  <Ionicons name="chevron-down" size={22} color="#999" />
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 9,
                  }}
                >
                  <Ionicons
                    name="menu-sharp"
                    size={24}
                    color="#999"
                    style={{ marginRight: 12 }}
                  />
                  <Text style={{ fontSize: 12, color: "#999" }}>Hạng mục</Text>
                </View>
              )}
            </ModalSelector>
            {"category" in errors ? (
              <FormControl.ErrorMessage marginLeft="4" marginTop="0">
                {errors.category}
              </FormControl.ErrorMessage>
            ) : (
              <></>
            )}
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Thời gian</FormControl.Label>
            <TouchableOpacity onPress={showDatepicker}>
              <Input
                my="1"
                bg="white"
                w={{
                  md: "100%",
                }}
                variant="rounded"
                type="date"
                borderWidth={2}
                borderColor="#4fb286"
                InputLeftElement={
                  <Ionicons
                    name="calendar"
                    size={24}
                    color="#7a7975"
                    onPress={showDatepicker}
                    style={{
                      marginLeft: 12,
                    }}
                  />
                }
                placeholder="Thời gian"
                value={formData.date.toLocaleString()}
                editable={false}
              />
            </TouchableOpacity>
          </FormControl>

          <FormControl isRequired isInvalid={"wallet" in errors}>
            <FormControl.Label>Ví tiền</FormControl.Label>
            <Select
              my="1"
              bg="white"
              borderRadius="full"
              borderWidth={2}
              borderColor="#4fb286"
              selectedValue={formData.walletId}
              minWidth="100%"
              accessibilityLabel="Chọn ví tiền"
              placeholder="Chọn ví tiền"
              _selectedItem={{
                bg: "teal.600",
              }}
              onValueChange={(itemValue) => {
                setFormData((prev) => ({ ...prev, walletId: itemValue }));
                delete errors.wallet;
              }}
              InputLeftElement={
                <Ionicons
                  name="wallet"
                  size={24}
                  color="#999"
                  style={{ marginLeft: 12 }}
                />
              }
            >
              {wallets.map((item) => (
                <Select.Item
                  label={item.name}
                  value={item.id}
                  key={item.id}
                />
              ))}
            </Select>
            {"wallet" in errors ? (
              <FormControl.ErrorMessage marginLeft="4" marginTop="0">
                {errors.wallet}
              </FormControl.ErrorMessage>
            ) : (
              <></>
            )}
          </FormControl>

          <FormControl>
            <FormControl.Label> Mô tả</FormControl.Label>
            <TextArea
              my="1"
              bg="white"
              borderRadius="2xl"
              borderWidth={2}
              borderColor="#4fb286"
              value={formData.desc}
              onChangeText={(text) => {
                setFormData((prev) => ({ ...prev, desc: text }));
              }}
              w="100%"
              minHeight="100px"
              placeholder="Mô tả"
            />
          </FormControl>
          <Button
            fontSize="xl"
            my="2"
            mx="auto"
            py="3"
            style={{
              backgroundColor: "#4FB286",
            }}
            w="80%"
            onPress={handleSubmit}
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
              style={{
                backgroundColor: " rgba(236, 252, 229, 1)",
                padding: 20,
              }}
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
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default FormAddNewItem;
