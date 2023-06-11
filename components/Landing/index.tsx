import React from "react";
import Layout from "../Layout";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Landing = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Landing;
