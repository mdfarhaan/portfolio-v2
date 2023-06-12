import React from "react";
import Link from "next/link";
import { LuGithub, LuLinkedin, LuTwitter, LuMail } from "react-icons/lu";
import { socials } from "../helper/data";

const Sidebar = () => {
  return (
    <aside className="flex justify-between flex-col items-center w-20 fixed left-0 top-0 h-full">
      <Link href="/">
        <h1 className="m-3 ml-5 text-3xl text-white">MDF</h1>
      </Link>

      <div className="grid place-content-center place-items-center">
        <Link href={socials.github} target="_blank" rel="noopener">
          <LuGithub
            color="#fff"
            size={28}
            className="my-2 cursor-pointer hover:scale-125 transform transition-all duration-500 ease-in-out"
          />
        </Link>
        <Link href={socials.linkedin} target="_blank" rel="noopener">
          <LuLinkedin
            color="#fff"
            size={28}
            className="my-2 cursor-pointer hover:scale-125 transform transition-all duration-500 ease-in-out"
          />
        </Link>
        <Link href={socials.twitter} target="_blank" rel="noopener">
          <LuTwitter
            color="#fff"
            size={28}
            className="my-2 cursor-pointer hover:scale-125 transform transition-all duration-500 ease-in-out"
          />
        </Link>
        <Link href={`mailto:${socials.mail}`} target="_blank" rel="noopener">
          <LuMail
            color="#fff"
            size={28}
            className="my-2 cursor-pointer hover:scale-125 transform transition-all duration-500 ease-in-out"
          />
        </Link>

        <div className="w-1 rounded-xl h-40 mt-2 bg-white"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
