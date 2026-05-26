"use client";

import { motion } from "framer-motion";

import cn from "classnames";
import React from "react";

interface Props {
  option: {
    value: string;
    label: string;
  };
  isChecked: boolean;
  onSelect: (label: string) => void;
}

export const Card: React.FC<Props> = ({ option, isChecked, onSelect }) => {
  const { label, value } = option;

  return (
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
        <h1 className="text-text text-2xl">{value}</h1>

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

      <p className="text-accent text-left">{label}</p>
    </motion.button>
  );
};

export default Card;
