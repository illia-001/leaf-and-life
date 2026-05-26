import { useQuiz } from "@/hooks/useQuiz";
import { Button } from "../../ui/button";
import { SubscriptionPlan } from "@/types/subscriptionPlan";
import { motion } from "framer-motion";
import { cardVariants } from "@/styles/animations/cardVariants";
import { useCheckout } from "@/hooks/useChackout";

interface Props {
  selectedPlan: SubscriptionPlan;
}

export default function PlanCard({ selectedPlan }: Props) {
  const { name, price, period, condition } = selectedPlan;
  const { direction } = useQuiz();
  const { plan, setPlan } = useCheckout();

  const handleSelectPlan = (
    plan: {
      name: string;
      price: string;
      period: string;
      condition: string;
    } | null,
  ) => {
    if (plan?.name === name) {
      setPlan(null);
    } else {
      setPlan(selectedPlan);
    }
  };

  return (
    <motion.div
      key={name}
      variants={cardVariants}
      custom={direction}
      className="flex justify-center col-span-full md:col-span-3 lg:col-span-2"
    >
      <motion.div
        whileHover={{ scale: 1.01, y: -2 }}
        whileTap={{ scale: 0.99 }}
        onClick={() => handleSelectPlan(plan)}
        className="flex w-full flex-col justify-between shadow-[0_16px_32px_-12px_#0D21191A] p-8 rounded-2xl border-2"
      >
        <article>
          <div className="flex justify-between">
            <h3 className="text-text text-2xl font-bold font-sans">{name}</h3>
            <h3 className="text-accent font-bold font-sans text-2xl">
              {price}
            </h3>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-accent">{condition}</span>
            <span className="text-accent">{period}</span>
          </div>
        </article>
        <Button color={plan?.name === name ? "active" : "accent"}>
          {plan?.name === name ? "Selected" : "Select Plan"}
        </Button>
      </motion.div>
    </motion.div>
  );
}
