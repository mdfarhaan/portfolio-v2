import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { LuGithub } from "react-icons/lu";
import Tilt from "react-parallax-tilt";

const Card = ({ data }) => {
  return (
    <Tilt>
      <div className="text-white text-start bg-secondary w-72 rounded-lg">
        {data.image && (
          <img
            src={data.image}
            alt={data.name}
            className="w-full object-contain rounded-t-lg"
          />
        )}
        <div className="p-3">
          <h1 className="text-2xl font-bold">{data.name}</h1>
          <p className="text-xl font-normal my-5">{data.description}</p>
          <div className="flex items-center justify-between">
            <div className="grid grid-cols-3">
              {data.stack.map((item) => (
                <p className="text-md font-light mx-1" key={item}>
                  {item}
                </p>
              ))}
            </div>
            <div className="flex items-center justify-end">
              {data.github && (
                <HiOutlineExternalLink
                  color="#fff"
                  size={22}
                  className="mx-2 cursor-pointer"
                />
              )}
              {data.live && (
                <LuGithub
                  color="#fff"
                  size={22}
                  className="my-2 cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
