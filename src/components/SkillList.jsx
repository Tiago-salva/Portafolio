export default function SkillList() {
  const skillList = [
    { name: "HTML", icon: "/public/icons/icons8-html.svg" },
    { name: "CSS", icon: "/public/icons/icons8-css.svg" },
    { name: "Javascript", icon: "/public/icons/icons8-javascript.svg" },
    { name: "React", icon: "/public/icons/icons8-react-native.svg" },
    { name: "PostgreSQL", icon: "/public/icons/icons8-postgresql.svg" },
    { name: "Prisma", icon: "/public/icons/icons8-prisma-orm.svg" },
    { name: "Tailwind", icon: "/public/icons/icons8-tailwind-css.svg" },
    { name: "Node.js", icon: "/public/icons/icons8-nodejs.svg" },
    { name: "Git", icon: "/public/icons/icons8-git.svg" },
    { name: "Excel", icon: "/public/icons/icons8-excel.svg" },
  ];

  return (
    <ul className="min-w-3/4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-15">
      {skillList.map((skill, index) => (
        <li
          key={index}
          className="bg-white border border-blue gap-4 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 rounded-xl p-10  flex flex-col items-center"
        >
          <img
            className="w-15 object-contain mx-auto"
            src={skill.icon}
            alt=""
          />
          <p className="text-2xl">{skill.name}</p>
        </li>
      ))}
    </ul>
  );
}
