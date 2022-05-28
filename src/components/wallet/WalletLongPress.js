import { Text } from "react-native";
import { Actionsheet, Box, AlertDialog, Button, useToast } from "native-base";
import { TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import Theme from "../../theme/mainTheme";
import axios from "axios";
import { useContext } from "react";
import DataContext from "../../hooks/data/DataContext";
import AuthContext from "../../hooks/login-signup/AuthContext";

export default function WalletLongPress(props) {
  const { hold, setHold, currentWallet, setShowModal2 } = props;
  const [alert, setAlert] = useState(false);
  const { setWallets, wallets } = useContext(DataContext);
  const { token } = useContext(AuthContext);
  const toast = useToast();

  const handleDelete = async () => {
    setHold(false);
    setAlert(false);
    try {
      const res = await axios.delete("/wallets", {
        headers: {
          Authorization: "Bearer " + token,
        },
        data: {
          walletId: currentWallet._id,
          isMain: currentWallet.isMain,
        },
      });
      setWallets((prev) => [
        ...prev.filter((item) => item._id !== currentWallet._id),
      ]);
      if (currentWallet.isMain) {
        setWallets((prev) => {
          if (prev.length != 0) prev[0].isMain = true;
          return prev;
        })
      }
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
              Xoá ví thành công!
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
            <Text>{currentWallet?.name}</Text>
          </Box>
          <Actionsheet.Item
            onPress={() => {
              setHold(false);
              setShowModal2(true);
            }}
          >
            Xem thông tin ví
          </Actionsheet.Item>
          <Actionsheet.Item
            onPress={() => {
              setAlert(true);
            }}
          >
            Xóa ví
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
            <AlertDialog.Header>Xóa ví hiện tại</AlertDialog.Header>
            <AlertDialog.Body>
              <Text>Bạn có chắc chắn muốn xóa {currentWallet?.name}?</Text>
              <Text>Ví đã xóa sẽ không thể khôi phục</Text>
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
