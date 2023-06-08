import React from "react";
import Layout from "../Layout";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import SKills from "./Skills";

const Landing = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <SKills />
      <Experience />
      <Projects />
    </Layout>
  );
};

export default Landing;
