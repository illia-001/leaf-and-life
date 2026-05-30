import { IMaskInput } from "react-imask";
import { useQuiz } from "@/hooks/useQuiz";
import { Button } from "../../../ui/button";

import quizStep from "@/data/quizSteps.json";
import PaymentForm from "./paymentForm";
import React, { useState } from "react";
import CheckoutModal from "../checkoutModal";
import { IUserData } from "@/types/IUserData";
import Icon from "../../../ui/icon";
import { useCheckout } from "@/hooks/useChackout";
import amplitude from "@/amplitude/amplitude";

export default function UserForm() {
  const { setError } = useQuiz();
  const { userData, subscriptionPlan, setUserData } = useCheckout();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userInfo, setUserInfo] = useState<IUserData>(userData);

  const formData = quizStep.at(-1);
  const fields = formData?.fields;

  const handleChangeData = (value: string, id: string) => {
    setUserInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handleSumbit = (event: React.SubmitEvent) => {
    event.preventDefault();
    if (!subscriptionPlan) {
      setError("Please choose plan!");
      return;
    }

    amplitude.track("payment_submitted");

    setIsModalVisible(true);
    setUserData(userInfo);
  };

  return (
    <>
      <form
        id="form"
        className="grid grid-cols-1 md:grid-cols-6 gap-8 p-4 max-w-4xl col-span-full bg-primary items-start"
        onSubmit={handleSumbit}
      >
        <section className="grid grid-cols-1 grid-rows-[auto_1fr] gap-4 md:col-span-3 max-w-100 justify-self-center md:justify-self-start">
          <h1 className="text-text text-2xl text-left font-semibold min-h-16 flex items-center">
            {formData?.question}
          </h1>

          <div className="flex flex-col gap-4 w-full">
            {fields?.map((item) => (
              <label
                key={item.id}
                className="flex flex-col w-full gap-2 text-accent font-semibold"
              >
                {item.label}
                <div className="flex gap-2 items-center border border-gray-400 px-2 rounded-xl focus-within:border-accent has-[input:user-invalid]:border-error-border">
                  <IMaskInput
                    type={item.type}
                    className="h-13 w-full order-2 outline-none text-text peer bg-transparent"
                    placeholder={item.placeholder}
                    minLength={item.validation.minLength}
                    mask={item.validation.mask}
                    pattern={item.validation.pattern}
                    required={item.required}
                    onAccept={(_, maskRef) =>
                      handleChangeData(maskRef.unmaskedValue, item.id)
                    }
                    value={
                      (userInfo[item.id as keyof IUserData] as string) || ""
                    }
                  />
                  <Icon
                    iconUrl={item.icon}
                    classNames="bg-accent peer-user-invalid:bg-error-text"
                  />
                </div>
              </label>
            ))}
          </div>
        </section>

        <div className="md:col-span-3 max-w-xl justify-self-center md:justify-self-end flex flex-col gap-6">
          <PaymentForm />
          <Button color="accent" className="w-full self-end">Submit</Button>
        </div>
      </form>
      {isModalVisible && <CheckoutModal isVisible={setIsModalVisible} />}
    </>
  );
}
