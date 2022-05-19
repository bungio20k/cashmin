import { Button, HStack, Select, Switch, VStack } from "native-base";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../../styles/more_screen/accountScreenStyle";
import { AntDesign } from "@expo/vector-icons";
import InputComponent from "../../../components/account/InputComponent";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Input } from "native-base";
import { useState } from "react";

const AccountScreen = () => {
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
    <View style={styles.container}>
      <HStack justifyContent="space-between" alignItems="center" w="100%">
        <Text style={styles.title}>Tài khoản</Text>
        <Button
          colorScheme="warning"
          endIcon={<AntDesign name="logout" size={16} color="white" />}
        >
          Đăng xuất
        </Button>
      </HStack>
      <View style={styles.itemContainer}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          borderColor="black"
          borderBottomWidth="1"
          pb="1"
        >
          <Text style={styles.itemTitle}>Chung</Text>
          <Button colorScheme="success">Cập nhật</Button>
        </HStack>
        <VStack space={2} alignItems="stretch" px="4" mt="2">
          <InputComponent label="Họ và Tên" value="Nguyễn Văn A" />
          <InputComponent label="Email" value="nguyenvana@gmail.com" />
          <InputComponent label="Tên đăng nhập" value="nguyenvana" />
          <InputComponent label="Số điện thoại" value="0123456789" />
          <View>
            <Text style={{ fontSize: 16 }}>Sinh nhật</Text>
            <TouchableOpacity onPress={showDatepicker}>
              <Input
                fontSize="md"
                my="2"
                bg="#fbfbfb"
                w={{
                  md: "100%",
                }}
                variant="rounded"
                type="date"
                InputRightElement={
                  <AntDesign
                    name="calendar"
                    size={24}
                    color="#198155"
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
          </View>
        </VStack>
      </View>
      <View style={styles.itemContainer}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          borderColor="black"
          borderBottomWidth="1"
          pb="1"
        >
          <Text style={styles.itemTitle}>Bảo mật</Text>
          <Button colorScheme="success" isDisabled>
            Cập nhật
          </Button>
        </HStack>
        <VStack space={1} alignItems="stretch" px="4" mt="2">
          <InputComponent label="Mật khẩu cũ" value="ồ la" type="pwd" />
          <InputComponent label="Mật khẩu mới" value="" type="pwd" />
        </VStack>
      </View>
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
    </View>
  );
};

export default AccountScreen;
