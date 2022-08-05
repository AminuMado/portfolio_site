import { ReactElement, useEffect } from "react";
import { Header } from "./Header";
import { Carousel } from "./Carousel";
import { SkillTag } from "./SkillTag";
import { ProjectHeader } from "./ProjectHeader";
import data from "../data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export const ProjectsSection = (): ReactElement => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const ProjectSectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const CardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else control.start("hidden");
  }, [control, inView]);
  return (
    <motion.section
      ref={ref}
      variants={ProjectSectionVariants}
      initial="hidden"
      animate={control}
      className="grid grid-cols-1 w-full p-12"
    >
      <Header title="Projects" center={true} />
      <div className="flex flex-col py-5">
        <div className="flex flex-col">
          {data.map((project, index) => (
            <motion.div
              variants={CardVariants}
              initial="hidden"
              animate={control}
              key={project.name}
              className={`flex w-full flex-wrap items-center justify-around p-2 gap-2 ${
                index % 2 ? "flex-row-reverse" : ""
              }`}
            >
              <div className=" w-2/5 min-w-[335px] h-[450px] flex items-center">
                <Carousel photo={project.photo} gif={project.gif} />
              </div>
              <div className="w-2/5 bg- min-w-[335px] h-[250px] md:h-[450px] text-primary-color flex flex-col items-center justify-center">
                <div>
                  <ProjectHeader
                    title={project.name}
                    liveLink={project.liveLink}
                    repoLink={project.repoLink}
                  />
                </div>
                <div className="flex flex-wrap gap-2 md:text-lg">
                  {project.skills.map((skill) => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
                <p className="text-justify  lg:text-xl">{project.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
