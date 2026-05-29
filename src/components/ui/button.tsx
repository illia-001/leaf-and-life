"use client";
import cn from "classnames";
import { motion } from "framer-motion";

import React from "react";

interface Props {
  onClick?: () => void;
  color?: "active" | "accent" | "secondary";
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onHover?: boolean;
  name?: string;
}

export const Button: React.FC<Props> = ({
  onHover = true,
  onClick,
  color,
  className,
  children = "Next Step",
  disabled = false,
  name,
}) => {
  const getColor = () => {
    switch (color) {
      case "active":
        return "bg-button-active";

      case "secondary":
        return "bg-button-secondary";

      case "accent":
        return "bg-accent";

      default:
        return "";
    }
  };

  return (
    <motion.button
      name={name}
      whileHover={onHover ? { scale: 1.05 } : undefined}
      whileTap={onHover ? { scale: 0.95 } : undefined}
      type="submit"
      className={cn(
        "transition-all duration-300 text-primary text-center text-lg px-2 py-2 font-bold flex items-center justify-center rounded-3xl cursor-pointer",
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
