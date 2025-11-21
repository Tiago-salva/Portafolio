export default function Card({ title, description }) {
  return (
    <div className="flex flex-col items-center xl:flex-row gap-5 lg:gap-10 w-4/5 lg:w-full mb-auto p-5 lg:p-10 rounded-2xl bg-light-white">
      <div className="bg-light-blue w-full text-[1.2rem] text-light-white md:text-2xl h-80 flex rounded-2xl justify-center items-center mb-5 lg:mb-0">
        Work in progress
      </div>
      <div className="flex flex-col items-center">
        <h3 className="font-bold mb-5 text-[1.5rem] md:text-2xl">{title}</h3>
        <p className="w-3/4 text-[1.2rem] md:text-2xl">{description}</p>
      </div>
    </div>
  );
}
