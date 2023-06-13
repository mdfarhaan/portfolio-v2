import React from "react";
import Layout from "../Layout";
import Card from "./Card";
import { projects } from "../helper/data";

const Project = () => {
  return (
    <Layout>
      <div className="md:w-[90%] w-[80%] my-20 text-white text-center grid place-items-center place-content-center ">
        <h1 className="md:text-5xl text-3xl font-bold mb-10">
          Projects I've Built
        </h1>
        {/* <div className="flex justify-evenly mt-10 w-full">
          <Button text="All" />
          <Button text="Frontend" varient={"secondary"} />
          <Button text="Backend" varient={"secondary"} />
          <Button text="Apps" varient={"secondary"} />
        </div> */}

        <div className="lg:columns-3 md:columns-2 columns-1">
          {projects.map((project) => (
            <Card data={project} key={project.name} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Project;
