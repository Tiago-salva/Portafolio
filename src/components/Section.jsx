export default function Section({
  id,
  children,
  withBackground,
  bgColor = "bg-gray-100",
  specificStyles,
}) {
  return (
    <section
      id={id}
      className={`${specificStyles}  min-h-dvh w-full flex flex-col justify-center items-center text-center p-20 g-10 ${
        withBackground ? bgColor : ""
      } z-10`}
    >
      {children}
    </section>
  );
}
