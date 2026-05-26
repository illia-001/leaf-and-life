import { IMaskInput } from "react-imask";
import { useAnswers } from "@/hooks/useAnswers";
import { Button } from "./button";

import quizStep from "@/data/quizSteps.json";
import PaymentForm from "./paymentForm";
import React, { useState } from "react";
import CheckoutModal from "./checkoutModal";
import { UserData } from "@/types/userData";

export default function UserForm() {
  const { currentPlan, setError, userData, setUserData } = useAnswers();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userInfo, setUserInfo] = useState<UserData>(userData);

  const formData = quizStep.at(-1);
  const fields = formData?.fields;

  const handleChangeData = (value: string | number, id: string) => {
    setUserInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handleSumbit = (event: React.SubmitEvent) => {
    event.preventDefault();
    if (!currentPlan) {
      setError("Please choose plan!");
      return;
    }

    setUserData(userInfo);
    setIsModalVisible(true);
  };

  return (
    <>
      <form
        id="form"
        className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4 col-span-full bg-primary"
        onSubmit={handleSumbit}
      >
        <div className="flex flex-col md:items-center gap-4 md:col-span-3">
          <h1 className="text-text font-sans text-2xl text-center font-semibold">
            {formData?.question}
          </h1>
          {fields?.map((item) => (
            <label
              key={item.id}
              className="flex flex-col gap-2 text-accent font-mono font-semibold"
            >
              {item.label}
              <IMaskInput
                type={item.type}
                className="h-13 w-full md:w-100 outline-none text-text border border-gray-400 p-2 rounded-xl user-invalid:border-red-400 user-valid:border-accent"
                placeholder={item.placeholder}
                minLength={item.validation.minLength}
                mask={item.validation.mask}
                pattern={item.validation.pattern}
                required={item.required}
                onChange={(event) =>
                  handleChangeData(event.target.value, item.id)
                }
                value={userInfo[item.id as keyof UserData]}
              />
            </label>
          ))}
        </div>
        <div className="flex flex-col  md:items-center gap-8 mt-4 md:mt-0 md:col-span-3">
          <PaymentForm onChange={handleChangeData} />
          
          <Button classname="md:w-100">Submit</Button>
        </div>
      </form>
      {isModalVisible && <CheckoutModal isVisible={setIsModalVisible} />}
    </>
  );
}
