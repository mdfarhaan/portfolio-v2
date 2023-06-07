import React from "react";
import { Button, Heading } from "../Shared";

const Hero = () => {
  return (
    <div className="lg:mt-40 mt-28 text-start w-fit">
      <p className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-3xl lg:text-5xl font-bold text-transparent">
        Hi, my name is
      </p>
      <h1 className="text-white text-4xl lg:text-7xl font-bold my-3">
        Mohammed Farhaan
      </h1>
      <p className="text-white text-xl lg:text-3xl font-light">
        Full Stack Developer
      </p>
      <div className="flex mt-8">
        <Button
          text={"Contact"}
          onClick={() => console.log("Click")}
          style={{ marginRight: 10 }}
        />
        <Button
          text={"Resume"}
          varient="secondary"
          onClick={() => console.log("Click")}
        />
      </div>
    </div>
  );
};

export default Hero;