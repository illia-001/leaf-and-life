"use client";

import AnimateItems from "@/components/shared/animateItems";
import SubscriptionPlanList from "@/components/features/checkout/SubscriptionPlanList";
import UserForm from "@/components/features/checkout/Forms/userForm";
import { useEffect } from "react";
import { useQuizStore } from "@/hooks/useQuizStore";
import { ROUTES } from "@/constants/Routing";
import { useRouter } from "next/navigation";
import plans from "@/data/plans.json";


export default function Checkout() {
  const { answers } = useQuizStore();
  const router = useRouter();

  const hasAnswers = answers && Object.keys(answers).length > 0;

  useEffect(() => {
    if (!hasAnswers) {
      router.push(ROUTES.QUIZ);
    }
  }, []);

  return (
    <div className="z-1 bg-primary flex flex-col items-center gap-10 px-4 py-8">
      <div className="flex flex-col gap-4 col-span-full">
        <h1 className="text-text text-3xl text-center">
          Choose your green journey
        </h1>
        <p className="text-accent text-center">
          Bring the tranquility of nature into your home with our curated
          subscription boxes.
        </p>
        <AnimateItems>
          <SubscriptionPlanList plans={plans} />
        </AnimateItems>
      </div>
      <UserForm />
    </div>
  );
}
