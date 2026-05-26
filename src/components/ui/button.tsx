import cn from "classnames";
import React from "react";

interface Props {
  onSubmit?: () => void;
  color?: "active" | "accent";
  classname?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  onSubmit,
  color = "accent",
  classname,
  children = "Next Step",
  disabled = false,
}) => {
  const getStyles = () => {
    switch (color) {
      case "active":
        return "bg-button-active";

      default:
        return "bg-accent";
    }
  };

  return (
    <button
      type="submit"
      className={cn(
        "w-full transition-all duration-300 text-center text-lg px-4 py-2 font-bold flex items-center justify-center gap-1 h-13 rounded-3xl",
        getStyles(),
        classname,
      )}
      onClick={onSubmit}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
