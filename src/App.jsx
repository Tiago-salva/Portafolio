import { useState } from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <button className="right-5 top-5 cursor-pointer fixed">Dark mode</button>
      <Hero />

      <main>
        <Section>
          <div className="flex justify-center items-center">
            <p>Algo</p>
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

        <Footer />
      </main>
    </>
  );
}

export default App;
