export default function Section({ id, children }) {
  return (
    <section
      id={id}
      className="min-h-dvh w-full flex flex-col justify-center items-center text-center"
    >
      {children}
    </section>
  );
}
