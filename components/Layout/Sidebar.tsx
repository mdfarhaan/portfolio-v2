import React from "react";
import Link from "next/link";
import { IconContext } from "react-icons";
import { useMediaQuery } from "react-responsive";
import { LuGithub, LuLinkedin, LuTwitter, LuMail } from "react-icons/lu";
import { socials } from "../helper/data";

const Sidebar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <aside className="flex justify-between flex-col items-center w-20 fixed left-0 top-0 h-full">
      <Link href="/">
        <h1 className="m-3 ml-5 text-3xl text-white">MDF</h1>
      </Link>

      <div className="grid md:ml-0 ml-4 place-content-center place-items-center">
        <IconContext.Provider value={{ size: isMobile ? "50" : "30" }}>
          <Link href={socials.github} target="_blank" rel="noopener">
            <LuGithub
              color="#fff"
              className="my-2 cursor-pointer hover:scale-125 transform transition-all duration-500 ease-in-out"
            />
          </Link>
          <Link href={socials.linkedin} target="_blank" rel="noopener">
            <LuLinkedin
              color="#fff"
              className="my-2 cursor-pointer hover:scale-125 transform transition-all duration-500 ease-in-out"
            />
          </Link>
          <Link href={socials.twitter} target="_blank" rel="noopener">
            <LuTwitter
              color="#fff"
              className="my-2 cursor-pointer hover:scale-125 transform transition-all duration-500 ease-in-out"
            />
          </Link>
          <Link href={`mailto:${socials.mail}`} target="_blank" rel="noopener">
            <LuMail
              color="#fff"
              className="my-2 cursor-pointer hover:scale-125 transform transition-all duration-500 ease-in-out"
            />
          </Link>
        </IconContext.Provider>

        <div className="w-1 rounded-xl h-40 mt-2 bg-white"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
