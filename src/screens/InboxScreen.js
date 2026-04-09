import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function InboxScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Màn hình Hộp thư (Inbox)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "white", fontSize: 20 },
});
