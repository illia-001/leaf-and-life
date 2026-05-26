import { motion } from "framer-motion";

import { listVariants } from "@/styles/animations/listVariants";
import PlanCard from "./planCard";
import plans from "@/data/plans.json";

export default function PlanList() {
  return (
    <motion.div
      variants={listVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="grid grid-cols-1 sm:grid-cols-6 gap-4"
    >
      {plans.map((plan) => (
        <PlanCard key={plan.name} selectedPlan={plan} />
      ))}
    </motion.div>
  );
}
