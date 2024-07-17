import React from "react";
import { View } from "react-native";
import CustomBtn from "../common/CustomBtn";
import {
  completeQuiz,
  nextQuestion,
  previousQuestion,
  QuizState,
  resetQuiz,
} from "@/redux/slices/quizSlice";
import { useDispatch } from "react-redux";
import { router } from "expo-router";

const QuizNavigationBtns: React.FC<{ quizState: QuizState }> = ({
  quizState,
}) => {
  const dispatch = useDispatch();

  const handleNext = () => {
    if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
      dispatch(nextQuestion());
    } else {
      dispatch(completeQuiz());
      dispatch(resetQuiz());

      router.push("/home");
    }
  };

  const handlePrevious = () => {
    dispatch(previousQuestion());
  };
  return (
    <View className="flex-row justify-between">
      <CustomBtn
        handlePress={() => handlePrevious()}
        disabled={quizState.currentQuestionIndex === 0}
        containerStyles="w-40"
      >
        Previous
      </CustomBtn>
      <CustomBtn
        handlePress={() => handleNext()}
        disabled={quizState.quizCompleted}
        containerStyles="w-40"
      >
        {quizState.currentQuestionIndex === quizState.questions.length - 1
          ? "Finish"
          : "Next"}
      </CustomBtn>
    </View>
  );
};

export default QuizNavigationBtns;
