import {
  Modal,
  FormControl,
  Input,
  Button,
  Radio,
  Select,
  TextArea,
  Box,
  useToast,
} from "native-base";
import { useContext, useState } from "react";
import Theme from "../../theme/mainTheme";
import { View, TouchableOpacity, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import ModalSelector from "react-native-modal-selector";
import axios from "axios";
import AuthContext from "../../hooks/login-signup/AuthContext";
import DataContext from "../../hooks/data/DataContext";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Moment from "moment";

export default function AddDebitModal(props) {
  const { showModal, setShowModal } = props;
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const { categories, setDebits } = useContext(DataContext);
  const { token } = useContext(AuthContext);
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    isDebt: true,
    amount: "",
    categoryName: "",
    categoryIcon: "",
    desc: "",
    deadline: new Date(),
  });
  const [errors, setErrors] = useState({});

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    // setDate(currentDate);
    setFormData((prev) => ({ ...prev, deadline: currentDate }));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const list = categories.map((item) => ({
    key: item._id,
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

  const handleSubmit = async () => {
    if (formData.name === "") {
      setErrors({ ...errors, name: "Tên ghi nợ không được để trống" });
    } else if (formData.amount === "") {
      setErrors({ ...errors, amount: "Số tiền không được để trống" });
    } else {
      setShowModal(false);
      try {
        const res = await axios.post("/debits", formData, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setDebits((prev) => [...prev, { ...res.data, ...formData }]);
        toast.show({
          render: () => {
            return (
              <Box
                bg="emerald.500"
                rounded="sm"
                mb={5}
                px="2"
                py="2"
                mr="2"
                _text={{
                  fontSize: "md",
                  fontWeight: "medium",
                  color: "warmGray.50",
                  letterSpacing: "lg",
                }}
              >
                Thêm khoản ghi nợ thành công!
              </Box>
            );
          },
          placement: "top-right",
        });
      } catch (error) {
        toast.show({
          render: () => {
            return (
              <Box
                bg="red.600"
                rounded="sm"
                mb={5}
                px="2"
                py="2"
                mr="2"
                _text={{
                  fontSize: "md",
                  fontWeight: "medium",
                  color: "warmGray.50",
                  letterSpacing: "lg",
                }}
              >
                Có lỗi xảy ra, vui lòng thử lại!
              </Box>
            );
          },
          placement: "top-right",
        });
      }
      setFormData({
        name: "",
        isDebt: true,
        amount: "",
        categoryName: "",
        categoryIcon: "",
        desc: "",
        deadline: new Date(),
      });
    }
  };

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="xl">
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Khoản nợ hiện tại</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Thể loại</FormControl.Label>
            {/* <Input /> */}
            <Radio.Group
              name="type"
              value={formData.isDebt}
              onChange={(nextValue) => {
                setFormData((prev) => ({ ...prev, isDebt: nextValue }));
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              accessibilityLabel="favorite number"
              my="1"
              // size="sm"
            >
              <Radio value={true} my={1} colorScheme="success">
                <Text style={{ fontSize: 14 }}>Khoản nợ</Text>
              </Radio>
              <Radio value={false} my={1} colorScheme="success">
                <Text style={{ fontSize: 14, marginRight: 12 }}>
                  Khoản cho nợ
                </Text>
              </Radio>
            </Radio.Group>
            {/* <Select
              selectedValue={formData.isDebt}
              bg="white"
              borderWidth={2}
              borderColor="#4fb286"
              borderRadius="full"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: "teal.500",
              }}
              mt={1}
              value={formData.isDebt}
              onValueChange={(nextValue) => {
                setFormData((prev) => ({ ...prev, isDebt: nextValue }));
              }}
              InputLeftElement={
                <MaterialCommunityIcons
                  name="cash-plus"
                  size={24}
                  color="#999"
                />
              }
            >
              <Select.Item label="Nợ" value={true} />
              <Select.Item label="Cho nợ" value={false} />
            </Select> */}
          </FormControl>
          <FormControl isRequired isInvalid={"name" in errors}>
            <FormControl.Label>Tên khoản nợ</FormControl.Label>
            <Input
              variant="rounded"
              bg="white"
              borderWidth={2}
              borderColor="#4fb286"
              placeholder="Tên khoản nợ"
              onChangeText={(text) => {
                setFormData((prev) => ({ ...prev, name: text }));
                delete errors.name;
              }}
              value={formData.name}
              InputLeftElement={
                <FontAwesome5
                  name="money-check-alt"
                  size={18}
                  color="#999"
                  style={{ marginLeft: 12 }}
                />
              }
            />
            {"name" in errors ? (
              <FormControl.ErrorMessage marginLeft="4" marginTop="0">
                {errors.name}
              </FormControl.ErrorMessage>
            ) : (
              <></>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={"amount" in errors}>
            <FormControl.Label>Số tiền</FormControl.Label>
            <Input
              variant="rounded"
              bg="white"
              borderWidth={2}
              borderColor="#4fb286"
              placeholder="Số tiền"
              onChangeText={(text) => {
                setFormData((prev) => ({ ...prev, amount: text }));
                delete errors.amount;
              }}
              value={formData.amount}
              InputLeftElement={
                <MaterialIcons
                  name="attach-money"
                  size={24}
                  color="#999"
                  style={{ marginLeft: 12 }}
                />
              }
            />
            {"amount" in errors ? (
              <FormControl.ErrorMessage marginLeft="4" marginTop="0">
                {errors.amount}
              </FormControl.ErrorMessage>
            ) : (
              <></>
            )}
          </FormControl>
          <FormControl>
            <FormControl.Label>Hạng mục</FormControl.Label>
            {/* <Input /> */}
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
              }}
              style={{
                borderRadius: 24,
                backgroundColor: "white",
                paddingHorizontal: 12,
                borderColor: "#4FB286",
                borderWidth: 2,
                // borderWidth: 1,
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
                    <Text style={{ fontSize: 15 }}>
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
                    style={{ marginRight: 12, marginLeft: 4 }}
                  />
                  <Text style={{ fontSize: 13, color: "#999" }}>Hạng mục</Text>
                </View>
              )}
            </ModalSelector>
          </FormControl>
          <FormControl>
            <FormControl.Label> Thời hạn thanh toán</FormControl.Label>
            {/* <Input /> */}
            <TouchableOpacity onPress={showDatepicker}>
              <Input
                type="date"
                variant="rounded"
                bg="white"
                borderWidth={2}
                borderColor="#4fb286"
                InputLeftElement={
                  <AntDesign
                    name="calendar"
                    size={24}
                    color="#7a7975"
                    onPress={showDatepicker}
                    style={{
                      // marginRight: 8,
                      marginLeft: 13,
                    }}
                  />
                }
                placeholder="Thời gian"
                value={formData.deadline.toLocaleString()}
                // value={
                //   (formData.deadline &&
                //     Moment(formData.deadline).format("DD/MM/YYYY")) ||
                //   ""
                // }
                editable={false}
              />
            </TouchableOpacity>
          </FormControl>
          <FormControl>
            <FormControl.Label>Mô tả</FormControl.Label>
            <TextArea
              h={20}
              borderRadius="20"
              borderWidth={2}
              borderColor="#4fb286"
              placeholder="Mô tả"
              onChangeText={(text) => {
                setFormData((prev) => ({ ...prev, desc: text }));
              }}
              value={formData.desc}
            />
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
              onPress={handleSubmit}
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
