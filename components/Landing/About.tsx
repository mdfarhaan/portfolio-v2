import React from "react";
import { Heading, Section } from "../Shared";

const About = () => {
  return (
    <Section id="about-me-section">
      <Heading title="About Me" />
      <p className="text-2xl text-white w-[90%] mt-10">
        A passionate student pursuing Computer Science and Engineering at SRM
        University, Chennai. My area of expertise lies in
        <span className="text-blue-500"> Full Stack Development, </span>
        with a particular focus on the MERN Stack. As a Full Stack Developer
        I've worked on multiple projects ranging from simple landing pages to
        more complex dashboards and web application.
      </p>
      <br />
      <p className="text-2xl text-white w-[90%] mt-10">
        I find myself particularly drawn to the intricacies and challenges that
        lie within the <span className="text-blue-500">Backend</span> realm and
        the realm of <span className="text-blue-500">Cloud</span>. Delving into
        backend development allows me to dive deep into the architecture and
        functionality that powers web applications. I thrive on constructing
        robust server-side logic, designing efficient databases, and ensuring
        the smooth flow of data within web applications. Additionally, my
        expertise in cloud platforms empowers me to leverage their capabilities,
        enabling the creation of scalable, resilient, and cost-effective
        solutions. By combining backend development and cloud technologies, I am
        well-equipped to deliver high-performance applications that meet the
        evolving demands of the industry.
      </p>
      <p className="text-2xl text-white w-[90%] mt-10">
        In addition to my technical expertise I have demonstrated leadership
        skills by leading and mentoring teams in various college clubs. Through
        these experiences, I developed effective{" "}
        <span className="text-blue-500">
          communication, teamwork, and decision-making skills
        </span>
        . My combination of technical skills and leadership skills positions me
        to make a positive impact in technology.
      </p>
    </Section>
  );
};

export default About;
