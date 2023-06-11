import React, { useEffect } from "react";

const Section = ({ children }) => {
  return (
    <section data-aos="fade-up" className="my-40">
      {children}
    </section>
  );
};

export default Section;
