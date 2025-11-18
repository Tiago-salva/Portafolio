import Footer from "./Footer";
import Nav from "./Nav";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-end border-blue border-b-3 lg:justify-center min-h-20 lg:min-h-dvh lg:p-10 fixed bg-white min-w-dvw lg:min-w-2/6 border-r-4 z-20 lg:shadow-2xl">
      <div className="min-w-2/5 flex flex-col justify-center lg:m-auto">
        <h1 className="hidden lg:block text-7xl font-bold relative">
          Hello, I'm
        </h1>
        <h1 className="hidden lg:block text-7xl font-bold relative text-blue-300">
          Tiago
        </h1>

        <div className="hidden lg:block h-6 overflow-hidden mt-4 mb-8 ">
          <div
            id="profession-container"
            className="transition-transform animate-moveUp"
          >
            <p className="text-[1.2rem]">Frontend Developer</p>
            <p className="text-[1.2rem]">Backend Developer</p>
            <p className="text-[1.2rem]">Student</p>
          </div>
        </div>

        <Nav />
      </div>

      {/* <Footer /> */}
    </section>
  );
}
