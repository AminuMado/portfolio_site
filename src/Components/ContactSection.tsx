import React, { ReactElement } from "react";
import { Header } from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const ContactSection = (): ReactElement => {
  return (
    <div className="flex flex-col w-full text-primary-color">
      <Header title="Contact" center={true} />
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 items-center justify-evenly">
          <p>Write me an email at:</p>
          <h1 className="text-xl md:text-3xl">aminumukhtarmado@gmail.com</h1>
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
    </div>
  );
};
