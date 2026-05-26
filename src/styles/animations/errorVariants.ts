export const errorVariants = {
  initial: () => ({
    y: -100, 
    opacity: 0,
  }),
  animate: {
    y: 60,
    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 400, damping: 20 },
      opacity: { duration: 0.2 },
    },
  },
  exit: () => ({
    y: -100,
    opacity: 0,
    transition: {
      y: { duration: 0.15 },
      opacity: { duration: 0.15 },
    },
  }),
};