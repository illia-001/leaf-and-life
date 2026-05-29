import { defaultPlan } from "@/constants/defaultPlan";
import { ISubscriptionPlan } from "@/types/ISubscriptionPlan";
import { IUserData } from "@/types/IUserData";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  subscriptionPlan: ISubscriptionPlan | null;
  userData: IUserData;
}

interface Checkout extends State {
  setUserData: (userData: IUserData) => void;
  setSubscriptionPlan: (plan: ISubscriptionPlan | null) => void;
}

const initialState: State = {
  userData: {
    fullName: "",
    phone: "",
    email: "",
    address: "",
  },
  subscriptionPlan: defaultPlan,
};

export const useCheckout = create<Checkout>()(
  persist(
    (set) => ({
      ...initialState,
      setUserData: (userData) => {
        set({ userData });
      },
      setSubscriptionPlan: (plan) => {
        set({ subscriptionPlan: plan });
      },
    }),
    {
      name: "user-data",
      partialize: (state) => ({
        userData: state.userData,
        subscriptionPlan: state.subscriptionPlan,
      }),
    },
  ),
);
