"use client";

import { useRouter } from "next/navigation";
import { IoChevronBack, IoClose } from "react-icons/io5";

import quizSteps from "@/data/quizSteps.json";
import ProgressBar from "../ui/progressBar";
import Error from "../shared/error";
import { useQuiz } from "@/hooks/useQuiz";
import { AnimationDirection } from "@/constants/animationDirection";
import { ROUTES } from "@/constants/Routing";
import { Button } from "../ui/button";

export default function TopBar() {
  const { step, setStep, setAnimationDirection } = useQuiz();
  const router = useRouter();
  const totalSteps = quizSteps.length;

  const handleCloseQuiz = () => {
    router.push(ROUTES.HOME);
    setAnimationDirection(AnimationDirection.FORWARD);
  };

  const handleBack = () => {
    router.push(ROUTES.QUIZ);
    setAnimationDirection(AnimationDirection.BACK);
    setStep(step - 1);
  };

  const getProgressBarWidth = () => {
    const widthPercentage = Math.round(((step + 1) / totalSteps) * 100);

    return widthPercentage + "%";
  };

  return (
    <div className="w-full h-16 md:h-18 bg-primary px-2 sticky top-0 z-2">
      <div className="flex justify-between items-center">
        {step + 1 === totalSteps && (
          <Button
            name="Back to questions"
            onClick={handleBack}
            className="text-center text-text"
          >
            <IoChevronBack size={25} className="md:size-10" />
          </Button>
        )}
        <h1 className="text-text text-2xl">Leaf & Life</h1>
        <Button
          onClick={handleCloseQuiz}
          name="Close quiz"
          className="text-center text-text"
        >
          <IoClose size={25} className="md:size-10" />
        </Button>
      </div>
      <ProgressBar
        currentStep={step + 1}
        totalSteps={quizSteps.length}
        width={getProgressBarWidth()}
      />

      <Error />
    </div>
  );
}
