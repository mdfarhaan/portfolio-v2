import React from "react";
import "aos/dist/aos.css";

const Heading = ({ title }) => {
  return (
    <>
      <p className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-3xl lg:text-5xl font-bold text-transparent">
        {title}
      </p>
    </>
  );
};

export default Heading;
