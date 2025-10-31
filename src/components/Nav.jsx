export default function Nav() {
  return (
    <nav>
      <ul className="flex flex-col">
        <a href="#about-me" className="flex items-center group">
          <div className="w-8 h-0.5 bg-black mr-5 group-hover:w-12 group-hover:bg-blue-300 transition-all"></div>
          <p className="text-2xl">About me</p>
        </a>
        <a href="#skills" className="flex items-center group">
          <div className="w-8 h-0.5 bg-black mr-5 group-hover:w-12 group-hover:bg-blue-300 transition-all"></div>
          <p className="text-2xl">Skills</p>
        </a>
        <a href="#projects" className="flex items-center group">
          <div className="w-8 h-0.5 bg-black mr-5 group-hover:w-12 group-hover:bg-blue-300 transition-all"></div>
          <p className="text-2xl">Projects</p>
        </a>
      </ul>
    </nav>
  );
}
