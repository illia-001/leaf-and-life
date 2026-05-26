"use client";
import plans from "@/data/plans.json";
import PlanCard from "@/components/planCard";
import AnimateItems from "@/components/animateItems";

import UserForm from "@/components/userForm";

export default function Checkout() {
  return (
    <div className="z-1 bg-primary flex flex-col gap-10 px-4 py-8">
      <div className="flex flex-col gap-4 col-span-full">
        <h1 className="text-text text-3xl text-center font-sans">
          Choose your green journey
        </h1>
        <p className="text-accent text-center">
          Bring the tranquility of nature into your home with our curated
          subscription boxes.
        </p>

        <AnimateItems>
          <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
            {plans.map((plan) => (
              <PlanCard key={plan.name} selectedPlan={plan} />
            ))}
          </div>
        </AnimateItems>
      </div>
      <UserForm />
    </div>
  );
}
