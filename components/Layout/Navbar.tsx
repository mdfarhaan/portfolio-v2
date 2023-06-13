import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = [
    {
      name: "About",
      id: "about-me-section",
    },
    {
      name: "Skills",
      id: "skills-section",
    },
    {
      name: "Experience",
      id: "experience-section",
    },
    {
      name: "Projects",
      id: "projects-section",
    },
    {
      name: "Contact",
      id: "contact-section",
    },
  ];

  return (
    <div className="md:flex hidden text-blue-600 m-2 mt-5 mr-10 justify-end">
      {links.map((link) => (
        <Link
          key={link}
          activeClass="active"
          to={link.id}
          spy={true}
          smooth={true}
          offset={-250}
          duration={700}
          className="font-medium text-xl cursor-pointer px-3 hover:scale-125 transform transition-all duration-500 ease-in-out"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
