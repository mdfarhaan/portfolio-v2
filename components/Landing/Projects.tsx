import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import { LuGithub } from "react-icons/lu";
import { Heading, Section, Button } from "../Shared";
import { featuredProjects } from "../helper/data";

const Card = ({ data, idx }) => {
  return (
    <div
      className={`mt-5 flex flex-col justify-center items-center ${
        idx % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <Image
        src={data.image}
        className="md:w-[60%] w-full mr-5"
        width={500}
        height={500}
        alt="screen"
      />
      <div
        className={`flex md:w-1/2 w-full mt-10 text-white flex-col items-center justify-center ${
          idx % 2 == 0 ? "md:items-end" : "md:items-start"
        }`}
      >
        <h1 className="lg:text-3xl md:text-xl text-3xl font-bold">
          {data.name}
        </h1>
        <p className="bg-blue-500 my-5 lg:text-lg md:text-sm w-full text-xl md:w-[90%] p-5 rounded">
          {data.description}
        </p>
        <div>
          <div className="">
            {data.stack.map((item) => (
              <span
                key={item}
                className="bg-secondary py-1 px-3 rounded lg:text-lg text-xl font-light mx-2"
              >
                {item}
              </span>
            ))}
          </div>
          <div
            className={`flex items-center mx-2 justify-center ${
              idx % 2 == 0 ? "md:justify-end" : "md:justify-start"
            }`}
          >
            {data.github && (
              <Link href={data.github} target="_blank" rel="noopener">
                <LuGithub
                  color="#fff"
                  size={28}
                  className="my-2 mt-4 cursor-pointer"
                />
              </Link>
            )}
            {data.live && (
              <Link href={data.live} target="_blank" rel="noopener">
                <HiOutlineExternalLink
                  color="#fff"
                  size={22}
                  className="mx-2 cursor-pointer"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <Section id="projects-section">
      <Heading title="Projects" />
      <div className="w-[90%]">
        {featuredProjects.map((project, idx) => (
          <Card data={project} key={project.name} idx={idx} />
        ))}
      </div>
      <Link
        className="mt-20 grid place-content-center w-[90%]"
        href="/projects"
      >
        <Button text="Show Me More" />
      </Link>
    </Section>
  );
};

export default Projects;
