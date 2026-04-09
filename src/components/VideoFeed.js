import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av"; // Import thư viện Video

// Đổi prop bgImage thành videoSource
export default function VideoFeed({ videoSource, openComments }) {
  return (
    <View style={styles.feedContainer}>
      {/* THAY THẾ IMAGE BẰNG VIDEO */}
      <Video
        style={styles.videoBackground}
        source={videoSource}
        shouldPlay={true} // Tự động phát
        isLooping={true} // Lặp lại liên tục
        resizeMode={ResizeMode.COVER} // Phủ kín màn hình
        isMuted={false} // Chỉnh thành true nếu muốn tắt tiếng mặc định
      />

      <View style={styles.bottomInfo}>
        <Text style={styles.username}>@karennne</Text>
        <Text style={styles.description}>
          The most satisfying Job #fyp #satisfying
        </Text>
        <Text style={styles.song}>🎵 Son Tung MTP - Lac Troi(ft...</Text>
      </View>

      <View style={styles.rightActions}>
        <View style={styles.actionItem}>
          <Image
            source={{ uri: "https://i.pravatar.cc/10" }}
            style={styles.profileAvatar}
          />
          <View style={styles.followButton}>
            <Text style={styles.followButtonText}>+</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.actionItem}>
          <AntDesign name="heart" size={35} color="white" />
          <Text style={styles.actionText}>328.7K</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionItem} onPress={openComments}>
          <FontAwesome name="commenting" size={35} color="white" />
          <Text style={styles.actionText}>578</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionItem}>
          <FontAwesome name="share" size={35} color="white" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>

        <View style={styles.discContainer}>
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={styles.discImage}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  feedContainer: { flex: 1, backgroundColor: "black" },
  videoBackground: { width: "100%", height: "100%", position: "absolute" }, // Giữ nguyên style này
  bottomInfo: { position: "absolute", bottom: 20, left: 15, width: "70%" },
  username: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  description: { color: "white", fontSize: 14, marginBottom: 5 },
  song: { color: "white", fontSize: 14 },
  rightActions: {
    position: "absolute",
    right: 10,
    bottom: 20,
    alignItems: "center",
  },
  actionItem: { alignItems: "center", marginBottom: 25 },
  actionText: { color: "white", fontSize: 12, marginTop: 5 },
  profileAvatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "white",
  },
  followButton: {
    position: "absolute",
    bottom: -10,
    backgroundColor: "#EE1D52",
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  followButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18,
  },
  discContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  discImage: { width: 30, height: 30, borderRadius: 15 },
});
