"use client";

import quizSteps from "@/data/quizSteps.json";
import { IQuestion } from "@/types/IQuestion";
import { useQuizStore } from "@/hooks/useQuizStore";
import { QuestionContent } from "@/components/features/quiz/questionContent";
import { InterstitialContent } from "@/components/features/quiz/interstitialContent";
import { Preloader } from "@/components/ui/preloader";
import AnimateItems from "@/components/shared/animateItems";
import { IItemType } from "@/types/IItemType";
import NavigationBar from "@/components/layout/navigationBar";
import { IInterstitial } from "@/types/IInterstitial";

export default function Quiz() {
  const { step } = useQuizStore();

  const totalSteps = quizSteps.length;
  const item = quizSteps[step];
  const id = item?.id || quizSteps[0].id;

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
          type={item?.type as IItemType}
        />
      )}
    </>
  );
}
