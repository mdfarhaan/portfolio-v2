import React from "react";
import { Heading, Section } from "../Shared";
import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import { LuGithub } from "react-icons/lu";

const Card = (props) => {
  return (
    <div className="mt-5 flex relative">
      <Image
        src={"/screen.png"}
        className="w-1/2 h-96 absolute top-0 left-0 z-0 object-contain"
        width={100}
        height={100}
        alt="screen"
      />
      <div className="z-10 flex h-96 text-white flex-col items-end justify-center">
        <h1 className="text-3xl font-bold">Flow</h1>
        <p className="bg-blue-500 w-[60%] my-5 text-lg p-5 rounded">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pellentesque sodales laoreet. vel luctus justo. Nulla aliquet blandit
          odio, posuere gravida
        </p>
        <div>
          <div>
            <span className="text-lg font-light mx-2">React</span>
            <span className="text-lg font-light mx-2">MongoDb</span>
            <span className="text-lg font-light mx-2">NodeJS</span>
          </div>
          <div className="flex items-center justify-end">
            <HiOutlineExternalLink
              color="#fff"
              size={22}
              className="mx-2 cursor-pointer"
            />
            <LuGithub color="#fff" size={22} className="my-2 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <Section>
      <Heading title="Projects" />
      <div className="w-[90%]">
        <Card />
      </div>
    </Section>
  );
};

export default Projects;
