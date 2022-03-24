export const containerVariants = {
  initial: {},
  animate: {}
};
export const loaderAnimation = {
  initial: {
    x: -0,
    color: "hotpink"
  },
  animate: {
    x: 50,
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};
export const opacityVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5
    }
  }
};
