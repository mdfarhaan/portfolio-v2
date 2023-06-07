import React from "react";

const Navbar = () => {
  const links = [
    {
      name: "About",
      href: "#",
    },
    {
      name: "Skills",
      href: "#",
    },
    {
      name: "Experience",
      href: "#",
    },
    {
      name: "Resume",
      href: "#",
    },
    {
      name: "Contact",
      href: "#",
    },
  ];

  return (
    <div className="text-blue-600 m-2 mr-10 flex justify-end">
      {links.map((link) => (
        <a
          key={link.name}
          href="#"
          className="font-medium text-xl px-3 hover:scale-125 transform transition-all duration-500 ease-in-out"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
