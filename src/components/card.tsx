"use client";

import { motion } from "framer-motion";

import cn from "classnames";
import React from "react";
import Icon from "./icon";
import { cardVariants } from "@/styles/animations/cardVariants";
import { useQuiz } from "@/hooks/useQuiz";

interface Props {
  option: {
    value: string;
    label: string;
  };
  icon: string;
  isChecked: boolean;
  onSelect: (label: string) => void;
}

export const Card: React.FC<Props> = ({
  option,
  isChecked,
  icon,
  onSelect,
}) => {
  const { label, value } = option;
  const { direction } = useQuiz();

  return (
    <motion.div
      key={icon}
      variants={cardVariants}
      custom={direction}
      className="flex w-full justify-center"
    >
      <motion.button
        whileHover={{ scale: 1.01, y: -2 }}
        whileTap={{ scale: 0.99 }}
        onClick={() => onSelect(value)}
        className={cn(
          "space-y-3 w-full max-w-175 border-2 transition-all duration-300 ease-out cursor-pointer h-auto bg-secondary rounded-3xl shadow-[0_16px_32px_-12px_#0D21191A] p-6",
          { "border-accent": isChecked },
        )}
      >
        <div className="flex justify-between items-center">
          <div className="bg-bg-icon size-10 rounded-xl flex justify-center items-center">
            <Icon iconUrl={icon} classNames="bg-accent" />
          </div>

          <div
            className={cn(
              "flex transition-all items-center justify-center w-5 h-5 rounded-full border-2 border-[#C1C8C2]",
              { "border-accent": isChecked },
            )}
          >
            {isChecked && (
              <div className="transition-all w-3 h-3 rounded-full bg-accent"></div>
            )}
          </div>
        </div>
        <h1 className="text-text text-left text-2xl">{value}</h1>

        <p className="text-accent text-left">{label}</p>
      </motion.button>
    </motion.div>
  );
};

export default Card;
