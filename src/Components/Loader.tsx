import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
  return (
    <AnimatePresence>
      {isLoading && (
        <div className="loader_wrapper">
          <motion.div
            key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.5 }}
            exit={{ opacity: 0 }}
          >
            <div className="circle circle_1"></div>
            <div className="shadow shadow_1"></div>
          </motion.div>
          <motion.div
            key={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1.7 }}
            exit={{ opacity: 0 }}
          >
            <div className="circle circle_2"></div>
            <div className="shadow shadow_2"></div>
          </motion.div>
          <motion.div
            key={3}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
            exit={{ opacity: 0 }}
          >
            <div className="circle circle_3"></div>
            <div className="shadow shadow_3"></div>
          </motion.div>{" "}
        </div>
      )}
    </AnimatePresence>
  );
};

export const Loader2 = () => {
  const loaderVariants = {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
          ease: "linear",
        },
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.5,
          ease: "easeOut",
        },
      },
    },
  };

  return (
    <>
      <motion.div
        className="w-3 h-3 rounded-full mt-7 md:mb-4 mx-3 bg-loading-color"
        variants={loaderVariants}
        animate="animationOne"
      ></motion.div>
    </>
  );
};
