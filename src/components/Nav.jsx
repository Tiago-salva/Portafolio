export default function Nav() {
  return (
    <nav>
      <ul className="flex flex-col">
        <a href="#about-me" className="flex items-center group">
          <div className="w-8 h-0.5 bg-black mr-5 group-hover:w-12 transition-all"></div>
          <p>About me</p>
        </a>
        <a href="#skills" className="flex items-center group">
          <div className="w-8 h-0.5 bg-black mr-5 group-hover:w-12 transition-all"></div>
          <p>Skills</p>
        </a>
        <a href="#projects" className="flex items-center group">
          <div className="w-8 h-0.5 bg-black mr-5 group-hover:w-12 transition-all"></div>
          <p>Projects</p>
        </a>
      </ul>
    </nav>
  );
}
