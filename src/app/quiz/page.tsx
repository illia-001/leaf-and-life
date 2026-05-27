"use client";

import quizSteps from "@/data/quizSteps.json";
import { IInterstitial } from "@/types/IInterstitialt";
import { IQuestion } from "@/types/IQuestion";
import { useQuiz } from "@/hooks/useQuiz";
import { QuestionContent } from "@/components/features/quiz/questionContent";
import { InterstitialContent } from "@/components/features/quiz/interstitialContent";
import { Preloader } from "@/components/ui/preloader";
import AnimateItems from "@/components/shared/animateItems";
import { IItemType } from "@/types/IItemType";
import NavigationBar from "@/components/layout/navigationBar";
import amplitude from "@/amplitude/amplitude";
import { useEffect } from "react";

export default function Quiz() {
  const { step } = useQuiz();

  const id = quizSteps[step].id;
  const item = quizSteps.find((item) => item.id === id);
  const totalSteps = quizSteps.length - 1;
  
  useEffect(() => {
    if (step === 0) {
      amplitude.track('quiz_started');
    }
  }, [step])

  return (
    <>
      <div className="min-h-screen z-1 flex grow text-error overflow-hidden px-4 py-10 relative bg-primary">
        <AnimateItems>
          {item?.type === IItemType.INTER && (
            <InterstitialContent item={item as IInterstitial} />
          )}
          {(item?.type === IItemType.SINGLE ||
            item?.type === IItemType.MULTIPLE) && (
            <QuestionContent item={item as IQuestion} />
          )}
          {step === totalSteps && <Preloader />}
        </AnimateItems>
      </div>

      {step < totalSteps && (
        <NavigationBar
          totalSteps={totalSteps}
          buttonLabel={item?.buttonLabel}
          id={id}
          type={item?.type}
        />
      )}
    </>
  );
}
