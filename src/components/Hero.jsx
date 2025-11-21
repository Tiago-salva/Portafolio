import Nav from "./Nav";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-end border-blue lg:justify-center min-h-20 lg:min-h-dvh lg:p-10 fixed bg-light-white max-w-full lg:min-w-2/6 border-b-4 lg:border-b-0 md:border-r-4 z-120 lg:shadow-2xl text-light-black"
    >
      <div className="min-w-2/5 flex flex-col justify-center lg:m-auto z-20">
        <h1 className="hidden lg:block text-7xl font-bold relative">
          Hello, I'm
        </h1>
        <h1 className="hidden lg:block text-7xl font-bold relative text-blue">
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
    </section>
  );
}
