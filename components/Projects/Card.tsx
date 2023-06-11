import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { LuGithub } from "react-icons/lu";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <div className="w-full m-5">
      <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
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
            <p className="text-lg font-normal my-5">{data.description}</p>
            <div className="flex items-center justify-between">
              <div className="grid grid-cols-3 gap-1">
                {data.stack.map((item) => (
                  <p className="text-md font-light" key={item}>
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex items-center justify-end">
                {data.github && (
                  <Link href={data.github} target="_blank" rel="noopener">
                    <LuGithub
                      color="#fff"
                      size={22}
                      className="my-2 cursor-pointer"
                    />
                  </Link>
                )}
                {data.live && (
                  <Link href={data.live} target="_blank" rel="noopener">
                    <HiOutlineExternalLink
                      color="#fff"
                      size={22}
                      className="mx-2 cursor-pointer"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Card;
