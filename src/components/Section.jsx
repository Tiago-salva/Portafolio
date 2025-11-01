export default function Section({
  id,
  children,
  withBackground,
  bgColor = "bg-blue-300",
}) {
  return (
    <section
      id={id}
      className={`min-h-dvh w-full flex flex-col justify-center items-center text-center p-20 ${
        withBackground ? bgColor : ""
      } z-10 shadow-xl`}
    >
      {children}
    </section>
  );
}
