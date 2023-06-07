import React from "react";
import Layout from "../Layout";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";

const Landing = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
    </Layout>
  );
};

export default Landing;
