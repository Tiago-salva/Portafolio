import { useState } from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <button className="right-5 top-5 cursor-pointer fixed hover:scale-110 transition-transform">
        <svg
          className="w-10 h-10 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="balck"
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

      <main className="w-2/3 flex flex-col justify-center items-center ml-auto">
        <Section>
          <div className="flex justify-center items-center w-full overflow-hidden">
            <Carousel />
          </div>
        </Section>

        {/* About me */}
        <Section id={"about-me"}>
          <p>About me</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            perferendis earum harum id laudantium odio, illo obcaecati
            cupiditate animi eligendi ut ex? Velit iure architecto sed totam
            mollitia, consequuntur adipisci. Voluptatem accusantium, dicta
            nesciunt commodi iure expedita cupiditate eligendi consectetur
            dolorem? Illum explicabo ipsa error enim quisquam. Molestias porro
            labore sit alias neque consectetur dicta, corporis dolorum enim
            deserunt sed! Quos nostrum hic eveniet sint cum debitis corrupti
            accusamus reprehenderit, corporis ratione consequatur, mollitia
            dignissimos earum, quod rerum maiores ea a odit exercitationem nihil
            optio quas quae. Totam, voluptatum illo? Explicabo nemo aspernatur
            illum commodi quidem ratione distinctio nostrum aliquam nesci
            voluptatibus animi, ab nostrum labore beatae autem.
          </p>
        </Section>

        {/* Skills */}
        <Section id={"skills"}>
          <p>Skills</p>
        </Section>

        {/* Projects */}
        <Section id={"projects"}>
          <p>Projects</p>
        </Section>
      </main>
    </>
  );
}

export default App;
