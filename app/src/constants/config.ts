const easing = [0.175, 0.85, 0.42, 0.96]

export const PAGE_VARIANTS = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.25,
      ease: easing,
    },
  },
  exit: { opacity: 0, x: 0, y: -100 },
}

export const DETAILS_PAGE_VARIANTS = {
  initial: { opacity: 0, y: 50 },
  exit: { opacity: 0, y: 50, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
}
