import { Canvas } from "./Canvas";

export const Landing = () => {
  return (
    <div className="landing_text relative">
      <Canvas />
      <div className="absolute top-1/3 text-primary-color p-5 m-5">
        <h1 className=" text-5xl md:text-7xl my-2 py-2">Aminu Mukhtar Mado</h1>
        <p className=" text-2xl md:text-5xl my-2 py-2">Full-stack Developer</p>
      </div>
    </div>
  );
};
