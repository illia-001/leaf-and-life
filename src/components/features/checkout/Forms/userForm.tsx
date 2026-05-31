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
        className="grid grid-cols-1 md:grid-cols-6 gap-8 max-w-4xl col-span-full bg-primary items-start"
        onSubmit={handleSumbit}
      >
        <section className="grid grid-cols-1 grid-rows-[auto_1fr] gap-4 md:col-span-3 max-w-100 justify-self-center md:justify-self-start">
          <h1 className="text-text text-2xl text-left font-semibold min-h-16 flex items-center">
            {formData?.question}
          </h1>

          <div className="flex flex-col gap-4 w-full">
            {fields?.map((item) => {
              const hasMask = !!item.validation.mask;
              const currentValue =
                (userInfo[item.id as keyof IUserData] as string) || "";

              return (
                <label
                  key={item.id}
                  className="flex flex-col w-full gap-2 text-accent font-semibold"
                >
                  {item.label}
                  <div className="flex overflow-hidden focus-within:shadow-input gap-2 items-center border rounded-xl border-accent has-[input:user-invalid]:border-error-border">
                    {hasMask ? (
                      <IMaskInput
                        type={item.type}
                        className="h-13 flex-1 order-2 outline-none text-text peer bg-transparent"
                        placeholder={item.placeholder}
                        minLength={item.validation.minLength}
                        mask={item.validation.mask}
                        autoComplete={item.autoComplite}
                        pattern={item.validation.pattern}
                        required={item.required}
                        onAccept={(_, maskRef) =>
                          handleChangeData(maskRef.unmaskedValue, item.id)
                        }
                        value={currentValue}
                      />
                    ) : (
                      <input
                        type={item.type}
                        className="h-13 flex-1 order-2 outline-none text-text peer bg-transparent"
                        placeholder={item.placeholder}
                        minLength={item.validation.minLength}
                        autoComplete={item.autoComplite}
                        pattern={item.validation.pattern}
                        required={item.required}
                        // Використовуємо стандартний onChange
                        onChange={(e) =>
                          handleChangeData(e.target.value, item.id)
                        }
                        value={currentValue}
                      />
                    )}

                    <Icon
                      iconUrl={item.icon}
                      classNames="bg-accent peer-user-invalid:bg-error-text ml-2 shrink-0"
                    />
                  </div>
                </label>
              );
            })}
          </div>
        </section>

        <div className="md:col-span-3 max-w-xl justify-self-center items-center md:justify-self-end flex flex-col gap-6">
          <PaymentForm />
          <div className="px-5 w-full py-4 bg-secondary box-border flex rounded-xl gap-2">
            <Icon
              iconUrl="https://res.cloudinary.com/dryw0xncr/image/upload/v1780161021/safe-lock-svgrepo-com_r25zre.svg"
              classNames="bg-accent shrink-0"
              size={20}
            ></Icon>
            <span className="text-accent text-sm">
              We value your privacy. Your data is encrypted and used solely for
              delivering your personalized plant matches and order updates.
            </span>
          </div>
          <Button color="accent" className="w-full self-end">
            Submit
          </Button>
        </div>
      </form>
      {isModalVisible && <CheckoutModal isVisible={setIsModalVisible} />}
    </>
  );
}
