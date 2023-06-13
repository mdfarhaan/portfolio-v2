import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Layout from "../Layout";
import Card from "./Card";
import { projects } from "../helper/data";

const Project = () => {
  return (
    <Layout>
      <div className="w-[90%] my-20 text-white text-center">
        <h1 className="text-5xl font-bold mb-10">Projects I've Built</h1>
        {/* <div className="flex justify-evenly mt-10 w-full">
          <Button text="All" />
          <Button text="Frontend" varient={"secondary"} />
          <Button text="Backend" varient={"secondary"} />
          <Button text="Apps" varient={"secondary"} />
        </div> */}
        <ResponsiveMasonry
          className=""
          columnsCountBreakPoints={{ 350: 1, 780: 2, 1150: 3 }}
        >
          <Masonry className="w-fit flex justify-center" gutter="20px">
            {projects.map((project) => (
              <Card data={project} key={project.name} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </Layout>
  );
};

export default Project;
