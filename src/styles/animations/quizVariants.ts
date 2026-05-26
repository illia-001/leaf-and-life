export const quizVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 50 : -50, 
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -50 : 50,
    opacity: 0,
    transition: {
      x: { duration: 0.2 },
      opacity: { duration: 0.15 },
    },
  }),
};