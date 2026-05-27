import { motion } from "framer-motion";

import { listVariants } from "@/styles/animations/listVariants";
import plans from "@/data/plans.json";
import SubscriptionPlanCard from "./SubscriptionPlanCard";

export default function SubscriptionPlanList() {
  return (
    <motion.div
      variants={listVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="grid grid-cols-1 sm:grid-cols-6 gap-4"
    >
      {plans.map((plan) => (
        <SubscriptionPlanCard key={plan.name} selectedPlan={plan} />
      ))}
    </motion.div>
  );
}
