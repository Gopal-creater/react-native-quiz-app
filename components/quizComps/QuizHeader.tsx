import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import CustomTxt from "../common/CustomTxt";

export const QuizHeader = () => {
  const navigation = useNavigation();

  return (
    <View className="absolute bg-secondary rounded-[60px] p-8 h-[250px] w-full">
      <View className="flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <CustomTxt className="text-2xl font-jBold text-primary ml-auto underline">
          Quiz
        </CustomTxt>
      </View>
    </View>
  );
};
