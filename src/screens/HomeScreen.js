import React, { useState } from "react";
import { View, StyleSheet } from "react-native"; // Đã bỏ Dimensions
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Import các components
import VideoFeed from "../components/VideoFeed";
import CommentsModal from "../components/CommentsModal";

const TopTab = createMaterialTopTabNavigator();

const TAB_WIDTH = 120; // Chiều rộng mỗi chữ (Following/For You)

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TopTab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "transparent",
            position: "absolute",
            top: 40,

            // --- PHẦN SỬA LỖI LỆCH TRÊN ĐIỆN THOẠI ---
            width: TAB_WIDTH * 2, // Tổng chiều rộng 2 tab là 220px
            alignSelf: "center", // Tự động căn chính giữa màn hình (chuẩn Flexbox)
            // ----------------------------------------

            elevation: 0,
            shadowOpacity: 0,
            zIndex: 10,
          },
          tabBarItemStyle: {
            width: TAB_WIDTH, // Ép mỗi tab rộng đúng 110px
          },
          tabBarIndicatorStyle: {
            backgroundColor: "white",
            height: 3,
            width: 70, // Thanh gạch dưới rộng 30px
            // Tự động căn giữa thanh gạch 30px bên trong tab 110px: (110 - 30) / 2 = 40
            left: (TAB_WIDTH - 70) / 2,
            borderRadius: 2,
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "rgba(255,255,255,0.6)",
          tabBarLabelStyle: {
            fontWeight: "bold",
            fontSize: 16,
            textTransform: "none",
          },
        }}
      >
        <TopTab.Screen name="Following">
          {() => (
            <VideoFeed
              videoSource={require("../../video/1.mp4")}
              openComments={() => setModalVisible(true)}
            />
          )}
        </TopTab.Screen>

        <TopTab.Screen name="For You">
          {() => (
            <VideoFeed
              videoSource={require("../../video/2.mp4")}
              openComments={() => setModalVisible(true)}
            />
          )}
        </TopTab.Screen>
      </TopTab.Navigator>

      <CommentsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
