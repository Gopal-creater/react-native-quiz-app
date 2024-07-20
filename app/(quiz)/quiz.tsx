import { ScrollView, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { QuizState } from "@/redux/slices/quizSlice";
import { QuizHeader } from "@/components/quizComps/QuizHeader";
import QuizProgressBar from "@/components/quizComps/QuizProgressBar";
import { QuizQuestionStats } from "@/components/quizComps/QuizQuestionStats";
import QuizQuestion from "@/components/quizComps/QuizQuestion";
import { QuizAnswerOptions } from "@/components/quizComps/QuizAnswerOptions";
import QuizNavigationBtns from "@/components/quizComps/QuizNavigationBtns";
import QuizNote from "@/components/quizComps/QuizNote";

const Quiz = () => {
  const state: QuizState = useSelector((state: RootState) => state.quiz);

  return (
    <SafeAreaView className="flex-1 bg-primary p-2 gap-6">
      <ScrollView className="relative">
        <QuizHeader />
        <View className="relative mt-[150px] ml-8 mr-8 bg-primary rounded-3xl shadow-lg  items-center p-6">
          <QuizProgressBar quizState={state} />
          <QuizQuestionStats quizState={state} />
          <QuizQuestion quizState={state} />
        </View>
        <QuizAnswerOptions quizState={state} />
        <QuizNote quizState={state} />
        <QuizNavigationBtns quizState={state} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Quiz;
