import { IoArrowBack } from "react-icons/io5";
import { Button } from "../ui/button";
import { useAnswers, useQuiz } from "@/hooks/useQuiz";
import { IItemType } from "@/types/IItemType";
import { useEffect } from "react";
import amplitude from "@/amplitude/amplitude";
import { AnimationDirection } from "@/constants/animationDirection";

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
  const { step, setError, setAnimationDirection, setStep } = useQuiz();
  const answers = useAnswers(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [step]);

  const handleBack = () => {
    setError(null);
    if (step > 0) {
      setAnimationDirection(AnimationDirection.BACK);
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    if (type !== IItemType.INTER && !answers?.length) {
      setError("Choose the answer!");
      return;
    }
    
    amplitude.track("quiz_step_completed", {
      step_number: step + 1,
      question_title: id,
    });

    if (step < totalSteps) {
      setAnimationDirection(AnimationDirection.FORWARD);
      setStep(step + 1);
    }

    if (step === totalSteps - 1) {
      amplitude.track("checkout_viewed");
    }
  };

  return (
    <div className="flex border-t-2 px-4 py-6 md:justify-end bg-secondary gap-4 sticky bottom-0 left-0 right-0 z-10">
      {step > 0 && (
        <Button
          onClick={handleBack}
          color="secondary"
          className="flex items-center justify-center text-text border-2 border-accent w-30 rounded-2xl"
        >
          <IoArrowBack size={25} />
          Back
        </Button>
      )}

      <Button onClick={handleSubmit} className="w-full h-13 md:w-75">
        {buttonLabel}
      </Button>
    </div>
  );
}
