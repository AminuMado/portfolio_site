import React, { ReactElement, useEffect } from "react";
import { Header } from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const ContactSection = (): ReactElement => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const ContactSectionVariants = {
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
      variants={ContactSectionVariants}
      initial="hidden"
      animate={control}
      className="grid grid-cols-1 w-full p-12 text-primary-color text-xl"
    >
      <Header title="Contact" center={true} />
      <div className="flex flex-col items-center mt-4">
        <div className="flex flex-col gap-3 items-center justify-evenly">
          <p>Write me an email at:</p>
          <h1 className="text-lg font-semibold md:text-4xl ">
            aminumukhtarmado@gmail.com
          </h1>
        </div>
        <p className="text-center tracking-widest my-4 md:my-8 text-xl">OR</p>
        <div className="flex flex-col items-center justify-evenly">
          <p>Reach me through</p>
          <div className=" flex justify-center gap-5 m-2 p-1">
            <a
              href="https://github.com/AminuMado"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="3x"
                className="cursor-pointer text-github-color active:scale-110 hover:scale-105 hover:text-amber-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aminu-mukhtar-mado/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="3x"
                className="cursor-pointer text-linkedIn-color active:scale-110 hover:scale-105 hover:text-sky-700"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
