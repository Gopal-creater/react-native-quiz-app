import React from "react";
import { View } from "react-native";
import CustomBtn from "../common/CustomBtn";
import {
  completeQuiz,
  nextQuestion,
  QuizState,
  resetQuiz,
} from "@/redux/slices/quizSlice";
import { useDispatch } from "react-redux";
import { router } from "expo-router";
import { QuizQuestions } from "@/constants/questions";

const QuizNavigationBtns: React.FC<{ quizState: QuizState }> = ({
  quizState,
}) => {
  const dispatch = useDispatch();

  const isLastQuestion = () => {
    if (quizState.currentQuestion.id === QuizQuestions.length) return true;
    return false;
  };

  const isAnswerSelected = () => {
    if (quizState.currentUserAnswer[quizState.currentQuestion.id]) return true;
    return false;
  };

  const handleNext = () => {
    if (!isLastQuestion()) {
      dispatch(nextQuestion());
    } else {
      dispatch(completeQuiz());
      dispatch(resetQuiz());

      router.push("/home");
    }
  };

  return isAnswerSelected() ? (
    <View className="flex-row justify-between">
      <CustomBtn
        handlePress={() => handleNext()}
        disabled={quizState.quizCompleted}
        containerStyles="w-full"
      >
        {isLastQuestion() ? "Finish" : "Continue"}
      </CustomBtn>
    </View>
  ) : null;
};

export default QuizNavigationBtns;
