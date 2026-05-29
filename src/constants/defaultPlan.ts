import { ISubscriptionPlan } from "@/types/ISubscriptionPlan";
import plans from "@/data/plans.json";

const defaultPlanName = "The Grove";

export const defaultPlan: ISubscriptionPlan =
  plans.find((plan) => plan.name === defaultPlanName) || plans[0];
