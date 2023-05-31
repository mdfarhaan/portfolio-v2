import React from "react";
import { LuGithub, LuLinkedin, LuTwitter, LuMail } from "react-icons/lu";

const Sidebar = () => {
  return (
    <aside className="flex justify-between flex-col items-center w-20 fixed left-0 top-0 h-screen">
      <h1 className="text-white">MDF</h1>
      <div className="grid place-content-center place-items-center">
        <LuGithub color="#fff" size={28} className="my-2 cursor-pointer" />
        <LuLinkedin color="#fff" size={28} className="my-2 cursor-pointer" />
        <LuTwitter color="#fff" size={28} className="my-2 cursor-pointer" />
        <LuMail color="#fff" size={28} className="my-2 cursor-pointer" />
        <div className="w-1 rounded-xl h-40 mt-2 bg-white"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
