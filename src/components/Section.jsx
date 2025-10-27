export default function Section({ id, children }) {
  return (
    <section
      id={id}
      className="min-h-dvh flex flex-col justify-center items-center p-20 text-center"
    >
      {children}
    </section>
  );
}
