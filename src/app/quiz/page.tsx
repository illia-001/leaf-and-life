"use client";

import quizSteps from "@/data/quizSteps.json";
import { Interstitial } from "@/types/interstitialt";
import { Question } from "@/types/Question";
import { useQuiz } from "@/hooks/useQuiz";
import { QuestionContent } from "@/components/questionContent";
import { InterstitialContent } from "@/components/interstitialContent";
import { Preloader } from "@/components/preloader";
import AnimateItems from "@/components/animateItems";
import { ItemType } from "@/types/itemType";
import NavigationBar from "@/components/navigationBar";

export default function Quiz() {
  const { step } = useQuiz();

  const id = quizSteps[step].id;
  const item = quizSteps.find((item) => item.id === id);
  const totalSteps = quizSteps.length - 1;

  return (
    <>
      <div className="z-1 flex grow text-error overflow-hidden px-4 py-10 relative bg-primary">
        <AnimateItems>
          {item?.type === ItemType.INTER && (
            <InterstitialContent item={item as Interstitial} />
          )}{" "}
          {(item?.type === ItemType.SINGLE ||
            item?.type === ItemType.MULTIPLE) && (
            <QuestionContent item={item as Question} />
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
