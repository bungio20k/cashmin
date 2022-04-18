import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "../styles/category/MainStyle";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "native-base";
import CategoryItem from "../components/category/CategoryItem";
import Modals from "../components/category/Modals";

const CategoryScreen = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [category, setCategory] = useState({ name: "", icon: "fast-food" });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Thêm hạng mục</Text>
        <View style={styles.addIcon}>
          <Ionicons
            name="add-circle"
            size={48}
            color="#198155"
            onPress={() => {
              setCategory({ name: "", icon: "fast-food" });
              setIsEdit(false);
              setShowAddModal(true);
            }}
          />
        </View>
      </View>
      <FlatList
        data={[
          { icon: "fast-food", name: "Ăn sáng" },
          { icon: "fast-food", name: "Ăn trưa" },
          { icon: "fast-food", name: "Ăn tối" },
          { icon: "cafe", name: "Cà phê" },
          { icon: "book", name: "Học phí" },
          { icon: "car", name: "Xăng" },
          { icon: "car", name: "Sửa xe" },
          { icon: "car", name: "Rửa xe" },
          { icon: "home", name: "Tiền thuê trọ" },
          { icon: "home", name: "Đồ dùng sinh hoạt" },
          { icon: "home", name: "Bảo trì phòng" },
          { icon: "basket", name: "Đi chợ" },
          { icon: "shirt", name: "Shopping" },
        ]}
        renderItem={({ item }) => (
          <CategoryItem
            item={item}
            setIsEdit={setIsEdit}
            setShowAddModal={setShowAddModal}
            setShowDeleteModal={setShowDeleteModal}
            setCategory={setCategory}
          />
        )}
        keyExtractor={(item, index) => index}
      />
      <Modals
        isEdit={isEdit}
        showAddModal={showAddModal}
        showDeleteModal={showDeleteModal}
        setIsEdit={setIsEdit}
        setShowAddModal={setShowAddModal}
        setShowDeleteModal={setShowDeleteModal}
        category={category}
        setCategory={setCategory}
      />
    </View>
  );
};

export default CategoryScreen;
