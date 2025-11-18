import { useState } from "react";

export default function Nav() {
  const [navActive, setNavActive] = useState(false);

  const navLinks = [
    { title: "About me", href: "#about-me" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
  ];

  return (
    <nav className="relative bg-white w-dvw h-20 md:w-60 z-20">
      <button
        className="absolute right-5 top-1 text-2xl cursor-pointer z-10 lg:hidden"
        onClick={() => setNavActive(!navActive)}
      >
        O
      </button>
      <ul
        className={`${
          navActive ? "translate-y-0" : "-translate-y-full"
        } absolute flex bg-blue left-0 h-20 transition-transform lg:relative lg:translate-y-0 lg:bg-transparent lg:flex w-dvw lg:w-full justify-around lg:flex-col px-5 lg:p-0 lg:gap-3 z-0`}
      >
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} className="flex items-center group">
            <div className="hidden lg:block w-8 h-0.5 bg-black mr-5 group-hover:w-12 group-hover:bg-blue-300 transition-all"></div>
            <p className="text-[1.4rem] lg:text-2xl group-hover:text-blue transition-colors lg:group-hover:text-black">
              {link.title}
            </p>
          </a>
        ))}
      </ul>
    </nav>
  );
}
