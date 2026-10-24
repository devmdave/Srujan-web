import React from "react";

interface PaintStrokeDividerProps {
  color?: "mustard" | "terracotta" | "indigo" | "sand";
  className?: string;
  flip?: boolean;
}

export default function PaintStrokeDivider({
  color = "mustard",
  className = "",
  flip = false,
}: PaintStrokeDividerProps) {
  const colorMap = {
    mustard: "#E0A526",
    terracotta: "#C2552E",
    indigo: "#2F3E75",
    sand: "#F0E6D6",
  };

  const strokeColor = colorMap[color];

  return (
    <div
      className={`w-full overflow-hidden flex justify-center items-center py-4 my-2 opacity-85 select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        className={`w-full max-w-4xl h-5 sm:h-7 ${flip ? "scale-x-[-1]" : ""}`}
        viewBox="0 0 1200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,22 C150,15 320,28 480,20 C640,12 800,27 960,19 C1060,14 1140,24 1200,20 C1160,25 1060,28 940,26 C780,24 620,33 460,27 C300,21 160,30 0,22 Z"
          fill={strokeColor}
        />
        <path
          d="M50,26 C220,18 410,31 590,22 C750,14 920,29 1120,22 C1040,30 870,28 710,29 C530,30 350,33 160,28 C110,26 70,27 50,26 Z"
          fill={strokeColor}
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
