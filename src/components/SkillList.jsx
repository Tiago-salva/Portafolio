import Html from "../assets/icons/icons8-html.svg?react";
import Css from "../assets/icons/icons8-css.svg?react";
import Javascript from "../assets/icons/icons8-javascript.svg?react";
import React from "../assets/icons/icons8-react-native.svg?react";
import Postgresql from "../assets/icons/icons8-postgresql.svg?react";
import Prisma from "../assets/icons/icons8-prisma-orm.svg?react";
import Tailwind from "../assets/icons/icons8-tailwind-css.svg?react";
import Nodejs from "../assets/icons/icons8-nodejs.svg?react";
import Git from "../assets/icons/icons8-git.svg?react";
import Excel from "../assets/icons/icons8-excel.svg?react";

export default function SkillList() {
  const skillList = [
    { name: "HTML", Icon: Html },
    { name: "CSS", Icon: Css },
    { name: "Javascript", Icon: Javascript },
    { name: "React", Icon: React },
    { name: "PostgreSQL", Icon: Postgresql },
    { name: "Prisma", Icon: Prisma },
    { name: "Tailwind", Icon: Tailwind },
    { name: "Node.js", Icon: Nodejs },
    { name: "Git", Icon: Git },
    { name: "Excel", Icon: Excel },
  ];

  return (
    <ul className="w-full lg:min-w-3/4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] p-8 lg:p-0 gap-10 lg:gap-15">
      {skillList.map(({ name, Icon }, index) => (
        <li
          key={index}
          className="bg-light-white border border-blue gap-4 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 rounded-xl p-10  flex flex-col items-center"
        >
          <Icon className="w-15 h-15 text-black dark:text-light-black fill-current" />
          <p className="text-2xl">{name}</p>
        </li>
      ))}
    </ul>
  );
}
