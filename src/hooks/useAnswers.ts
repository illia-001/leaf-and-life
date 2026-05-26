import { UserData } from "@/types/userData";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Answers {
  items: {
    id: string;
    answer: string[];
  }[];
  error: string | null;
  userData: UserData;
  currentStep: number;
  direction: number;
  currentPlan: {
    name: string;
    price: string;
    period: string;
    condition: string;
  } | null;
  setUserData: (data: UserData) => void;
  setError: (message: string | null) => void;
  setPlan: (
    plan: {
      name: string;
      price: string;
      period: string;
      condition: string;
    } | null,
  ) => void;
  setDirection: (direction: number) => void;
  setCurrentStep: (step: number) => void;
  setAnswer: (id: string, answer: string[]) => void;
  getAnswer: (id: string) => string[] | undefined;
  clearState: () => void;
}

export const useAnswers = create<Answers>()(
  persist(
    (set, get) => ({
      userData: {
        fullName: "",
        phone: "",
        email: "",
        address: "",
        cardCvv: "",
        cardDate: "",
        cardNumber: "",
      },
      items: [],
      error: null,
      currentPlan: null,
      currentStep: 0,
      direction: 1,
      setUserData: (userData) => {
        set(() => {
          return { userData };
        });
      },
      setPlan: (plan) => {
        set(() => {
          return { currentPlan: plan };
        });
      },
      setDirection: (direction) => {
        set(() => {
          return { direction };
        });
      },
      setCurrentStep: (step) => {
        set(() => {
          return { currentStep: step };
        });
      },
      setError: (message) => {
        set(() => {
          return { error: message };
        });
      },
      setAnswer: (id, answer) => {
        set((state) => {
          const exist = state.items.some((item) => item.id === id);

          if (exist) {
            return {
              items: state.items.map((item) =>
                item.id === id ? { ...item, answer } : item,
              ),
            };
          }

          return {
            items: [...state.items, { id, answer }],
          };
        });
      },
      getAnswer: (id) => {
        const item = get().items.find((item) => item.id === id);
        return item?.answer;
      },
      clearState: () => {
        set(() => {
          return { items: [], currentStep: 0 };
        });
      },
    }),
    { name: "data" },
  ),
);
