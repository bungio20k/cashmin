import { Button, HStack, VStack } from "native-base";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "../../../styles/more_screen/accountScreenStyle";
import { AntDesign } from "@expo/vector-icons";
import InputComponent from "../../../components/account/InputComponent";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Input } from "native-base";
import { useEffect, useState } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import AuthContext from "../../../hooks/login-signup/AuthContext";
import DataContext from "../../../hooks/data/DataContext";
import Moment from "moment";

const AccountScreen = () => {
  const { logout } = useContext(AuthContext);
  const { profile, setProfile } = useContext(DataContext);
  const [data, setData] = useState({ ...profile });
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const tabBarHeight = useBottomTabBarHeight();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [disable1, setDisabled1] = useState(true);
  const [disable2, setDisabled2] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    // setDate(currentDate);
    handleChange(currentDate, "birthday");
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const handleChange = (value, typ) => {
    if (typ === "oldPassword" || typ === "newPassword")
      setPasswords((prev) => ({ ...prev, [typ]: value }));
    else setData((prev) => ({ ...prev, [typ]: value }));
  };

  const updateProfile = () => {
    console.log(data);
  };

  const changePassword = () => {
    console.log(passwords);
  };

  useEffect(() => {
    setDisabled1(
      profile.fullName === data.fullName &&
        profile.phoneNumber === data.phoneNumber &&
        profile.birthday === data.birthday
    );
  }, [data.fullName, data.phoneNumber, data.birthday]);

  useEffect(() => {
    setDisabled2(passwords.newPassword === "" || passwords.oldPassword === "");
  }, [passwords.newPassword, passwords.oldPassword]);

  return (
    <View style={styles.container}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        style={styles.header}
      >
        <Text style={styles.title}>Tài khoản</Text>
        <Button
          colorScheme="warning"
          endIcon={<AntDesign name="logout" size={16} color="white" />}
          onPress={logout}
        >
          Đăng xuất
        </Button>
      </HStack>
      <ScrollView
        style={{
          width: "100%",
          marginBottom: tabBarHeight,
        }}
      >
        <View style={styles.itemContainer}>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            borderColor="black"
            borderBottomWidth="1"
            pb="1"
          >
            <Text style={styles.itemTitle}>Chung</Text>
            <Button
              colorScheme="success"
              isDisabled={disable1}
              onPress={updateProfile}
            >
              Cập nhật
            </Button>
          </HStack>
          <VStack space={2} alignItems="stretch" px="4" mt="2">
            <InputComponent
              label="Họ và Tên"
              value={data.fullName}
              handleChange={(value) => handleChange(value, "fullName")}
            />
            {/* <InputComponent
              label="Email"
              value={data.email}
              handleChange={(value) => handleChange(value, "email")}
            /> */}
            <InputComponent
              label="Số điện thoại"
              value={data.phoneNumber}
              handleChange={(value) => handleChange(value, "phoneNumber")}
            />
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
                    // (date && date.toLocaleString()) ||
                    // new Date().toLocaleString()
                    // data.birthday
                    data.birthday === ""
                      ? ""
                      : Moment(data.birthday).format("DD/MM/YYYY")
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
            <Button
              colorScheme="success"
              isDisabled={disable2}
              onPress={changePassword}
            >
              Thay đổi mật khẩu
            </Button>
          </HStack>
          <VStack space={1} alignItems="stretch" px="4" mt="2">
            <InputComponent
              label="Mật khẩu cũ"
              value={passwords.oldPassword}
              type="pwd"
              handleChange={(value) => handleChange(value, "oldPassword")}
            />
            <InputComponent
              label="Mật khẩu mới"
              value={passwords.newPassword}
              type="pwd"
              handleChange={(value) => handleChange(value, "newPassword")}
            />
          </VStack>
        </View>
      </ScrollView>
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
