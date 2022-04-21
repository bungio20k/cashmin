import { View, Text } from "react-native";
import ModalSelector from "react-native-modal-selector";
import React, { useState } from "react";
import { Center, Modal, Input, Button } from "native-base";
import styles from "../../styles/category/ModalStyle";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

let index = 0;
const icons = [
  {
    key: index++,
    label: "",
    value: "fast-food",
    component: <Ionicons name="fast-food" size={24} color="#198155" />,
  },
  {
    key: index++,
    label: "",
    value: "cafe",
    component: <Ionicons name="cafe" size={24} color="#198155" />,
  },
  {
    key: index++,
    label: "",
    value: "book",
    component: <Ionicons name="book" size={24} color="#198155" />,
  },
  {
    key: index++,
    label: "",
    value: "car",
    component: <Ionicons name="car" size={24} color="#198155" />,
  },
  {
    key: index++,
    label: "",
    value: "home",
    component: <Ionicons name="home" size={24} color="#198155" />,
  },
  {
    key: index++,
    label: "",
    value: "basket",
    component: <Ionicons name="basket" size={24} color="#198155" />,
  },
  {
    key: index++,
    label: "",
    value: "shirt",
    component: <Ionicons name="shirt" size={24} color="#198155" />,
  },
  {
    key: index++,
    label: "",
    value: "cart",
    component: <Ionicons name="cart" size={24} color="#198155" />,
  },
  {
    key: index++,
    label: "",
    value: "pricetags",
    component: <Ionicons name="pricetags" size={24} color="#198155" />,
  },
  {
    key: index++,
    label: "",
    value: "ios-planet-sharp",
    component: <Ionicons name="ios-planet-sharp" size={24} color="#198155" />,
  },
];

const Modals = ({
  isEdit,
  showAddModal,
  setShowAddModal,
  showDeleteModal,
  setShowDeleteModal,
  category,
  setCategory,
}) => {
  const [iconName, setIconName] = useState("fast-food");
  return (
    <Center>
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)}>
        <Modal.Content
          w="90%"
          style={{ backgroundColor: " rgba(236, 252, 229, 1)", padding: 20 }}
        >
          <Modal.Body>
            <Text style={styles.title}>
              {isEdit ? "Sửa hạng mục" : "Thêm hạng mục mới"}
            </Text>
            <Text style={styles.label}>Tên hạng mục</Text>
            <Input
              fontSize="xl"
              mt="1"
              mb="4"
              variant="rounded"
              InputLeftElement={
                <Entypo
                  name="menu"
                  size={24}
                  color="#198155"
                  style={{ marginLeft: 8 }}
                />
              }
              placeholder="Ăn sáng"
              value={category.name}
              onChange={(text) =>
                setCategory((prev) => ({ ...prev, name: text }))
              }
            />
            <View style={styles.iconSelection}>
              <Text style={styles.iconText}>Icon</Text>
              <ModalSelector
                data={icons}
                scrollViewAccessibilityLabel={"Scrollable options"}
                cancelButtonAccessibilityLabel={"Cancel Button"}
                onChange={(option) => {
                  setIconName(option.value);
                }}
                style={{
                  borderRadius: 24,
                  backgroundColor: "#4FB286",
                  paddingHorizontal: 12,
                }}
                optionContainerStyle={{
                  backgroundColor: "#ECFCE5",
                  marginHorizontal: 60,
                }}
                cancelContainerStyle={{ marginHorizontal: 60 }}
                cancelStyle={{
                  backgroundColor: "#FF9800",
                }}
                cancelTextStyle={{ color: "#ECFCE5" }}
                optionStyle={{ flexDirection: "row", justifyContent: "center" }}
              >
                <View style={styles.selection}>
                  <Ionicons
                    name={isEdit ? category.icon : iconName}
                    size={28}
                    color="#ECFCE5"
                    style={{ marginRight: 16 }}
                  />
                  <Ionicons name="chevron-down" size={22} color="#ECFCE5" />
                </View>
              </ModalSelector>
            </View>
            <View style={styles.actions}>
              <Button
                py="3"
                px="8"
                style={{
                  backgroundColor: "#D3180C",
                }}
                onPress={() => {
                  setShowAddModal(false);
                }}
              >
                Hủy bỏ
              </Button>
              <Button
                py="3"
                px="8"
                style={{
                  backgroundColor: "#4FB286",
                }}
                onPress={() => setShowAddModal(false)}
              >
                Xác nhận
              </Button>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <Modal.Content
          w="90%"
          style={{ backgroundColor: " rgba(236, 252, 229, 1)", padding: 20 }}
        >
          <Modal.Body>
            <Text style={styles.title}>Xóa hạng mục</Text>

            <Text style={styles.confirmText}>
              Bạn có chắc chắn muốn xóa hạng mục này không?
            </Text>
            <View style={styles.actions}>
              <Button
                py="3"
                px="8"
                style={{
                  backgroundColor: "#D3180C",
                }}
                onPress={() => setShowDeleteModal(false)}
              >
                Hủy bỏ
              </Button>
              <Button
                py="3"
                px="8"
                style={{
                  backgroundColor: "#4FB286",
                }}
                onPress={() => setShowDeleteModal(false)}
              >
                Xác nhận
              </Button>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default Modals;
