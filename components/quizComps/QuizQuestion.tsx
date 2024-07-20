import React from "react";
import { View } from "react-native";
import CustomTxt from "../common/CustomTxt";
import { QuizState } from "@/redux/slices/quizSlice";
import { QuizQuestions } from "@/constants/questions";

const QuizQuestion: React.FC<{ quizState: QuizState }> = ({ quizState }) => {
  return (
    <View>
      <CustomTxt className="mt-12 text-secondary text-center">
        {`Question ${quizState.currentQuestion.id}/${QuizQuestions.length}`}
      </CustomTxt>
      <CustomTxt className="text-center mt-4">
        {quizState.currentQuestion.text}
      </CustomTxt>
    </View>
  );
};

export default QuizQuestion;
