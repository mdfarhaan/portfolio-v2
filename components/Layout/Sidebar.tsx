import React from "react";
import { LuGithub, LuLinkedin, LuTwitter, LuMail } from "react-icons/lu";

const Sidebar = () => {
  return (
    <aside className="sm:flex hidden justify-between flex-col items-center w-20 fixed left-0 top-0 h-screen">
      <h1 className="text-white">MDF</h1>
      <div className="grid place-content-center place-items-center">
        <LuGithub
          color="#fff"
          size={28}
          className="my-2 cursor-pointer hover:scale-125 transform transition-all duration-500 ease-in-out"
        />
        <LuLinkedin
          color="#fff"
          size={28}
          className="my-2 cursor-pointer hover:scale-125 transform transition-all duration-500 ease-in-out"
        />
        <LuTwitter
          color="#fff"
          size={28}
          className="my-2 cursor-pointer hover:scale-125 transform transition-all duration-500 ease-in-out"
        />
        <LuMail
          color="#fff"
          size={28}
          className="my-2 cursor-pointer hover:scale-125 transform transition-all duration-500 ease-in-out"
        />
        <div className="w-1 rounded-xl h-40 mt-2 bg-white"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
