import { View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import CustomTxt from "@/components/common/CustomTxt";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";

const DashboardLayout = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary p-2">
      {/* Header----------- */}
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Ionicons name="sunny" size={24} color="#B15AF6" />
          <CustomTxt className="ml-2">Good Morning</CustomTxt>
        </View>

        <FontAwesome6 name="bars-staggered" size={24} color="#B15AF6" />
      </View>
      {/* Header----------- */}

      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default DashboardLayout;
