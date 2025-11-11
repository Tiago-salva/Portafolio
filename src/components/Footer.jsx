export default function Footer() {
  return (
    <footer className="h-20 w-full flex justify-center items-center">
      <ul className="flex justify-center items-center gap-3">
        <li className="group w-15">
          <a href="https://github.com/Tiago-salva">
            <img
              src="../../public/github-brands-solid-full.svg"
              className="w-full h-full group-hover:scale-120 transition-all"
              alt="github"
            />
          </a>
        </li>
        <li className="group w-15">
          <a href="https://www.linkedin.com/in/tiago-salvatierra-71a70a384/">
            <img
              src="../../public/linkedin-brands-solid-full.svg"
              className="w-full h-full group-hover:scale-120 transition-all"
              alt="linkedin"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
