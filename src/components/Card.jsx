export default function Card({ title, description }) {
  return (
    <div className="flex h-40 m-auto p-3 rounded-2xl bg-blue">
      <div className="bg-gray-200 w-40 h-full flex rounded-2xl justify-center items-center">
        Work in progress
      </div>
      <div className="flex flex-col justify-around items-center">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="w-3/4">{description}</p>
      </div>
    </div>
  );
}
