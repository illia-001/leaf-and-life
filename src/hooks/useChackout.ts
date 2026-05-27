import { ISubscriptionPlan } from "@/types/ISubscriptionPlan";
import { IUserData } from "@/types/IUserData";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  plan: ISubscriptionPlan | null;
  userData: IUserData;
}

interface Checkout extends State {
  setUserData: (userData: IUserData) => void;
  setPlan: (plan: ISubscriptionPlan | null) => void;
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
        set((state) => ({ ...initialState, userData: state.userData }));
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
