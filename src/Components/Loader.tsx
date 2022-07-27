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
