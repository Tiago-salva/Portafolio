export default function Section({ id, children }) {
  return (
    <section
      id={id}
      className="min-h-dvh w-1/2 ml-auto flex flex-col justify-center items-center p-20 text-center"
    >
      {children}
    </section>
  );
}
