import { motion } from "framer-motion";

import { listVariants } from "@/styles/animations/listVariants";
import SubscriptionPlanCard from "./SubscriptionPlanCard";
import { ISubscriptionPlan } from "@/types/ISubscriptionPlan";

interface Props {
  plans: ISubscriptionPlan[];
}

export default function SubscriptionPlanList({plans}: Props) {
  return (
    <motion.div
      variants={listVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="grid grid-cols-1 sm:grid-cols-6 gap-4"
    >
      {plans.map((plan) => (
        <SubscriptionPlanCard key={plan.name} plan={plan} />
      ))}
    </motion.div>
  );
}
