import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

const COMMENTS_DATA = [
  {
    id: "1",
    user: "Thang Dat Nguyen",
    text: "Video Hay Dễ Thương Quá Đi Mà",
    time: "2h",
    likes: "888",
  },
  {
    id: "2",
    user: "Lon Map",
    text: "Đừng có làm vậy nữa, nhìn mà sợ",
    time: "22h",
    likes: "98",
  },
  {
    id: "3",
    user: "Oi doi oi",
    text: "Hay qua di",
    time: "22h",
    likes: "11",
  },
  {
    id: "4",
    user: "kiero_d",
    text: "Use that on r air forces to whiten them",
    time: "21h",
    likes: "88",
  },
];

export default function CommentsModal({ visible, onClose }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.bottomSheet}>
          <View style={styles.commentHeader}>
            <Text style={{ flex: 1, textAlign: "center", fontWeight: "bold" }}>
              578 comments
            </Text>
            <TouchableOpacity onPress={onClose}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={COMMENTS_DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.commentItem}>
                <Image
                  source={{ uri: "https://i.pravatar.cc/150?u=" + item.id }}
                  style={styles.commentAvatar}
                />
                <View style={styles.commentContent}>
                  <Text style={styles.commentUser}>{item.user}</Text>
                  <Text style={styles.commentText}>
                    {item.text}{" "}
                    <Text style={{ color: "gray", fontSize: 12 }}>
                      {item.time}
                    </Text>
                  </Text>
                  <Text style={styles.viewReplies}>View replies</Text>
                </View>
                <View style={styles.commentLike}>
                  <AntDesign name="hearto" size={16} color="gray" />
                  <Text style={{ color: "gray", fontSize: 12 }}>
                    {item.likes}
                  </Text>
                </View>
              </View>
            )}
          />
          <View style={styles.commentInputContainer}>
            <TextInput
              placeholder="Add comment..."
              style={styles.commentInput}
            />
            <FontAwesome
              name="at"
              size={24}
              color="black"
              style={{ marginHorizontal: 10 }}
            />
            <FontAwesome name="smile-o" size={24} color="black" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  bottomSheet: {
    backgroundColor: "white",
    height: height * 0.65,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 15,
  },
  commentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  commentItem: { flexDirection: "row", marginBottom: 20 },
  commentAvatar: { width: 35, height: 35, borderRadius: 17.5, marginRight: 10 },
  commentContent: { flex: 1 },
  commentUser: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 13,
    marginBottom: 3,
  },
  commentText: { fontSize: 14, color: "black" },
  viewReplies: { color: "gray", fontSize: 13, marginTop: 5, fontWeight: "600" },
  commentLike: { alignItems: "center", marginLeft: 10 },
  commentInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingTop: 10,
    paddingBottom: 20,
  },
  commentInput: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
  },
});
