export default function SkillList() {
  const skillList = [
    { name: "HTML", icon: "/public/icons/html5-icon.svg" },
    { name: "CSS", icon: "/public/icons/css3-icon.svg" },
    { name: "Javascript", icon: "/public/icons/javascript-icon.svg" },
    { name: "React", icon: "/public/icons/react-icon.svg" },
    { name: "PostgreSQL", icon: "/public/icons/postgresql-icon.svg" },
    { name: "Prisma", icon: "/public/icons/prisma-icon.svg" },
    { name: "Tailwind", icon: "/public/icons/tailwind-css-icon.svg" },
    { name: "Node.js", icon: "/public/icons/node-js-icon.svg" },
    { name: "Git", icon: "/public/icons/git-icon.svg" },
    { name: "Excel", icon: "/public/icons/excel-icon.svg" },
  ];

  return (
    <ul className="min-w-3/4 grid grid-cols-300px gap-15">
      {skillList.map((skill, index) => (
        <li
          key={index}
          className="flex items-center gap-8 p-5 bg-blue-200 rounded-lg shadow-md "
        >
          <img className="w-20 h-20 object-contain" src={skill.icon} alt="" />
          <p className="text-2xl">{skill.name}</p>
        </li>
      ))}
    </ul>
  );
}
