import React, { ReactElement, useEffect } from "react";
import { ScrollingText } from "./ScrollingText";
import { Header } from "./Header";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const AboutSection = (): ReactElement => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const AboutSectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else control.start("hidden");
  }, [control, inView]);
  return (
    <motion.section
      ref={ref}
      variants={AboutSectionVariants}
      initial="hidden"
      animate={control}
      className="grid grid-cols-1 w-full p-12 text-primary-color"
    >
      <Header title="About" center={true} />
      <div className="flex flex-col items-center text-xl">
        <div>
          <p className="sm:text-justify">
            Deeply invested in the life-long learning mentality, I'm a
            full-stack developer who carries a keen eye for design in an
            user-first approach. My focus is in creating responsive layouts on
            the JavaScript stack of React and NodeJS, and from my background as
            an electrical engineer I'm well acquainted to bringing out solutions
            to complex problems. And as a follower of John Maeda’s laws of
            simplicity, I agree that less is more.
          </p>
          <p>Outisde of development, I enjoy playing chess and basketball.</p>
        </div>
        <div className="">
          <div className="">
            <ScrollingText
              text="Full-stack JavaScript Developer &middot; "
              direction="right"
            />
            <ScrollingText
              text="Front-end Developer &middot; "
              direction="left"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
