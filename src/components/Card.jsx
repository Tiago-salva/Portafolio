export default function Card({ title, description }) {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:h-40 w-2/3 mb-auto p-5 lg:p-3 rounded-2xl bg-white">
      <div className="bg-light-blue w-full text-2xl lg:w-40 h-40 lg:h-full flex rounded-2xl justify-center items-center mb-5 lg:mb-0">
        Work in progress
      </div>
      <div className="flex flex-col justify-around items-center">
        <h3 className="font-bold mb-5 lg:mb-0 text-2xl">{title}</h3>
        <p className="w-3/4">{description}</p>
      </div>
    </div>
  );
}
