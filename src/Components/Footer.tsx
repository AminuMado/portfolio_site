import React, { ReactElement } from "react";
import { Loader2 } from "./Loader";

export const Footer = (): ReactElement => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-primary-color w-full mt-24 text-xl md:text-2xl px-8 ">
      <div className=" flex flex-col md:flex-row  md:gap-8 flex-wrap justify-center items-center border-t-[1px] py-11 px-8">
        <span>© {currentYear} AminuMado </span>
        <Loader2 />
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
};
