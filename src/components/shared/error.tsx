"use client";
import { useQuiz } from "@/hooks/useQuiz";
import { useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { errorVariants } from "@/styles/animations/errorVariants";

export default function Error() {
  const { error, setError } = useQuiz();

  useEffect(() => {
    if (!error) {
      return;
    }

    const timer = setTimeout(() => {
      setError(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [error, setError]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {error && (
        <motion.div
          variants={errorVariants as Variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-100 px-4 pointer-events-none"
        >
          <h1
            className={`w-full 
              min-h-10
              text-error-text
              backdrop-blur-sm
              text-center
              bg-red-300/30
              border-2
              border-error-border
              px-4
              py-2
              rounded-xl
              flex
              items-center
              justify-center`}
          >
            {error}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
