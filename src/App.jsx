import { useState } from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <button className="left-5 z-30 top-5 cursor-pointer fixed hover:scale-110 transition-transform">
        <svg
          className="w-10 h-10 z-30 text-gray-800 dark:text-gray-800"
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

      <main className="w-2/3 flex flex-col justify-center items-center ml-auto">
        <Section>
          <div className="flex justify-center items-center w-full overflow-hidden">
            <Carousel />
          </div>
        </Section>

        <Section withBackground id={"about-me"}>
          <h2 className="text-4xl font-bold mb-5">About me</h2>
          <p className="text-2xl text-center w-4/6 leading-relaxed mb-5">
            I'm a frontend developer who enjoys creating websites to solve
            problems, I make sure my sites are not only clear, structured, and
            clean but also fully functional.
          </p>
          <p className="text-2xl text-center w-4/6 leading-relaxed mb-5">
            I love learning how things work under the hood and I'm always
            looking for something new to learn, from programming languages to
            development tools. I'm currently building new projects to share in
            this portfolio and learning technologies like Typescript and Docker
            to stay up to date.
          </p>
          <p className="text-2xl text-center w-4/6 leading-relaxed">
            In my spare time, I play videogames or watching a movie or a series
          </p>
        </Section>

        <Section withBackground bgColor="bg-gray-200" id={"skills"}>
          <p>Skills</p>
        </Section>

        <Section withBackground id={"projects"}>
          <p>Projects</p>
        </Section>
      </main>
    </>
  );
}

export default App;
