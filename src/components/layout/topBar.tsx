"use client";

import { useRouter } from "next/navigation";
import { IoChevronBack, IoClose } from "react-icons/io5";

import quizSteps from "@/data/quizSteps.json";
import ProgressBar from "../ui/progressBar";
import Error from "../shared/error";
import { useQuizStore } from "@/hooks/useQuizStore";
import { AnimationDirection } from "@/constants/animationDirection";
import { ROUTES } from "@/constants/Routing";
import { Button } from "../ui/button";
import Link from "next/link";

export default function TopBar() {
  const { step, setStep, setAnimationDirection } = useQuizStore();
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

  return (
    <div className="w-full h-16 md:h-18 bg-primary px-2 sticky top-0 z-2">
      <div className="flex justify-between items-center">
        {step === totalSteps && (
          <Button
            name="Back to questions"
            onClick={handleBack}
            className="text-center text-text"
          >
            <IoChevronBack size={25} className="md:size-10" />
          </Button>
        )}
        <Link href={ROUTES.HOME} className="text-text text-2xl font-serif">
          Leaf & Life
        </Link>
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
        totalSteps={totalSteps + 1}
      />

      <Error />
    </div>
  );
}
