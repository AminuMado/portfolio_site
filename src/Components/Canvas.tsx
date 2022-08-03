import React, { useRef, useEffect, useCallback } from "react";
import Circle from "../circle";
type circle = {
  draw: (ctx: CanvasRenderingContext2D) => void;
  update: (ctx: CanvasRenderingContext2D) => void;
};
const colorArray = ["#272F32", "#9DBDC6", "#DAEAEF", "#ACAD94", "#EDF7B5"];
// const colorArray = ["#EDF7B5", "#3C3C3B", "#9DBDC6", "#ACAD94"];

export const Canvas = () => {
  let circleArray: circle[] = [];
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update(ctx);
    }
    requestAnimationFrame(() => draw(ctx));
  }, []);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    requestAnimationFrame(() => draw(context));

    const handleResize = () => {
      context.canvas.height = window.innerHeight;
      context.canvas.width = window.innerWidth;
      circleArray = [];
      //Draw circles on resize
      for (let i = 0; i < 165; i++) {
        const randomNumber = Math.floor(Math.random() * 5);
        const randomXCoordinate = Math.random() * context.canvas.width;
        const randomYCoordinate = Math.random() * context.canvas.height;
        const randomRadius = Math.random() * 5;
        const randomTrueOrFalse = Math.floor(Math.random() * 2);
        circleArray.push(
          new Circle(
            randomXCoordinate,
            randomYCoordinate,
            randomRadius,
            colorArray[randomNumber],
            randomTrueOrFalse
          )
        );
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [draw]);

  return <canvas ref={canvasRef} />;
};
