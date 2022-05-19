import { View, Text, Input, VStack, HStack, FlatList } from "native-base";
import styles from "../../../styles/more_screen/moreScreenStyle";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native";

export default function MoreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Xin chào Nguyễn Văn A</Text>
      <Input
        w={{
          base: "85%",
        }}
        InputRightElement={
          <TouchableHighlight style={{ marginRight: 8 }}>
            <AntDesign name="search1" size={24} color="#198155" />
          </TouchableHighlight>
        }
        placeholder="Tìm kiếm"
        style={styles.search}
        variant="rounded"
        borderColor="#198155"
        mb="28"
      />
      <View style={styles.featureContainer}>
        <Text style={styles.containerTitle}>Tính năng</Text>
        <VStack space={6} alignItems="center" mt="4">
          <HStack space={4} justifyContent="space-between">
            <View style={styles.featureItem}>
              <FontAwesome name="money" size={40} color="#198155" />
              <Text style={styles.featureTitle}>Hạn mức chi</Text>
            </View>
            <View style={styles.featureItem}>
              <MaterialIcons name="category" size={40} color="#198155" />
              <Text style={styles.featureTitle}>Thêm hạng mục</Text>
            </View>
            <View style={styles.featureItem}>
              <FontAwesome name="bar-chart" size={40} color="#198155" />
              <Text style={styles.featureTitle}>Thống kê</Text>
            </View>
          </HStack>
          <HStack space={4} justifyContent="space-between">
            <View style={styles.featureItem}>
              <Ionicons name="settings-outline" size={40} color="#198155" />
              <Text style={styles.featureTitle}>Cài đặt chung</Text>
            </View>
            <View style={styles.featureItem}>
              <FontAwesome name="user" size={40} color="#198155" />
              <Text style={styles.featureTitle}>Tài khoản</Text>
            </View>
          </HStack>
        </VStack>
      </View>
      <View style={styles.moreContainer}>
        <Text style={styles.containerTitle}>Thêm</Text>
        <FlatList
          data={[
            "Dữ liệu",
            "Đánh giá",
            "Đóng góp ý kiến",
            "Giới thiệu Cho bạn bè",
            "Trợ giúp",
          ]}
          renderItem={({ item }) => (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => alert("Pressed!")}
              style={styles.moreItemContainer}
            >
              <Text style={styles.moreItem}>{item}</Text>
            </TouchableHighlight>
          )}
          keyExtractor={(item, index) => item + index}
          px="6"
        />
      </View>
    </View>
  );
}
