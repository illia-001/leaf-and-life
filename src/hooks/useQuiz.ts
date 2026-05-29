import { AnimationDirection } from "@/constants/animationDirection";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  answers: Record<string, string[]>;
  error: string | null;
  step: number;
  animationDirection: number;
}

interface Quiz extends State {
  setError: (message: string | null) => void;
  setAnimationDirection: (direction: number) => void;
  setStep: (step: number) => void;
  setQuizAnswers: (id: string, answer: string[]) => void;
  resetQuizState: () => void;
}

const initialState: State = {
  answers: {},
  error: null,
  step: 0,
  animationDirection: AnimationDirection.FORWARD,
};

export const useQuiz = create<Quiz>()(
  persist(
    (set) => ({
      ...initialState,

      setAnimationDirection: (direction) => {
        set({ animationDirection: direction });
      },
      setStep: (step) => {
        set({ step });
      },
      setError: (message) => {
        set({ error: message });
      },
      setQuizAnswers: (id, answer) => {
        set((state) => ({
          answers: {
            ...state.answers,
            [id]: answer,
          },
        }));
      },
      resetQuizState: () => {
        set(initialState);
      },
    }),
    {
      name: "quiz-data",
      partialize: (state) => ({
        answers: state.answers,
        step: state.step,
      }),
    },
  ),
);

export const useAnswers = (id: string) => useQuiz((state) => state.answers[id]);
