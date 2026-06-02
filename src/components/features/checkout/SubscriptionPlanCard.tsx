import { useQuizStore } from "@/hooks/useQuizStore";
import { Button } from "../../ui/button";
import { ISubscriptionPlan } from "@/types/ISubscriptionPlan";
import { motion } from "framer-motion";
import { cardVariants } from "@/styles/animations/cardVariants";
import { useCheckoutStore } from "@/hooks/useCheckoutStore";

interface Props {
  plan: ISubscriptionPlan;
}

export default function SubscriptionPlanCard({ plan }: Props) {
  const { name, price, period, condition } = plan;
  const { animationDirection } = useQuizStore();
  const { subscriptionPlan, setSubscriptionPlan } = useCheckoutStore();

  const isSelected = subscriptionPlan?.name === name;

  const handleSelectPlan = () => {
    if (!isSelected) {
      setSubscriptionPlan(plan);
    }
  };

  return (
    <motion.div
      key={name}
      variants={cardVariants}
      custom={animationDirection}
      className={`flex justify-center col-span-full md:col-span-3 lg:col-span-2 rounded-2xl overflow-hidden border-2 ${isSelected ? "border-accent" : "border-transparent"}`}
    >
      <motion.div
        whileHover={{ scale: 1.01, y: -2 }}
        onClick={handleSelectPlan}
        className="flex w-full flex-col justify-between shadow-card py-8 px-4 border-2"
      >
        <article>
          <div className="flex justify-between">
            <h3 className="text-text text-2xl font-bold">{name}</h3>
            <span className="text-accent font-bold text-2xl">{price}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-accent">{condition}</span>
            <span className="text-accent">{period}</span>
          </div>
        </article>
        <Button
          onHover={false}
          color={isSelected ? "active" : "accent"}
          className="self-center sm:self-end w-full sm:w-75 lg:w-50"
        >
          {isSelected ? "Selected" : "Select Plan"}
        </Button>
      </motion.div>
    </motion.div>
  );
}
