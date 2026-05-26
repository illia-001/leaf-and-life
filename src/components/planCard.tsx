import { useAnswers } from "@/hooks/useAnswers";
import { Button } from "./button";

interface Props {
  plan: { name: string; price: string; period: string; condition: string };
}

export default function PlanCard({ plan }: Props) {
  const { name, price, period, condition } = plan;
  const { currentPlan, setPlan } = useAnswers();

  const handleSelectPlan = (
    plan: {
      name: string;
      price: string;
      period: string;
      condition: string;
    } | null,
  ) => {
    if (currentPlan?.name === plan?.name) {
      setPlan(null);
    }

    setPlan(plan);
  };

  return (
    <div
      key={name}
      className="flex flex-col justify-between shadow-[0_16px_32px_-12px_#0D21191A] col-span-full md:col-span-3 lg:col-span-2 p-8 rounded-2xl border-2"
    >
      <article>
        <div className="flex justify-between">
          <h3 className="text-text text-2xl font-bold font-sans">{name}</h3>
          <h3 className="text-accent font-bold font-sans text-2xl">{price}</h3>
        </div>
        <div className="flex justify-between mb-6">
          <span className="text-accent">{condition}</span>
          <span className="text-accent">{period}</span>
        </div>
      </article>
      <Button
        onSubmit={() => handleSelectPlan(plan)}
        color={currentPlan?.name === plan.name ? "active" : "accent"}
      >
        {currentPlan?.name === plan.name ? "Selected" : "Select Plan"}
      </Button>
    </div>
  );
}
