import React from "react";
import { View } from "react-native";
import CustomTxt from "../common/CustomTxt";
import { QuizState } from "@/redux/slices/quizSlice";

const QuizQuestion: React.FC<{ quizState: QuizState }> = ({ quizState }) => {
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  return (
    <View>
      <CustomTxt className="mt-12 text-secondary text-center">
        {`Question ${quizState.currentQuestionIndex + 1}/${
          quizState.questions.length
        }`}
      </CustomTxt>
      <CustomTxt className="text-center mt-4">{currentQuestion.text}</CustomTxt>
    </View>
  );
};

export default QuizQuestion;
