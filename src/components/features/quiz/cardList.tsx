import React from "react";
import Card from "./card";
import { useAnswers, useQuiz } from "@/hooks/useQuiz";
import { Question } from "@/types/Question";

import { motion } from "framer-motion";
import { ItemType } from "@/types/itemType";
import { listVariants } from "@/styles/animations/listVariants";

interface Props {
  items: Question;
  id: string;
}

export const CardList: React.FC<Props> = ({ items, id }) => {
  const options = items.options;
  const { setQuizAnswers, setError } = useQuiz();
  const answers = useAnswers(id) || [];

  const handleSetAnswer = (value: string) => {
    setError(null);

    if (items.type === ItemType.SINGLE) {
      if (answers.includes(value)) {
        setQuizAnswers(id, []);
      } else {
        setQuizAnswers(id, [value]);
      }
    }

    if (items.type === ItemType.MULTIPLE) {
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
