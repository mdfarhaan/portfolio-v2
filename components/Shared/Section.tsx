import React from "react";

const Section = ({ children, id }) => {
  return (
    <section id={id} data-aos="fade-up" className="my-40">
      {children}
    </section>
  );
};

export default Section;
