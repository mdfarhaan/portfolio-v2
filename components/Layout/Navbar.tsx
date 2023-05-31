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
    <div className="text-primary m-2 mr-10 flex justify-end">
      {links.map((link) => (
        <a href="#" className="font-medium text-xl px-3">
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
