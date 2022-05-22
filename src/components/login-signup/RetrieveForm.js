import { Text, Alert, View } from "react-native";
import { useState } from "react";
import { VStack, FormControl, Input } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import RetrieveButton from "./RetrieveButton";
import style from "../../styles/login-signup/RetrieveStyle";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function RegisterForm() {
  const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const validate = () => {
    if (formData.name === undefined || formData.name == "") {
      setErrors({
        ...errors,
        name: "Chưa có tên đăng nhập",
      });
      return false;
    }

    // server authentication
    // ...
    const response = true;

    if (!response) {
      setErrors({
        ...errors,
        name: "Tên đăng nhập không tồn tại",
      });
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    validate() ? console.log(formData) : console.log("Validation Failed");
  };

  return (
    <VStack marginTop="16">
      <FormControl isRequired isInvalid={"name" in errors}>
        <Input
          variant={style.input.variant}
          borderWidth={style.input.borderWidth}
          borderColor={style.input.borderColor}
          fontSize={style.input.fontSize}
          width={style.input.width}
          alignSelf={style.input.alignSelf}
          margin={style.input.margin}
          InputLeftElement={
            <FontAwesome
              name="user"
              size={style.icon.size}
              color={style.icon.color}
              style={style.left_icon}
            />
          }
          placeholder="Tên đăng nhập"
          onChangeText={(value) => {
            setData({
              ...formData,
              name: value,
            });
            delete errors.name;
          }}
        />
        {"name" in errors ? (
          <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
        ) : (
          <FormControl.HelperText marginLeft="9" marginTop="0">
            Nhận mật khẩu mới qua email của bạn
          </FormControl.HelperText>
        )}
      </FormControl>

      <RetrieveButton onPress={onSubmit} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "flex-end",
          marginTop: 12,
          marginRight: 4,
        }}
      >
        <AntDesign name="back" size={16} color="black" />
        <Text
          style={[
            style.text,
            style.link,
            {
              marginRight: "5%",
            },
          ]}
          onPress={() => navigation.goBack()}
        >
          Quay lại
        </Text>
      </View>
    </VStack>
  );
}
