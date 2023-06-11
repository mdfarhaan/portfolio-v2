import React from "react";
import Marquee from "react-easy-marquee";
import { Heading, Section } from "../Shared";
import { skills } from "../helper/data";

const Skills = () => {
  return (
    <Section id="skills-section">
      <Heading title="Skills" />
      <div className="w-[90%]">
        {skills.map((item, idx) => (
          <div key={item.section} className="mt-20 text-white">
            <h3 className="self-start text-3xl mb-10 tracking-widest font-normal">
              {item.section}
            </h3>
            <Marquee
              height="200px"
              reverse={idx % 2 == 0 ? true : false}
              duration={18000}
              align="center"
            >
              {item.skills.map((skill) => (
                <div className="grid place-items-center">
                  <img
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    className="w-20 mx-20 h-20"
                  />
                  <span className="text-lg font-light text-center mt-2">
                    {skill}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
