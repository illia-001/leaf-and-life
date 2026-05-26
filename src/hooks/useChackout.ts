import { SubscriptionPlan } from "@/types/subscriptionPlan";
import { UserData } from "@/types/userData";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  plan: SubscriptionPlan | null;
  userData: UserData;
}

interface Checkout extends State {
  setUserData: (userData: UserData) => void;
  setPlan: (plan: SubscriptionPlan | null) => void;
  resetCheckoutState: () => void;
}

const initialState: State = {
  userData: {
    fullName: "",
    phone: "",
    email: "",
    address: "",
  },
  plan: null,
};

export const useCheckout = create<Checkout>()(
  persist(
    (set) => ({
      ...initialState,
      setUserData: (userData) => {
        set({ userData });
      },
      setPlan: (plan) => {
        set({ plan });
      },
      resetCheckoutState: () => {
        set(initialState);
      },
    }),
    {
      name: "user-data",
      partialize: (state) => ({
        userData: state.userData,
        plan: state.plan,
      }),
    },
  ),
);
