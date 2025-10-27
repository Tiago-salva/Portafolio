export default function Footer() {
  return (
    <footer className="h-20 w-full flex justify-center items-center">
      <ul className="flex justify-center items-center gap-3">
        <li className="group">
          <a href="#">
            <img
              src="../../public/github-brands-solid-full.svg"
              className="w-10 h-10 group-hover:bg-amber-200 transition-all"
              alt="github"
            />
          </a>
        </li>
        <li className="group">
          <a href="#">
            <img
              src="../../public/linkedin-brands-solid-full.svg"
              className="w-10 h-10 group-hover:bg-amber-200 transition-all"
              alt="linkedin"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
