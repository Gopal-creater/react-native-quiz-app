import React from "react";
import { TouchableOpacity, View } from "react-native";
import CustomTxt from "../common/CustomTxt";
import { useDispatch } from "react-redux";
import { answerQuestion, QuizState } from "@/redux/slices/quizSlice";
import { Ionicons } from "@expo/vector-icons";

export const QuizAnswerOptions: React.FC<{ quizState: QuizState }> = ({
  quizState,
}) => {
  const dispatch = useDispatch();

  const handleAnswer = (optionId: string) => {
    dispatch(answerQuestion({ optionId }));
  };

  const renderIcon = (optionId: string) => {
    const isSelected =
      quizState.currentUserAnswer[quizState.currentQuestion.id] === optionId;
    const isCorrect = optionId === quizState.currentQuestion.correctOptionId;

    if (isSelected && isCorrect) {
      return <Ionicons name="checkmark-circle" size={24} color="purple" />;
    } else if (isSelected && !isCorrect) {
      return <Ionicons name="close-circle" size={24} color="red" />;
    }
    return <Ionicons name="ellipse-outline" size={24} color="gray" />;
  };

  return (
    <View className="p-8 gap-3">
      {quizState.currentQuestion.options.map((option: any) => (
        <TouchableOpacity
          key={option.id}
          className="flex-row items-center justify-between p-2  bg-white border-2 border-secondary rounded-3xl"
          onPress={() => handleAnswer(option.id)}
          disabled={
            quizState.currentUserAnswer[quizState.currentQuestion.id]
              ? true
              : false
          }
        >
          <CustomTxt className="font-jBold text-secondary">
            {option.text}
          </CustomTxt>
          {renderIcon(option.id)}
        </TouchableOpacity>
      ))}
    </View>
  );
};
