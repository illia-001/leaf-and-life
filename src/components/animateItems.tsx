import { useAnswers } from "@/hooks/useAnswers";
import { quizVariants } from "@/styles/animations/quizVariants";
import { AnimatePresence, Variants, motion } from "framer-motion";
import React from "react";

export default function AnimateItems({children}: {children: React.ReactNode}) {
  const {direction, currentStep} = useAnswers()
  return (
    <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentStep}
          custom={direction}
          variants={quizVariants as Variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full"
      >
        {children}
      </motion.div>
      </AnimatePresence>
  )
}