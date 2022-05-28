import { View, Text, Switch } from "react-native";
import React from "react";
import styles from "../../styles/limit/LimitItemStyle";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import DataContext from "../../hooks/data/DataContext";
import AuthContext from "../../hooks/login-signup/AuthContext";
import { useContext } from "react";
import { Box, useToast } from "native-base";
import axios from "axios";

const LimitItem = ({ title, item, setShowModal, setLimit }) => {
  const { token } = useContext(AuthContext);
  const { setLimits } = useContext(DataContext);
  const toast = useToast();
  // const progress = (item.money / item.total) * 100;
  // if (progress > 100) {
  //   progress = 100;
  // }
  const progress = 0;
  const handleChangeStatus = async (value) => {
    const typ =
      (title === "Trong ngày" && "daily") ||
      (title === "Trong tuần" && "weekly") ||
      (title === "Trong tháng" && "monthly");
    const data = {
      [typ]: {
        isActive: value,
        limit: item.limit,
      },
    };
    try {
      const res = await axios.put("/limits", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLimits((prev) => ({ ...prev, ...data }));
    } catch (error) {
      ôcn;
      toast.show({
        render: () => {
          return (
            <Box
              bg="red.700"
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
    <View
      style={{
        backgroundColor: progress === 100 ? "#FFE5E5" : "#ECFCE5",
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginVertical: 8,
        borderRadius: 20,
        width: "90%",
        marginHorizontal: "5%",
      }}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.actions}>
          <Switch
            thumbColor={(item.isActive && "#39A0ED") || "#D3D3D3"}
            value={item.isActive}
            marginRight={16}
            onValueChange={handleChangeStatus}
          />
          <Entypo
            name="pencil"
            size={28}
            // color="#198155"
            color="#39A0ED"
            // style={{ marginRight: 16 }}
            onPress={() => {
              setLimit({ ...item, type: title }), setShowModal(true);
            }}
          />
          {/* <FontAwesome
            name="history"
            size={28}
            // color="#198155"
            color="#39A0ED"
          /> */}
        </View>
      </View>
      <Text
        style={{
          textAlign: "center",
          color: "#198155",
          fontSize: 16,
          marginTop: 12,
          marginBottom: 8,
          color: progress === 100 ? "#D3180C" : "#198155",
        }}
      >
        {item.limit ? `get money / ${item.limit}` : "Chưa đặt hạn mức"}
      </Text>
      <View
        style={{
          width: "100%",
          height: 26,
          borderRadius: 26,
          backgroundColor: "#c4c4c4",
        }}
      >
        <View
          style={{
            width: progress.toString() + "%",
            height: 26,
            borderRadius: 26,
            backgroundColor: progress === 100 ? "#D3180C" : "#3C896D",
          }}
        ></View>
      </View>
      <View style={styles.desc}>
        <View style={styles.descItem}>
          <Text style={styles.descTitle}>Trạng thái</Text>
          <Text
            style={[
              styles.time,
              { color: (item.isActive && "green") || "red" },
            ]}
          >
            {item.isActive ? "Đã áp dụng" : "Không áp dụng"}
          </Text>
        </View>
        <View style={styles.descItem}>
          <Text style={styles.descTitle}>Hôm nay</Text>
          <Text style={styles.day}>
            {new Date().getDate()}/{new Date().getMonth() + 1}/
            {new Date().getFullYear()}
          </Text>
        </View>

        <View style={styles.descItem}>
          <Text style={styles.descTitle}>Đã tiêu</Text>
          <Text
            style={[
              styles.money,
              { color: progress === 100 ? "red" : "green" },
            ]}
          >
            "Get Money()"
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LimitItem;
