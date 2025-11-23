import Linkedin from "../assets/icons/linkedin-brands-solid-full.svg?react";
import Github from "../assets/icons/github-brands-solid-full.svg?react";

export default function Footer({ className }) {
  return (
    <footer className={`${className}`}>
      <ul className="flex justify-center items-center gap-10 lg:gap-3">
        <li className="group w-15">
          <a href="https://github.com/Tiago-salva">
            <Github className="w-14 lg:w-full group-hover:text-blue transition-all dark:text-light-black fill-current" />
          </a>
        </li>
        <li className="group w-15">
          <a href="https://www.linkedin.com/in/tiago-salvatierra-71a70a384/">
            <Linkedin className="w-14 lg:w-full group-hover:text-blue transition-all dark:text-light-black fill-current" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
