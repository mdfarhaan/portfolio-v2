import React from "react";
import { Heading, Section } from "../Shared";
import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";

const Card = ({ data, idx }) => {
  return (
    <div
      className={`mt-5 flex flex-col ${
        idx % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <Image
        src={"/screen.png"}
        className="md:w-1/2 w-full h-96 object-contain"
        width={100}
        height={100}
        alt="screen"
      />
      <div
        className={`z-10 flex h-96 text-white flex-col items-center justify-center ${
          idx % 2 == 0 ? "md:items-end" : "md:items-start"
        }`}
      >
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="bg-blue-500 my-5 text-xl w-[90%] p-5 rounded">
          {data.description}
        </p>
        <div>
          <div>
            {data.stack.map((item) => (
              <span key={item} className="text-lg font-light mx-2">
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
                  size={22}
                  className="my-2 cursor-pointer"
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
  const projectsArr = [
    {
      name: "Flow Cloud Share",
      image: "https://picsum.photos/200/300?image=1050",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque sodales laoreet. vel luctus justo. Nulla aliquet blandit odio, posuere gravida",
      github: "https://github.com",
      live: null,
      stack: ["React", "Mongo"],
    },
    {
      name: "Flow Cloud Share",
      image: "https://picsum.photos/200/300?image=1050",
      description:
        "A file sharing app built with React, Node, Express, and MongoDB",
      github: "https://github.com",
      live: null,
      stack: ["React", "Mongo"],
    },
  ];
  return (
    <Section>
      <Heading title="Projects" />
      <div className="w-[90%]">
        {projectsArr.map((project, idx) => (
          <Card data={project} key={project.name} idx={idx} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
