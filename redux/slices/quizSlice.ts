import { QuizQuestions } from "@/constants/questions";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  correctOptionId: string;
}

export interface QuizState {
  currentQuestion: Question;
  currentUserAnswer: { [questionId: string]: string };
  quizCompleted: boolean;
  totalCorrect: number;
  totalIncorrect: number;
  quizHistory: QuizHistory[];
}

export interface QuizHistory {
  score: number;
  totalQuestions: number;
  win: boolean;
  quizName: string;
}

const initialState: QuizState = {
  currentQuestion: QuizQuestions[0],
  currentUserAnswer: {},
  quizCompleted: false,
  totalCorrect: 0,
  totalIncorrect: 0,
  quizHistory: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion: (state, action: PayloadAction<{ optionId: string }>) => {
      const { optionId } = action.payload;
      const currentQuestionId = state.currentQuestion.id;

      // increment or decrement totalCorrect
      if (optionId === state.currentQuestion.correctOptionId) {
        state.totalCorrect++;
        state.currentUserAnswer[currentQuestionId] = optionId;
      } else {
        state.totalIncorrect++;
        state.currentUserAnswer[currentQuestionId] = optionId;
      }
    },
    nextQuestion: (state) => {
      state.currentQuestion = QuizQuestions[state.currentQuestion.id++];
    },
    completeQuiz: (state) => {
      state.quizCompleted = true;
      state.quizHistory.push({
        score: state.totalCorrect,
        totalQuestions: QuizQuestions.length,
        win: state.totalCorrect >= 16 ? true : false,
        quizName: "G1 Signs Quiz",
      });
    },
    resetQuiz: (state) => {
      state.currentQuestion = QuizQuestions[0];
      state.currentUserAnswer = {};
      state.quizCompleted = false;
      state.totalCorrect = 0;
      state.totalIncorrect = 0;
    },
  },
});

export const { answerQuestion, nextQuestion, completeQuiz, resetQuiz } =
  quizSlice.actions;
export default quizSlice.reducer;
