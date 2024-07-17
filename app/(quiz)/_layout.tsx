import React from "react";
import { Stack } from "expo-router";

const QuizLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="quiz" options={{ headerShown: false }} />
    </Stack>
  );
};

export default QuizLayout;
