import React from "react";
import { Heading, Section } from "../Shared";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const skillsList = [
    {
      section: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python"],
    },
    {
      section: "Frontend",
      skills: ["HTML", "CSS", "ReactJS", "NextJS", "Tailwind", "Figma"],
    },
    {
      section: "Backend",
      skills: ["NodeJS", "ExpressJS", "MongoDB", "Firebase"],
    },
  ];

  return (
    <Section>
      <Heading title="Skills" />
      <div className="w-fit overflow-auto">
        {skillsList.map((item, idx) => (
          <div key={item.section} className="mt-20 text-white">
            <h3 className="self-start text-3xl mb-10 tracking-widest font-normal">
              {item.section}
            </h3>
            <div className="">
              <Marquee
                autoFill={false}
                direction={idx % 2 == 0 ? "left" : "right"}
              >
                {item.skills.map((skill) => (
                  <div className="grid place-items-center">
                    <img
                      src={`/skills/${skill}.svg`}
                      alt={skill}
                      className="w-20 mx-10 h-20"
                    />
                    <span className="text-lg font-light text-center mt-2">
                      {skill}
                    </span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
