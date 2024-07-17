import { QuizQuestions } from "@/constants/questions";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  correctOptionId: string;
}

export interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: { [questionId: string]: string };
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
  questions: QuizQuestions,
  currentQuestionIndex: 0,
  userAnswers: {},
  quizCompleted: false,
  totalCorrect: 0,
  totalIncorrect: 0,
  quizHistory: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion: (
      state,
      action: PayloadAction<{ questionId: string; optionId: string }>
    ) => {
      const { questionId, optionId } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);

      if (question) {
        const oldAnswer = state.userAnswers[questionId];
        state.userAnswers[questionId] = optionId;

        if (oldAnswer) {
          // If changing an answer, first remove the old answer from the totals
          if (oldAnswer === question.correctOptionId) {
            state.totalCorrect--;
          } else {
            state.totalIncorrect--;
          }
        }

        // Now add the new answer to the totals
        if (optionId === question.correctOptionId) {
          state.totalCorrect++;
        } else {
          state.totalIncorrect++;
        }
      }
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    completeQuiz: (state) => {
      state.quizCompleted = true;
      state.quizHistory.push({
        score: state.totalCorrect,
        totalQuestions: state.questions.length,
        win: state.totalCorrect >= 16 ? true : false,
        quizName: "G1 Signs Quiz",
      });
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.userAnswers = {};
      state.quizCompleted = false;
      state.totalCorrect = 0;
      state.totalIncorrect = 0;
    },
  },
});

export const {
  answerQuestion,
  nextQuestion,
  previousQuestion,
  completeQuiz,
  resetQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
