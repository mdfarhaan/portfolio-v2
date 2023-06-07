import React from "react";
import { Heading, Section } from "../Shared";

const About = () => {
  return (
    <Section>
      <Heading title="About Me" />
      <p className="lg:text-2xl text-xl text-white w-[90%] my-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pellentesque sodales laoreet.
        <span className="text-blue-600">Sed sit amet bibendum nibh,</span> vel
        luctus justo. Nulla aliquet blandit odio, posuere gravida arcu malesuada
        vitae. Curabitur scelerisque nibh arcu, luctus ullamcorper urna mollis
        eu.
        <br />
        <br />
        Aenean posuere nibh ut nunc sodales, vestibulum maximus massa sagittis.
        Nullam lobortis eleifend est, sed pretium sapien semper sed. Fusce vel
        dictum massa, vel finibus diam. Aliquam id condimentum nibh. Etiam
        tempus ex ac rhoncus commodo.
        <span className="text-blue-600">
          Ut ac purus et nisl pulvinar venenatis.
        </span>
        Mauris porta leo et semper ornare. Vestibulum dignissim libero vel
        volutpat imperdiet. Donec ultricies et sem et tincidunt.
      </p>
    </Section>
  );
};

export default About;
