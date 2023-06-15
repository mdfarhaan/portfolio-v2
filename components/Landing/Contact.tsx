import React from "react";
import { Heading, Section, Button } from "../Shared";
import Link from "next/link";

const Contact = () => {
  return (
    <Section id="contact-section">
      <Heading title="Get in Touch" />
      <div className="w-[90%]">
        <p className="text-2xl text-white  my-10">
          <span className="text-blue-500"> Lets Connect!</span> Feel free to
          reach out to me via email or schedule a quick meet!!
        </p>
        <div className="w-full flex md:flex-row flex-col items-center justify-center">
          <Link
            className="mx-3 md:mb-0 mb-10"
            href="mailto:farhaanm110@gmail.com"
          >
            <Button text="Send a Mail" />
          </Link>
          <Link
            className="mx-3"
            href="https://cal.com/mdfarhaan/discovery-chat"
            target="_blank"
          >
            <Button text="Schedule a Meet" varient="secondary" />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
