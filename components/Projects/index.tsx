import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Layout from "../Layout";
import { Button } from "../Shared";
import Card from "./Card";

const Project = () => {
  const projectsArr = [
    {
      name: "Flow Cloud Share",
      image: "https://picsum.photos/200/300?image=1050",
      description:
        "A file sharing app built with React, Node, Express, and MongoDB",
      github: "https://github.com",
      live: "",
      stack: ["React", "Mongo"],
    },
  ];

  return (
    <Layout>
      <div className="w-[90%] my-20 text-white text-center">
        <h1 className="text-5xl">Projects I've Built</h1>
        <div className="flex justify-evenly mt-10 w-full">
          <Button text="All" />
          <Button text="Frontend" varient={"secondary"} />
          <Button text="Backend" varient={"secondary"} />
          <Button text="Apps" varient={"secondary"} />
        </div>
        <div className="m-5">
          <Masonry columnsCount={projectsArr.length} gutter="10px">
            {projectsArr.map((project) => (
              <Card data={project} key={project.name} />
            ))}
          </Masonry>
        </div>
      </div>
    </Layout>
  );
};

export default Project;
