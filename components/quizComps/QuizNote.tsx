import { QuizState } from "@/redux/slices/quizSlice";
import React from "react";
import { View } from "react-native";
import CustomTxt from "../common/CustomTxt";

const QuizNote: React.FC<{ quizState: QuizState }> = ({ quizState }) => {
  const isAnswerSelected = () => {
    if (quizState.currentUserAnswer[quizState.currentQuestion.id]) return true;
    return false;
  };

  return isAnswerSelected() ? (
    <View className="mb-8">
      <CustomTxt>Note</CustomTxt>
    </View>
  ) : null;
};

export default QuizNote;
