import { ReactElement } from "react";
type ScrollingTextProps = {
  text: string;
  direction: string;
};

export const ScrollingText = ({
  text,
  direction,
}: ScrollingTextProps): ReactElement => {
  return (
    <div className={" scrollingtext_container w-[350px] md:w-[500px] h-[55px]"}>
      <span
        className={
          direction === "left" ? "scrollTextToLeft" : "scrollTextToRight"
        }
      >
        {Array(4).fill(text).join(" ")}
      </span>
    </div>
  );
};
