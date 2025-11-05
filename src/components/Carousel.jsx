const wordsRows = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "API",
  "Node.js",
  "Express",
  "Vite",
  "Tailwind",
  "PostgreSQL",
  "JSON",
  "Async",
  "Hooks",
  "REST",
  "Design",
  "Performance",
  "Web Dev",
  "Clean Code",
  "UI",
  "UX",
  "API",
  "Learning",
  "Projects",
];

function generateRow() {
  const row = [];

  while (row.length < 6) {
    const word = wordsRows[Math.floor(Math.random() * wordsRows.length)];
    if (!row.includes(word)) {
      row.push(word);
    }
  }

  return row;
}

function generateRows(count) {
  const rows = [];
  for (let i = 0; i < count; i++) {
    const randomRow = generateRow();
    rows.push(randomRow);
  }
  return rows;
}

export default function MovingCarousel({ rowsCount = 40 }) {
  const randomRows = generateRows(rowsCount);

  return (
    <div className="fixed h-full w-full overflow-hidden flex flex-col justify-center gap-8">
      {randomRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex gap-8 whitespace-nowrap text-2xl text-gray-400 rotate-45"
        >
          {[...Array(6)].map((_, repeatIndex) => (
            <div
              key={repeatIndex}
              className={`inline-flex gap-8 ${
                rowIndex % 2 === 0 ? "animate-moveLeft" : "animate-moveRight"
              }`}
            >
              {row.map((word, i) => (
                <span
                  key={i}
                  className={`${
                    i % 7 === 0 ? "text-blue-300" : "text-gray-400"
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
