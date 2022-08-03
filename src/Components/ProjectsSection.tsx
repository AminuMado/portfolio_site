import { ReactElement } from "react";
import { Header } from "./Header";
import { Carousel } from "./Carousel";
import { ProjectHeader, SkillTag } from "../Utils";
import data from "../data";
export const ProjectsSection = (): ReactElement => {
  return (
    <section className="grid grid-cols-1 w-full p-10">
      <Header title="Projects" center={true} />
      <div className="flex flex-col py-5">
        <div className="flex flex-col">
          {data.map((project, index) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
