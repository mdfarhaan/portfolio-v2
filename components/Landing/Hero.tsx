import React from "react";
import Link from "next/link";
import { Button } from "../Shared";
import { Link as ScrollLink } from "react-scroll";

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
        <ScrollLink
          activeClass="active"
          to="contact-section"
          spy={true}
          smooth={true}
          offset={-250}
          duration={700}
        >
          <Button text={"Contact"} style={{ marginRight: 10 }} />
        </ScrollLink>
        <Link href="resume.pdf" target="_blank">
          <Button text={"Resume"} varient="secondary" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
