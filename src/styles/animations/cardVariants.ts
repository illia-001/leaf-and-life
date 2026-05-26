import { Variants } from "framer-motion";

export const cardVariants: Variants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 30 : -30,
  }),
  animate: { opacity: 1, x: 0, transition: { type: "tween", stiffness: 100 } },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? -30 : 30
  }),
};
