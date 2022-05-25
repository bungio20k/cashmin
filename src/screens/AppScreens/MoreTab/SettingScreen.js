import { HStack, Select, Switch, VStack } from "native-base";
import { View, Text, ScrollView } from "react-native";
import styles from "../../../styles/more_screen/settingSceenStyle";
import { AntDesign } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import DataContext from "../../../hooks/data/DataContext";
import { useState } from "react";

const SettingScreen = () => {
  const { settings, setSettings } = useContext(DataContext);
  const [data, setData] = useState({ ...settings });
  console.log(data);

  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cài đặt</Text>
      <ScrollView
        style={{
          width: "100%",
          marginBottom: tabBarHeight,
        }}
      >
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Chung</Text>
          <VStack
            space={2}
            alignItems="stretch"
            px="4"
            // justifyContent="space-between"
          >
            <HStack
              space={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text style={styles.subItemTitle}>Ngôn ngữ</Text>
              <Select
                selectedValue={data.language}
                w="110"
                placeholder="Ngôn ngữ"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <AntDesign name="down" size={2} color="white" />,
                }}
                mt={1}
                onValueChange={(itemValue) =>
                  setData((prev) => ({ ...prev, language: itemValue }))
                }
                borderRadius="full"
                backgroundColor="#39A0ED"
                color="white"
                // fontSize="sm"
                style={{ height: 38 }}
              >
                <Select.Item label="Tiếng Việt" value="Tiếng việt" />
                <Select.Item label="English" value="English" />
              </Select>
            </HStack>
            <HStack
              space={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text style={styles.subItemTitle}>Định dạng thời gian</Text>
              <Select
                selectedValue={data.dateFormat}
                w="110"
                placeholder="Thời gian"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <AntDesign name="down" size={2} color="white" />,
                }}
                onValueChange={(itemValue) =>
                  setData((prev) => ({ ...prev, dateFormat: itemValue }))
                }
                borderRadius="full"
                backgroundColor="#39A0ED"
                color="white"
                style={{ height: 38 }}
              >
                <Select.Item label="dd/mm/yyyy" value="dd/mm/yyyy" />
                <Select.Item label="yyyy/mm/dd" value="yyyy/mm/dd" />
              </Select>
            </HStack>
            <HStack
              space={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text style={styles.subItemTitle}>Đơn vị tiền</Text>
              <Select
                selectedValue={data.currency}
                w="110"
                placeholder="Đơn vị"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <AntDesign name="down" size={2} color="white" />,
                }}
                onValueChange={(itemValue) =>
                  setData((prev) => ({ ...prev, currency: itemValue }))
                }
                borderRadius="full"
                backgroundColor="#39A0ED"
                color="white"
                style={{ height: 38 }}
              >
                <Select.Item label="VNĐ" value="VNĐ" />
                <Select.Item label="USD" value="USD" />
              </Select>
            </HStack>
            <HStack
              space={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text style={styles.subItemTitle}>Ẩn số tiền</Text>
              <Switch
                size="lg"
                value={data.hideMoney}
                onValueChange={(itemvalue) =>
                  setData((prev) => ({ ...prev, hideMoney: itemvalue }))
                }
              />
            </HStack>
          </VStack>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Nhắc nhở</Text>
          <VStack
            space={1}
            // alignItems="center"
            px="4"
            justifyContent="space-between"
          >
            <HStack
              space={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text style={styles.subItemTitle}>Nhắc nhở nhập liệu</Text>
              <Switch
                size="lg"
                value={data.reminder}
                onValueChange={(itemvalue) =>
                  setData((prev) => ({ ...prev, reminder: itemvalue }))
                }
              />
            </HStack>
            <HStack
              space={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text style={styles.subItemTitle}>Thời gian nhắc</Text>
              <Select
                selectedValue={data.reminder || "0"}
                w="110"
                placeholder="Thời gian"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <AntDesign name="down" size={2} color="white" />,
                }}
                onValueChange={(itemValue) =>
                  setData((prev) => ({ ...prev, reminderTime: itemValue }))
                }
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
            <HStack
              space={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text style={styles.subItemTitle}>Ngày bắt đầu của tuần</Text>
              <Select
                selectedValue={data.weekStart}
                w="110"
                placeholder="Ngày bắt đầu"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <AntDesign name="down" size={2} color="white" />,
                }}
                mt={1}
                onValueChange={(itemValue) =>
                  setData((prev) => ({ ...prev, weekStart: itemValue }))
                }
                borderRadius="full"
                backgroundColor="#39A0ED"
                color="white"
                style={{ height: 38 }}
              >
                <Select.Item label="Thứ 2" value={1} />
                <Select.Item label="Chủ Nhật" value={0} />
              </Select>
            </HStack>
            <HStack
              space={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text style={styles.subItemTitle}>Ngày bắt đầu của tháng</Text>
              <Select
                selectedValue={data.monthStart}
                w="110"
                placeholder="Ngày bắt đầu"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <AntDesign name="down" size={2} color="white" />,
                }}
                mt={1}
                onValueChange={(itemValue) =>
                  setData((prev) => ({ ...prev, monthStart: itemValue }))
                }
                borderRadius="full"
                backgroundColor="#39A0ED"
                color="white"
                style={{ height: 38 }}
              >
                <Select.Item label="Thứ 2" value={1} />
                <Select.Item label="Chủ Nhật" value={0} />
              </Select>
            </HStack>
            <HStack
              space={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text style={styles.subItemTitle}>Ngày bắt đầu của năm</Text>
              <Select
                selectedValue={data.yearStart}
                w="110"
                placeholder="Ngày bắt đầu"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <AntDesign name="down" size={2} color="white" />,
                }}
                mt={1}
                onValueChange={(itemValue) =>
                  setData((prev) => ({ ...prev, yearStart: itemValue }))
                }
                borderRadius="full"
                backgroundColor="#39A0ED"
                color="white"
                style={{ height: 38 }}
              >
                <Select.Item label="Thứ 2" value={1} />
                <Select.Item label="Chủ Nhật" value={0} />
              </Select>
            </HStack>
          </VStack>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingScreen;
