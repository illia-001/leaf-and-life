import amplitude from "@/amplitude/amplitude";
import { AnimationDirection } from "@/constants/animationDirection";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  answers: Record<string, string[]>;
  error: string | null;
  step: number;
  animationDirection: AnimationDirection;
}

interface Quiz extends State {
  setError: (message: string | null) => void;
  setAnimationDirection: (direction: AnimationDirection) => void;
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

export const useQuizStore = create<Quiz>()(
  persist(
    (set) => ({
      ...initialState,

      setAnimationDirection: (direction) =>
        set({ animationDirection: direction }),
      setStep: (step) => {
        if (step === 0) amplitude.track("quiz_started");
        set({ step, error: null });
      },
      setError: (message) => set({ error: message }),
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

export const useAnswers = (id: string) =>
  useQuizStore((state) => state.answers[id]);
