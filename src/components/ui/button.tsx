'use client'
import cn from "classnames";
import { motion } from "framer-motion";

import React from "react";

interface Props {
  onClick?: () => void;
  color?: "active" | "accent" | "secondary";
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  onClick,
  color = "accent",
  className,
  children = "Next Step",
  disabled = false,
}) => {
  const getColor = () => {
    switch (color) {
      case "active":
        return "bg-button-active";

      case "secondary":
        return "bg-button-secondary";

      default:
        return "bg-accent";
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type="submit"
      className={cn(
        "transition-all duration-300 text-primary text-center text-lg px-4 py-2 font-bold flex items-center justify-center rounded-3xl cursor-pointer",
        getColor(),
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};
