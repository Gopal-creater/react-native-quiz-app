import React from "react";
import { View } from "react-native";
import CustomTxt from "../common/CustomTxt";
import { QuizState } from "@/redux/slices/quizSlice";

export const QuizQuestionStats: React.FC<{ quizState: QuizState }> = ({
  quizState,
}) => {
  return (
    <View className="w-full flex-row justify-between">
      {/* Adjusted margin to avoid overlap */}
      <View className="flex-row items-center gap-3">
        <CustomTxt className="font-jBold text-green-700">
          {quizState.totalCorrect}
        </CustomTxt>
        <View className="h-3 w-[50px] bg-green-700 rounded-xl"></View>
      </View>
      <View className="flex-row items-center gap-3">
        <View className="h-3 w-[50px] bg-red-500 rounded-xl"></View>
        <CustomTxt className="font-jBold text-red-500">
          {quizState.totalIncorrect}
        </CustomTxt>
      </View>
    </View>
  );
};
