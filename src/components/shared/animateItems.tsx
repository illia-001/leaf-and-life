import { useQuizStore } from "@/hooks/useQuizStore";
import { quizVariants } from "@/styles/animations/quizVariants";
import { AnimatePresence, Variants, motion } from "framer-motion";
import React from "react";

export default function AnimateItems({
  children,
}: {
  children: React.ReactNode;
}) {
  const { animationDirection, step } = useQuizStore();

  return (
    <AnimatePresence mode="wait" custom={animationDirection}>
      <motion.div
        custom={animationDirection}
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
