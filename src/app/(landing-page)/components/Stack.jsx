"use client";
import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiOpenai } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const stackItems = [
  { id: 1, name: "Postgresql", icons: BiLogoPostgresql, color: "#61DAFB" },
  { id: 2, name: "Open Ai", icons: SiOpenai, color: "#000000" },
  { id: 3, name: "React", icons: FaReact, color: "#3178C6" },
  { id: 4, name: "Nextjs", icons: RiNextjsFill, color: "#000000" },
  { id: 5, name: "Github", icons: FaGithub, color: "#000000" },
];

const Stack = () => {
  return (
    <section id="stack" className="py-36 my-10 glass">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl text-primary-500 font-bold mb-6">My Stack</h2>
        <div className="grid sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 ">
          {stackItems.map((item) => (
            <div
              className="flex items-center justify-center flex-col rounded-xl p-4"
              key={item.id}
            >
              <div className="mb-4 bg-white/10 hover:bg-primary-500/20 p-6 rounded-xl flex items-center justify-center group">
                {React.createElement(item.icons, {
                  className: "w-8 h-8 transition-colors duration-300",
                  style: { color: item.color },
                })}
              </div>

              <p className="text-gray-300 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
