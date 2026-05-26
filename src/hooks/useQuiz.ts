import { SubscriptionPlan } from "@/types/subscriptionPlan";
import { UserData } from "@/types/userData";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  answers: Record<string, string[]>;
  error: string | null;
  userData: UserData;
  step: number;
  direction: number;
  plan: SubscriptionPlan | null;
}

interface Quiz extends State {
  setUserData: (data: UserData) => void;
  setError: (message: string | null) => void;
  setPlan: (plan: SubscriptionPlan | null) => void;
  setDirection: (direction: number) => void;
  setStep: (step: number) => void;
  setAnswer: (id: string, answer: string[]) => void;
}

const initialState: State = {
  userData: {
    fullName: "",
    phone: "",
    email: "",
    address: "",
  },
  answers: {},
  error: null,
  plan: null,
  step: 0,
  direction: 1,
};

export const useQuiz = create<Quiz>()(
  persist(
    (set) => ({
      ...initialState,
      setUserData: (userData) => {
        set({ userData });
      },
      setPlan: (plan) => {
        set({ plan });
      },
      setDirection: (direction) => {
        set({ direction });
      },
      setStep: (step) => {
        set({ step });
      },
      setError: (message) => {
        set({ error: message });
      },
      setAnswer: (id, answer) => {
        set((state) => ({
          answers: {
            ...state.answers,
            [id]: answer,
          },
        }));
      },
    }),
    {
      name: "quiz-data",
      partialize: (state) => ({
        answers: state.answers,
        userData: state.userData,
        plan: state.plan,
        step: state.step,
      }),
    },
  ),
);

export const useAnswers = (id: string) => useQuiz((state) => state.answers[id]);
