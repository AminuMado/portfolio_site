import { ReactElement, useState } from "react";
import img_Src from "../Assets/comingsoon.gif";
import img_Src1 from "../Assets/comingsoon1.gif";
export const Carousel = (): ReactElement => {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="carousel">
      <div className="carousel-indicators">
        <button
          onClick={() => setIsActive(0)}
          className={isActive === 0 ? "active" : ""}
        ></button>
        <button
          onClick={() => setIsActive(1)}
          className={isActive === 1 ? "active" : ""}
        ></button>
      </div>
      <div className="carousel-inner">
        <div className={`carousel-item ${isActive === 0 ? "active" : ""}`}>
          <img src={img_Src} className="" alt="..." />
        </div>
        <div className={`carousel-item ${isActive === 1 ? "active" : ""}`}>
          <img src={img_Src1} className="" alt="..." />
        </div>
      </div>
    </div>
  );
};
