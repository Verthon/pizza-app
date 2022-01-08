import { AnimatePresence, motion } from "framer-motion"

import { PAGE_VARIANTS } from "../../../constants/config"

import { Props } from "./PageTransition.types"

export const PageTransition = ({ variants = PAGE_VARIANTS, children }: Props) => (
  <AnimatePresence>
    <motion.div initial="exit" animate="enter" exit="exit" variants={variants}>
      {children}
    </motion.div>
  </AnimatePresence>
)
