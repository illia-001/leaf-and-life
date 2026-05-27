"use client";

import { useRouter } from "next/navigation";
import { IoChevronBack, IoClose } from "react-icons/io5";

import quizSteps from "@/data/quizSteps.json";
import ProgressBar from "../ui/progressBar";
import Error from "../shared/error";
import { useQuiz } from "@/hooks/useQuiz";

export default function TopBar() {
  const { step, setStep, setStepDirection } = useQuiz();
  const router = useRouter();
  const totalSteps = quizSteps.length;

  const handleCloseQuiz = () => {
    router.push("/");
    setStepDirection(1);
  };

  const handleBack = () => {
    router.push("/quiz");
    setStepDirection(-1);
    setStep(step - 1);
  };

  const getProgressBarWidth = () => {
    const widthPercentage = Math.round(((step + 1) / totalSteps) * 100);

    return widthPercentage + "%";
  };

  return (
    <div className="w-full h-16 lg:h-18 bg-primary px-2 sticky top-0 z-2">
      <div className="flex justify-between items-center">
        {step + 1 === totalSteps && (
          <button
            name="Back to questions"
            onClick={handleBack}
            className="text-center text-text cursor-pointer p-2"
          >
            <IoChevronBack size={25} className="lg:size-10" />
          </button>
        )}
        <h1 className="text-text font-sans text-2xl">Leaf & Life</h1>
        <button
          onClick={handleCloseQuiz}
          name="Close quiz"
          className="text-center text-text cursor-pointer p-2"
        >
          <IoClose size={25} className="lg:size-10" />
        </button>
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
