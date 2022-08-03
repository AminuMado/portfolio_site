import React, { ReactElement } from "react";
import { ScrollingText } from "../Utils";
import { Header } from "./Header";

export const AboutSection = (): ReactElement => {
  return (
    <section className="grid grid-cols-1 w-full p-10 text-primary-color">
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
    </section>
  );
};
