import React from "react";
import { Heading, Section, Button } from "../Shared";
import Link from "next/link";

const Contact = () => {
  return (
    <Section>
      <Heading title="Get in Touch" />
      <div className="w-[90%]">
        <p className="lg:text-2xl text-xl text-white  my-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pellentesque sodales laoreet.
          <span className="text-blue-500">Sed sit amet bibendum nibh,</span> vel
          luctus justo. Nulla aliquet blandit odio, posuere gravida arcu
          malesuada vitae. Curabitur scelerisque nibh arcu, luctus ullamcorper
          urna mollis eu.
        </p>
        <div className="w-full flex justify-center">
          <Link className="mx-3" href="mailto:farhaanm110@gmail.com">
            <Button text="Send a Mail" />
          </Link>
          <Link className="mx-3" href="">
            <Button text="Schedule a Meet" varient="secondary" />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
