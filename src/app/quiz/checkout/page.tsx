"use client";

import AnimateItems from "@/components/shared/animateItems";
import SubscriptionPlanList from "@/components/features/checkout/SubscriptionPlanList";
import UserForm from "@/components/features/checkout/userForm";

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
          <SubscriptionPlanList />
        </AnimateItems>
      </div>
      <UserForm />
    </div>
  );
}
