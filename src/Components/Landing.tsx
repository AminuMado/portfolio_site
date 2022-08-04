import { AnimatePresence, motion } from "framer-motion";
import { Canvas } from "./Canvas";
import { Loader } from "./Loader";
import { Scroller } from "./Scroller";
import { ThemeSwitcher } from "./ThemeSwitcher";

type LandingProps = {
  setIsLoading: (status: boolean) => void;
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};
export const Landing = ({ setIsLoading, theme, setTheme }: LandingProps) => {
  setTimeout(() => {
    setIsLoading(false);
  }, 6600);
  return (
    <AnimatePresence>
      <Loader />
      <motion.section
        key={1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6, duration: 1.5 }}
        exit={{ opacity: 0 }}
        className="relative w-fit"
      >
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <Scroller />
        <Canvas />
        <div className="absolute top-1/3 text-primary-color p-5 m-5">
          <motion.h1
            key={2}
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            transition={{ delay: 6, duration: 1.5 }}
            exit={{ opacity: 0 }}
            className=" text-5xl md:text-7xl my-2 py-2"
          >
            Aminu Mukhtar Mado
          </motion.h1>
          <motion.p
            key={3}
            initial={{ x: "-50vw", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ delay: 6.8, duration: 1.5 }}
            exit={{ opacity: 0 }}
            className=" text-2xl md:text-5xl my-2 py-2"
          >
            Full-stack Developer
          </motion.p>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};
