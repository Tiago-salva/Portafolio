import { useState } from "react";

export default function Nav() {
  const [navActive, setNavActive] = useState(false);

  const navLinks = [
    { title: "About me", href: "#about-me" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
  ];

  return (
    <nav className="relative bg-light-white w-screen lg:w-60 h-20 lg:h-auto z-20">
      <button
        className="absolute w-8 h-8 right-10 top-6 flex flex-col justify-evenly cursor-pointer z-30 lg:hidden"
        onClick={() => setNavActive(!navActive)}
      >
        {/* First line */}
        <span
          className={` ${
            navActive ? "rotate-45 translate-y-2" : ""
          } block h-1 w-full bg-blue rounded transition-all origin-center`}
        ></span>
        {/* Middle line */}
        <span
          className={` ${
            navActive ? "opacity-0" : ""
          } block h-1 w-full bg-blue rounded transition-all`}
        ></span>
        {/* Last line */}
        <span
          className={` ${
            navActive ? "-rotate-45 -translate-y-2.5" : ""
          } block h-1 w-full bg-blue rounded transition-all origin-center`}
        ></span>
      </button>
      <ul
        className={`${
          navActive ? "translate-y-20" : "-translate-y-30"
        } relative flex items-center lg:items-baseline bg-blue transition-transform lg:relative lg:translate-y-0 lg:bg-transparent lg:flex w-full justify-around lg:flex-col px-5 lg:p-0 lg:gap-3 z-0 shadow-2xl lg:shadow-none`}
      >
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="flex items-center items-origin-center group"
          >
            <div className="hidden lg:block w-8 h-0.5 bg-light-black mr-5 group-hover:w-12 group-hover:bg-blue transition-all"></div>
            <p className="text-[1.4rem] lg:text-2xl text-light-black group-hover:text-light-white transition-colors lg:group-hover:text-light-black">
              {link.title}
            </p>
          </a>
        ))}
      </ul>
    </nav>
  );
}
