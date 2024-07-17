import { TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const G1Layout = () => {
  return (
    <Stack
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-secondary p-1 rounded-full -ml-2"
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: "#FEFEFF",
        },
        headerShadowVisible: false,
      })}
    >
      <Stack.Screen name="g1" options={{ headerShown: true }} />
    </Stack>
  );
};

export default G1Layout;
