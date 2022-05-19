import { HStack, Select, Switch, VStack } from "native-base";
import { View, Text } from "react-native";
import styles from "../../../styles/more_screen/settingSceenStyle";
import { AntDesign } from "@expo/vector-icons";

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cài đặt</Text>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>Chung</Text>
        <VStack space={2} alignItems="stretch" px="4">
          <HStack space={4} justifyContent="space-between" alignItems="center">
            <Text style={styles.subItemTitle}>Ngôn ngữ</Text>
            <Select
              selectedValue="vi"
              minWidth="120"
              placeholder="Ngôn ngữ"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <AntDesign name="down" size={2} color="white" />,
              }}
              mt={1}
              onValueChange={(itemValue) => itemValue}
              borderRadius="full"
              backgroundColor="#39A0ED"
              color="white"
              fontSize="sm"
              style={{ height: 38 }}
            >
              <Select.Item label="Tiếng Việt" value="vi" />
              <Select.Item label="English" value="eng" />
            </Select>
          </HStack>
          <HStack space={4} justifyContent="space-between" alignItems="center">
            <Text style={styles.subItemTitle}>Định dạng thời gian</Text>
            <Select
              selectedValue="0"
              minWidth="120"
              placeholder="Thời gian"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <AntDesign name="down" size={2} color="white" />,
              }}
              onValueChange={(itemValue) => itemValue}
              borderRadius="full"
              backgroundColor="#39A0ED"
              color="white"
              style={{ height: 38 }}
            >
              <Select.Item label="dd/mm/yy" value="0" />
              <Select.Item label="yy/mm/dd" value="1" />
            </Select>
          </HStack>
          <HStack space={4} justifyContent="space-between" alignItems="center">
            <Text style={styles.subItemTitle}>Đơn vị tiền</Text>
            <Select
              selectedValue="0"
              minWidth="120"
              placeholder="Đơn vị"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <AntDesign name="down" size={2} color="white" />,
              }}
              onValueChange={(itemValue) => itemValue}
              borderRadius="full"
              backgroundColor="#39A0ED"
              color="white"
              style={{ height: 38 }}
            >
              <Select.Item label="VNĐ" value="0" />
              <Select.Item label="USD" value="1" />
            </Select>
          </HStack>
          <HStack space={4} justifyContent="space-between" alignItems="center">
            <Text style={styles.subItemTitle}>Ẩn số tiền</Text>
            <Switch size="lg" />
          </HStack>
        </VStack>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>Nhắc nhở</Text>
        <VStack space={1} alignItems="stretch" px="4">
          <HStack space={4} justifyContent="space-between" alignItems="center">
            <Text style={styles.subItemTitle}>Nhắc nhở nhập liệu</Text>
            <Switch size="lg" value={true} />
          </HStack>
          <HStack space={4} justifyContent="space-between" alignItems="center">
            <Text style={styles.subItemTitle}>Thời gian nhắc</Text>
            <Select
              selectedValue="0"
              minWidth="120"
              placeholder="Thời gian"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <AntDesign name="down" size={2} color="white" />,
              }}
              onValueChange={(itemValue) => itemValue}
              borderRadius="full"
              color="white"
              backgroundColor="#39A0ED"
              style={{ height: 38, color: "white" }}
            >
              {[...Array(24).keys()].map((x, index) => (
                <Select.Item
                  label={String(x) + ":00"}
                  value={String(x)}
                  key={x}
                />
              ))}
            </Select>
          </HStack>
        </VStack>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>Báo cáo</Text>
        <VStack space={4} justifyContent="center">
          <HStack space={4} justifyContent="space-between" alignItems="center">
            <Text style={styles.subItemTitle}>Ngày bắt đầu của tuần</Text>
            <Select
              selectedValue="0"
              minWidth="120"
              placeholder="Ngày bắt đầu"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <AntDesign name="down" size={2} color="white" />,
              }}
              mt={1}
              onValueChange={(itemValue) => itemValue}
              borderRadius="full"
              backgroundColor="#39A0ED"
              color="white"
              fontSize="sm"
              style={{ height: 38 }}
            >
              <Select.Item label="Thứ 2" value="0" />
              <Select.Item label="Chủ Nhật" value="1" />
            </Select>
          </HStack>
          <HStack space={4} justifyContent="space-between" alignItems="center">
            <Text style={styles.subItemTitle}>Ngày bắt đầu của tháng</Text>
            <Select
              selectedValue="0"
              minWidth="120"
              placeholder="Ngày bắt đầu"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <AntDesign name="down" size={2} color="white" />,
              }}
              mt={1}
              onValueChange={(itemValue) => itemValue}
              borderRadius="full"
              backgroundColor="#39A0ED"
              color="white"
              fontSize="sm"
              style={{ height: 38 }}
            >
              <Select.Item label="Thứ 2" value="0" />
              <Select.Item label="Chủ Nhật" value="1" />
            </Select>
          </HStack>
          <HStack space={4} justifyContent="space-between" alignItems="center">
            <Text style={styles.subItemTitle}>Ngày bắt đầu của năm</Text>
            <Select
              selectedValue="0"
              minWidth="120"
              placeholder="Ngày bắt đầu"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <AntDesign name="down" size={2} color="white" />,
              }}
              mt={1}
              onValueChange={(itemValue) => itemValue}
              borderRadius="full"
              backgroundColor="#39A0ED"
              color="white"
              fontSize="sm"
              style={{ height: 38 }}
            >
              <Select.Item label="Thứ 2" value="0" />
              <Select.Item label="Chủ Nhật" value="1" />
            </Select>
          </HStack>
        </VStack>
      </View>
    </View>
  );
};

export default SettingScreen;
