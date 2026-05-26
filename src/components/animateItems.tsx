import { useQuiz } from "@/hooks/useQuiz";
import { quizVariants } from "@/styles/animations/quizVariants";
import { AnimatePresence, Variants, motion } from "framer-motion";
import React from "react";

export default function AnimateItems({
  children,
}: {
  children: React.ReactNode;
}) {
  const { direction, step } = useQuiz();

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        custom={direction}
        key={step}
        variants={quizVariants as Variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
