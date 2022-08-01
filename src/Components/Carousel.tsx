import { ReactElement, useState } from "react";

type CarouselProps = {
  photo: string;
  gif: string;
};
export const Carousel = ({ photo, gif }: CarouselProps): ReactElement => {
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
          <img src={photo} className="" alt="..." />
        </div>
        <div className={`carousel-item ${isActive === 1 ? "active" : ""}`}>
          <img src={gif} className="" alt="..." />
        </div>
      </div>
    </div>
  );
};
