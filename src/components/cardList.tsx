import React from "react";
import Card from "./card";
import { useAnswers } from "@/hooks/useAnswers";

interface Props {
  items: {
    id: string;
    type: string;
    question: string;
    options: {
      value: string;
      label: string;
    }[];
  };
  id: string;
}

export const CardList: React.FC<Props> = ({ items, id }) => {
  const options = items.options;
  const {setAnswer, setError} = useAnswers();
  const answers = useAnswers((state) => state.getAnswer(id)) || [];

  const handleSetAnswer = (value: string) => {
    setError(null);

    if (items.type === "single-choice") {
      setAnswer(id, [value]);
    }

    if (items.type === "multiple-choice") {
      if (answers.includes(value)) {
        const actualAnswers = answers.filter((answer) => answer !== value);
        setAnswer(id, [...actualAnswers]);
      } else {
        setAnswer(id, [...answers, value]);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {options.map((option) => (
        <Card
          key={option.label}
          option={option}
          isChecked={answers?.includes(option.value) || false}
          onSelect={handleSetAnswer}
        />
      ))}
    </div>
  );
};
