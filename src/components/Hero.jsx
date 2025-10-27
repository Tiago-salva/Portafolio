import Footer from "./Footer";
import Nav from "./Nav";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-dvh p-10 fixed bg-amber-50 min-w-2/6">
      <div className="min-w-2/5 flex flex-col justify-center m-auto">
        <h1 className="text-6xl font-bold relative">
          Hello, I'm <br /> Tiago
        </h1>

        <p className="mt-4 mb-8">Frontend Developer</p>

        <Nav />
      </div>

      <Footer />
    </section>
  );
}
