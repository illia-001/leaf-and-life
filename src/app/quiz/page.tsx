"use client";

import quizSteps from "@/data/quizSteps.json";
import { Interstitial } from "@/types/interstitialt";
import { Question } from "@/types/Question";
import { useAnswers } from "@/hooks/useAnswers";
import { QuestionContent } from "@/components/questionContent";
import { InterstitialContent } from "@/components/interstitialContent";
import { Preloader } from "@/components/preloader";
import AnimateItems from "@/components/animateItems";
import { ItemType } from "@/types/itemType";
import NavigationBar from "@/components/navigationBar";

export default function Quiz() {
  const { currentStep } = useAnswers();

  const id = quizSteps[currentStep].id;
  const item = quizSteps.find((item) => item.id === id);

  return (
    <>
      <div className="min-h-screen z-1 flex grow text-error overflow-hidden px-4 py-10 relative bg-primary">
        <AnimateItems>
          {item?.type === ItemType.INTER && (
            <InterstitialContent item={item as Interstitial} />
          )}{" "}
          {(item?.type === ItemType.SINGLE || item?.type === ItemType.MULTIPLE) && (
            <QuestionContent item={item as Question} />
          )}
          {currentStep === quizSteps.length - 1 && <Preloader />}
        </AnimateItems>
      </div>

        <NavigationBar
          totalSteps={quizSteps.length - 1}
          buttonLabel={item?.buttonLabel}
          id={id}
          type={item?.type}
        />
        
    </>
  );
}
