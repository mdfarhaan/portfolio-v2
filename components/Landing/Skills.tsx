import React from "react";
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "react-responsive";
import { Heading, Section } from "../Shared";
import { skills } from "../helper/data";

const Skills = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Section id="skills-section">
      <Heading title="Skills" />
      {skills.map((item, idx) => (
        <div key={item.section} className="mt-20 text-white">
          <h3 className="self-start text-3xl mb-10 tracking-widest font-normal">
            {item.section}
          </h3>
          <Marquee
            style={{ width: isMobile ? "150vw" : "80vw" }}
            direction={idx % 2 == 0 ? "left" : "right"}
          >
            {item.skills.map((skill) => (
              <div className="grid place-items-center" key={skill}>
                <img
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  className="w-20 md:mx-20 mx-10 h-20"
                />
                <span className="text-xl font-light text-center mt-2">
                  {skill}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      ))}
    </Section>
  );
};

export default Skills;
