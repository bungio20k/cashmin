import { Text } from "react-native";
import { Actionsheet, Box, AlertDialog, Button, useToast } from "native-base";
import { TouchableWithoutFeedback } from "react-native";
import { useContext, useState } from "react";
import Theme from "../../theme/mainTheme";
import axios from "axios";
import AuthContext from "../../hooks/login-signup/AuthContext";
import DataContext from "../../hooks/data/DataContext";

export default function DebitLongPress(props) {
  const { hold, setHold, currentDebit, setShowModal2 } = props;
  const [alert, setAlert] = useState(false);
  const { token } = useContext(AuthContext);
  const { setDebits } = useContext(DataContext);
  const toast = useToast();

  const handleDelete = async () => {
    setAlert(false);
    setHold(false);
    try {
      const res = await axios.delete("/debits", {
        headers: {
          Authorization: "Bearer " + token,
        },
        data: {
          _id: currentDebit._id,
        },
      });
      setDebits((prev) => [
        ...prev.filter((debit) => debit._id !== currentDebit._id),
      ]);
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
              Xóa khoản ghi nợ thành công!
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
  };

  return (
    <>
      <Actionsheet
        isOpen={hold}
        onClose={() => {
          setHold(false);
        }}
      >
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text>{currentDebit?.name}</Text>
          </Box>
          <Actionsheet.Item
            onPress={() => {
              setHold(false);
              setShowModal2(true);
            }}
          >
            Xem thông tin khoản nợ
          </Actionsheet.Item>
          <Actionsheet.Item
            onPress={() => {
              setAlert(true);
            }}
          >
            Xóa khoản nợ
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => setHold(false)}>
            Đóng
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
      <TouchableWithoutFeedback onPress={() => setAlert(false)}>
        <AlertDialog
          isOpen={alert}
          onClose={() => {
            setAlert(false);
          }}
        >
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Xóa khoản nợ hiện tại</AlertDialog.Header>
            <AlertDialog.Body>
              <Text>Bạn có chắc chắn muốn xóa {currentDebit?.name}?</Text>
              <Text>Khoản nợ đã xóa sẽ không thể khôi phục</Text>
            </AlertDialog.Body>
            <AlertDialog.Footer justifyContent="center">
              <Button.Group>
                <Button
                  marginX={10}
                  size="lg"
                  backgroundColor={Theme.darkGreen}
                  shadow="9"
                  onPress={() => {
                    setAlert(false);
                  }}
                >
                  Hủy
                </Button>
                <Button
                  marginX={10}
                  size="lg"
                  backgroundColor={Theme.danger}
                  shadow="9"
                  onPress={handleDelete}
                >
                  Xóa
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </TouchableWithoutFeedback>
    </>
  );
}
