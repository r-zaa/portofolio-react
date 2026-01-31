export const heroTextContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };
  
  export const heroItem = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(8px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  export const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  