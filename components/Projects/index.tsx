import React from "react";
import Layout from "../Layout";
import Card from "./Card";
import { projects } from "../helper/data";
import Link from "next/link";

const Project = () => {
  return (
    // <Layout>
    <>
      <Link href="/">
        <h1 className="mt-3 ml-5 text-3xl text-white">MDF</h1>
      </Link>
      <div className="my-10 text-white text-center grid place-items-center place-content-center ">
        <h1 className="md:text-5xl text-3xl font-bold mb-10">
          Projects I've Built
        </h1>
        {/* <div className="flex justify-evenly mt-10 w-full">
          <Button text="All" />
          <Button text="Frontend" varient={"secondary"} />
          <Button text="Backend" varient={"secondary"} />
          <Button text="Apps" varient={"secondary"} />
        </div> */}

        <div className="lg:columns-3 md:columns-2 columns-1 gap-7">
          {projects.map((project) => (
            <Card data={project} key={project.name} />
          ))}
        </div>
      </div>
    </>
    // </Layout>
  );
};

export default Project;
