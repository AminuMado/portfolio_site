import React, { ReactElement } from "react";

type Props = {
  title: string;
  center: boolean;
};

export const Header = ({ title, center }: Props): ReactElement => {
  return (
    <header className="grid grid-cols-1 w-full p-10 text-primary-color">
      <div className="flex items-center w-full">
        {center && (
          <div className="flex-shrink flex-grow h-px bg-loading-color" />
        )}
        <h1 className="mx-10 text-3xl">{title}</h1>
        <div className="flex-shrink flex-grow h-px bg-loading-color" />
      </div>
    </header>
  );
};
