import { ReactElement } from "react";
import { Header } from "./Header";
type SkillsSectionProps = {
  theme: "light" | "dark";
};
export const SkillsSection = ({ theme }: SkillsSectionProps): ReactElement => {
  const isColored = theme === "light" ? "" : "colored";
  return (
    <section className="grid grid-cols-1 w-full p-10 text-primary-color">
      <Header title="Skills & Tools" center={true} />
      <div className="flex flex-wrap justify-evenly p-5 gap-5 text-xl">
        <div className="flex flex-col flex-grow flex-shrink items-center ">
          <h1>Front-end</h1>
          <div className="flex flex-col w-[335px] h-[400px] mt-4 mb-7 p-5 bg-card-color rounded-xl gap-3">
            <div className="flex flex-grow flex-shrink justify-between px-5">
              <div className="flex flex-col basis-1/5 items-center gap-1 hover:scale-105">
                <i className={`text-5xl devicon-html5-plain ${isColored}`}></i>
                <span className="text-sm">HTML</span>
              </div>
              <div className="flex flex-col basis-1/5 items-center gap-1 hover:scale-105">
                <i className={`text-5xl devicon-css3-plain ${isColored}`}></i>
                <span className="text-sm">CSS</span>
              </div>
              <div className="flex flex-col basis-1/5 items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl devicon-sass-original ${isColored}`}
                ></i>
                <span className="text-sm">SASS</span>
              </div>
            </div>
            <div className="flex flex-grow flex-shrink justify-evenly px-5 ">
              <div className="flex flex-col basis-1/5 items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl basis-1/5 devicon-javascript-plain ${isColored}`}
                ></i>
                <span className="text-sm">JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl basis-1/5 devicon-typescript-plain ${isColored}`}
                ></i>
                <span className="text-sm">TypeScript</span>
              </div>
            </div>
            <div className="flex flex-grow flex-shrink justify-between px-5 ">
              <div className="flex flex-col items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl basis-1/5 devicon-react-original ${isColored}`}
                ></i>
                <span className="text-sm">React</span>
              </div>
              <div className="flex flex-col items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl basis-1/5 devicon-redux-original ${isColored}`}
                ></i>
                <span className="text-sm">Redux</span>
              </div>
              <div className="flex flex-col items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl basis-1/5 devicon-tailwindcss-plain ${isColored}`}
                />
                <span className="text-sm">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow flex-shrink items-center">
          <h1>Back-end</h1>
          <div className="flex flex-col w-[335px] h-[400px] mt-4 mb-7 p-5 bg-card-color rounded-xl gap-3">
            <div className="flex flex-grow flex-shrink justify-evenly px-5 ">
              <div className="flex flex-col items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl basis-1/5 devicon-nodejs-plain ${isColored} icon`}
                ></i>
                <span className="text-sm">NodeJs</span>
              </div>
              <div className="flex flex-col items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl basis-1/5 devicon-express-original ${isColored}`}
                ></i>
                <span className="text-sm">Express</span>
              </div>
            </div>
            <div className="flex flex-grow flex-shrink justify-evenly px-5 ">
              <div className="flex flex-col basis-1/5 items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl basis-1/5 devicon-javascript-plain ${isColored}`}
                ></i>
                <span className="text-sm">JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl basis-1/5 devicon-typescript-plain ${isColored}`}
                ></i>
                <span className="text-sm">TypeScript</span>
              </div>
            </div>
            <div className="flex flex-grow flex-shrink justify-evenly px-5 ">
              <div className="flex flex-col items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl basis-1/5 devicon-mongodb-plain ${isColored} icon`}
                ></i>
                <span className="text-sm">MongoDB</span>
              </div>

              <div className="flex flex-col items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl basis-1/5 devicon-jest-plain ${isColored} icon`}
                ></i>
                <span className="text-sm">Jest</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow flex-shrink items-center">
          <h1>Miscelleneous</h1>
          <div className="flex flex-col w-[335px] h-[400px] mt-4 mb-7 p-5 bg-card-color rounded-xl gap-3">
            <div className="flex flex-grow flex-shrink justify-evenly px-5 ">
              <div className="flex flex-col items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl basis-1/5 devicon-git-plain ${isColored} icon`}
                ></i>
                <span className="text-sm">GIT</span>
              </div>
              <div className="flex flex-col items-center gap-1 hover:scale-105">
                <i className={`text-5xl basis-1/5 devicon-github-original`}></i>
                <span className="text-sm">Github</span>
              </div>
            </div>
            <div className="flex flex-grow flex-shrink justify-evenly px-5 ">
              <div className="flex flex-col items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl basis-1/5 devicon-firebase-plain ${isColored} icon`}
                ></i>
                <span className="text-sm">Firebase</span>
              </div>

              <div className="flex flex-col items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl basis-1/5 devicon-webpack-plain ${isColored} icon`}
                ></i>
                <span className="text-sm">Webpack</span>
              </div>
            </div>
            <div className="flex flex-grow flex-shrink justify-evenly px-5 ">
              <div className="flex flex-col items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl basis-1/5 devicon-heroku-plain ${isColored} icon`}
                ></i>
                <span className="text-sm">Heroku</span>
              </div>
              <div className="flex flex-col items-center gap-1 hover:scale-105">
                <i
                  className={`text-5xl basis-1/5 devicon-npm-original-wordmark ${isColored} icon`}
                ></i>
                <span className="text-sm">NPM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
