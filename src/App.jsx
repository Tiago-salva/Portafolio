import Hero from "./components/Hero";
import Section from "./components/Section";
import Carousel from "./components/Carousel";
import Welcome from "./components/WelcomeTitle";
import Footer from "./components/Footer";
import SkillList from "./components/SkillList";
import Card from "./components/Card";

function App() {
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }

  return (
    <>
      <button
        onClick={() => toggleDarkMode()}
        className="left-5 lg:left-8 z-130 top-5 lg:top-8 cursor-pointer fixed group"
      >
        <svg
          className="w-8 lg:w-10 z-30 text-light-black dark:text-light-black group-hover:dark:text-blue transition-colors"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
          />
        </svg>
      </button>

      <Hero />

      <main className="text-light-black lg:max-w-2/3 flex flex-col justify-center items-center lg:ml-100 xl:ml-auto">
        <Section withBackground bgColor="bg-light-white" id={"carousel"}>
          <div className="flex justify-center items-center w-full overflow-hidden">
            <Welcome />
            <Carousel />
          </div>
        </Section>

        <Section withBackground id={"about-me"}>
          <h2 className="text-6xl font-bold mb-20 text-blue">About me</h2>
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-2xl text-center w-4/6 leading-relaxed mb-5">
              I'm a <strong>fullstack developer</strong> who enjoys building
              projects that go beyond simple examples like landing pages or
              small apps. I like creating things with a real purpose, projects
              that aim to solve a problem or make something easier, not just
              look good.
            </p>
            <p className="text-2xl text-center w-4/6 leading-relaxed mb-5">
              I love learning how things work under the hood and I'm always
              looking for something new to learn, from programming languages to
              development tools. I'm currently building new projects to share in
              this portfolio and learning technologies like
              <strong> Typescript</strong> and <strong>Docker</strong> to stay
              up to date.
            </p>
            <p className="text-2xl text-center w-4/6 leading-relaxed">
              When I'm not coding, I love playing videogames, watching movies,
              or diving into something new to learn.
            </p>
          </div>
        </Section>

        <Section
          withBackground
          bgColor="bg-gradient-to-b from-light-white to-blue py-16"
          id={"skills"}
        >
          <h2 className="text-6xl font-bold mb-10 lg:mb-20 text-blue">
            Skills
          </h2>
          <SkillList></SkillList>
        </Section>

        <Section withBackground bgColor="bg-blue" id={"projects"}>
          <h2 className="text-6xl font-bold mb-20 text-light-white">
            Projects
          </h2>
          <Card
            title={"Payroll settlement system"}
            description={
              "A web with login and sign up to kept record and calculate the payroll of your employees"
            }
          />
        </Section>
      </main>

      {/* Footer for small devices */}
      <Footer
        className={
          "absolute w-full bg-light-white -bottom-full py-5 z-10 lg:hidden"
        }
      />
    </>
  );
}

export default App;
