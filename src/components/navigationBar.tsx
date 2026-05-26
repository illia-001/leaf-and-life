import { IoArrowBack } from "react-icons/io5";
import { Button } from "./button";
import { useAnswers } from "@/hooks/useAnswers";
import { ItemType } from "@/types/itemType";
import { useEffect } from "react";

interface Props {
  type?: string;
  id: string;
  buttonLabel?: string;
  totalSteps: number;
}

export default function NavigationBar({
  type,
  id,
  buttonLabel,
  totalSteps,
}: Props) {
  const { currentStep, setError, setDirection, setCurrentStep } = useAnswers();
  const answers = useAnswers((state) => state.getAnswer(id));

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'instant' }); 
}, [currentStep]);

  const handleBack = () => {
    setError(null);
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (type !== ItemType.INTER && !answers?.length) {
      setError("Choose the answer!");
      return;
    }

    if (currentStep < totalSteps) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="flex border-t-2 px-4 py-6 md:justify-end bg-secondary gap-4 sticky bottom-0 left-0 right-0 z-10">
      {currentStep > 0 && (
        <button
          onClick={handleBack}
          className="flex items-center justify-center text-accent border-2 border-accent w-30 cursor-pointer p-2 rounded-2xl"
        >
          <IoArrowBack size={25} />
          Back
        </button>
      )}

      <Button onSubmit={handleSubmit} classname="md:w-75">{buttonLabel}</Button>
    </div>
  );
}
