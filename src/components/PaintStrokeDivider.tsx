import React from "react";

interface PaintStrokeDividerProps {
  color?: "blue" | "indigo" | "white" | "sand";
  className?: string;
  flip?: boolean;
}

export default function PaintStrokeDivider({
  color = "blue",
  className = "",
  flip = false,
}: PaintStrokeDividerProps) {
  const colorMap = {
    blue: "#2A3F8F",
    indigo: "#16204A",
    white: "#FFFFFF",
    sand: "#E2DACB",
  };

  const strokeColor = colorMap[color] || colorMap.blue;

  return (
    <div
      className={`w-full overflow-hidden flex justify-center items-center py-4 my-2 select-none pointer-events-none opacity-40 ${className}`}
      aria-hidden="true"
    >
      <svg
        className={`w-full max-w-3xl h-3 ${flip ? "scale-x-[-1]" : ""}`}
        viewBox="0 0 1200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,12 C180,9 380,16 600,11 C820,6 1020,15 1200,12 C1040,15 840,14 620,13 C400,12 200,16 0,12 Z"
          fill={strokeColor}
        />
      </svg>
    </div>
  );
}
