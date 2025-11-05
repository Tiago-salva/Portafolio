import { useState, useEffect } from "react";

export default function Welcome() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const fadeStart = 0; // comienza a desaparecer al inicio
      const fadeEnd = 800; // desaparece completamente tras 200px de scroll
      const scrollY = window.scrollY;
      const newOpacity =
        1 -
        Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-2/3 ml-auto fixed z-50 inset-0 flex items-center justify-center pointer-events-none"
      style={{
        opacity,
        transition: "opacity 0.1s linear",
      }}
    >
      <h1 className="absolute text-9xl font-bold text-gray-700 animate-moveDown">
        Welcome
      </h1>
    </div>
  );
}
