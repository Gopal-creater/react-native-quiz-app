import React from "react";
import { View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import CustomTxt from "../common/CustomTxt";
import { QuizState } from "@/redux/slices/quizSlice";

const QuizProgressBar: React.FC<{ quizState: QuizState }> = ({ quizState }) => {
  const completedPercentage = Math.round(
    ((quizState.totalCorrect + quizState.totalIncorrect) /
      quizState.questions.length) *
      100
  );
  return (
    <View className="absolute h-[120px] w-[120px] bg-primary rounded-full shadow-lg items-center justify-center mt-[-60px]">
      <AnimatedCircularProgress
        size={100}
        width={10}
        fill={completedPercentage}
        tintColor="#A52EC1"
        // onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor="white"
      >
        {() => (
          <CustomTxt className="text-2xl font-jExtraBold text-secondary">
            {completedPercentage}%
          </CustomTxt>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

export default QuizProgressBar;
