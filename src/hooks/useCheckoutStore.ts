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

const defaultUserData: IUserData = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
};

const initialState: State = {
  userData: defaultUserData,
  subscriptionPlan: defaultPlan,
};

export const useCheckoutStore = create<Checkout>()(
  persist(
    (set) => ({
      ...initialState,
      setUserData: (userData: Partial<IUserData>) =>
        set((state) => ({ userData: { ...state.userData, ...userData } })),
      setSubscriptionPlan: (plan) => set({ subscriptionPlan: plan }),
    }),
    {
      name: "user-data",
    },
  ),
);
