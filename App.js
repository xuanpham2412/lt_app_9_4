import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";

// Import Screens
import HomeScreen from "./src/screens/HomeScreen";
import DiscoverScreen from "./src/screens/DiscoverScreen";
import InboxScreen from "./src/screens/InboxScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const BottomTab = createBottomTabNavigator();

// Nút Post (+) ở giữa
const DummyPostScreen = () => (
  <View style={{ flex: 1, backgroundColor: "black" }} />
);

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0,
            paddingBottom: 5,
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="search" size={24} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Post"
          component={DummyPostScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: () => (
              <View style={styles.addIconContainer}>
                <View
                  style={[
                    styles.addIconSide,
                    { backgroundColor: "#69C9D0", left: -4 },
                  ]}
                />
                <View
                  style={[
                    styles.addIconSide,
                    { backgroundColor: "#EE1D52", right: -4 },
                  ]}
                />
                <View style={styles.addIconCenter}>
                  <AntDesign name="plus" size={20} color="black" />
                </View>
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="Inbox"
          component={InboxScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Me"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-outline" size={24} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  addIconContainer: {
    width: 45,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  addIconSide: { position: "absolute", width: 38, height: 30, borderRadius: 8 },
  addIconCenter: {
    width: 38,
    height: 30,
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
