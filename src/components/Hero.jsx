import Nav from "./Nav";

export default function Hero() {
  return (
    <section className="flex justify-between min-h-dvh p-20 fixed">
      <div className="min-w-2/5 flex flex-col justify-center">
        <h1 className="text-5xl bottom-8 relative">
          Hello, I'm <br /> Tiago
        </h1>

        <Nav />
      </div>
    </section>
  );
}
