import { useQuiz } from "@/hooks/useQuiz";
import { Button } from "../../ui/button";
import { ISubscriptionPlan } from "@/types/ISubscriptionPlan";
import { motion } from "framer-motion";
import { cardVariants } from "@/styles/animations/cardVariants";
import { useCheckout } from "@/hooks/useChackout";

interface Props {
  selectedPlan: ISubscriptionPlan;
}

export default function SubscriptionPlanCard({ selectedPlan }: Props) {
  const { name, price, period, condition } = selectedPlan;
  const { animationDirection } = useQuiz();
  const { subscriptionPlan, setSubscriptionPlan } = useCheckout();

  const handleSelectPlan = (
    plan: ISubscriptionPlan | null,
  ) => {
    if (plan?.name === name) {
      setSubscriptionPlan(null);
    } else {
      setSubscriptionPlan(selectedPlan);
    }
  };

  return (
    <motion.div
      key={name}
      variants={cardVariants}
      custom={animationDirection}
      className="flex justify-center col-span-full md:col-span-3 lg:col-span-2"
    >
      <motion.div
        whileHover={{ scale: 1.01, y: -2 }}
        onClick={() => handleSelectPlan(subscriptionPlan)}
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
        <Button color={subscriptionPlan?.name === name ? "active" : "accent"}>
          {subscriptionPlan?.name === name ? "Selected" : "Select Plan"}
        </Button>
      </motion.div>
    </motion.div>
  );
}
