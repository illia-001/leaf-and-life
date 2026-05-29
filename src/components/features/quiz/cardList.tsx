import React from "react";
import Card from "./card";
import { useAnswers, useQuiz } from "@/hooks/useQuiz";
import { IQuestion } from "@/types/IQuestion";

import { motion } from "framer-motion";
import { IItemType } from "@/types/IItemType";
import { listVariants } from "@/styles/animations/listVariants";
import { AnimationDirection } from "@/constants/animationDirection";

interface Props {
  items: IQuestion;
  id: string;
}

export const CardList: React.FC<Props> = ({ items, id }) => {
  const options = items.options;
  const { setQuizAnswers, setError, setStep, step, setAnimationDirection } =
    useQuiz();
  const answers = useAnswers(id) || [];

  const handleSetAnswer = (value: string) => {
    setError(null);

    if (items.type === IItemType.SINGLE) {
      setQuizAnswers(id, [value]);
      setAnimationDirection(AnimationDirection.FORWARD);
      setStep(step + 1);
    }

    if (items.type === IItemType.MULTIPLE) {
      if (answers.includes(value)) {
        const actualAnswers = answers.filter((answer) => answer !== value);
        setQuizAnswers(id, [...actualAnswers]);
      } else {
        setQuizAnswers(id, [...answers, value]);
      }
    }
  };

  return (
    <motion.div
      variants={listVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center gap-4"
    >
      {options.map((option) => (
        <Card
          key={option.label}
          option={option}
          icon={option.icon}
          isChecked={answers?.includes(option.value) || false}
          onSelect={handleSetAnswer}
        />
      ))}
    </motion.div>
  );
};
