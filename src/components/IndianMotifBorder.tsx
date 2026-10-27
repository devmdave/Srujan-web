import React, { useId } from "react";

interface IndianMotifBorderProps {
  color?: "blue" | "white" | "indigo" | "sand";
  className?: string;
  height?: number;
}

/**
 * Traditional Indian Block-Print Motif Border Strip
 * Thin, repeated block-print floral vine and bandhani dot pattern
 * Rendered in Srujan Blue or White only per design specification.
 */
export default function IndianMotifBorder({
  color = "blue",
  className = "",
  height = 14,
}: IndianMotifBorderProps) {
  const rawId = useId();
  const patternId = `motif-border-${rawId.replace(/:/g, "")}`;

  const colorMap = {
    blue: "#2A3F8F",
    white: "#FFFFFF",
    indigo: "#16204A",
    sand: "#E2DACB",
  };

  const strokeColor = colorMap[color] || colorMap.blue;

  return (
    <div
      className={`w-full overflow-hidden select-none pointer-events-none flex items-center ${className}`}
      aria-hidden="true"
      style={{ height: `${height}px` }}
    >
      <svg
        width="100%"
        height={height}
        className="w-full"
        style={{ minWidth: "100%" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            width="40"
            height={height}
            patternUnits="userSpaceOnUse"
          >
            {/* Top guide line */}
            <line
              x1="0"
              y1="1.5"
              x2="40"
              y2="1.5"
              stroke={strokeColor}
              strokeWidth="0.75"
              strokeOpacity="0.4"
            />

            {/* Central Paisley / Buta & Floral Motif */}
            {/* Central 4-petal floral rosette with center dot */}
            <circle cx="20" cy="7" r="1.4" fill={strokeColor} />
            <path
              d="M20,3.5 C20.8,4.8 20.8,5.8 20,6 C19.2,5.8 19.2,4.8 20,3.5 Z"
              fill={strokeColor}
            />
            <path
              d="M20,10.5 C20.8,9.2 20.8,8.2 20,8 C19.2,8.2 19.2,9.2 20,10.5 Z"
              fill={strokeColor}
            />
            <path
              d="M16.5,7 C17.8,6.2 18.8,6.2 19,7 C18.8,7.8 17.8,7.8 16.5,7 Z"
              fill={strokeColor}
            />
            <path
              d="M23.5,7 C22.2,6.2 21.2,6.2 21,7 C21.2,7.8 22.2,7.8 23.5,7 Z"
              fill={strokeColor}
            />

            {/* Connecting undulating floral vine */}
            <path
              d="M0,7 Q10,4.5 20,7 T40,7"
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.8"
              strokeOpacity="0.6"
            />

            {/* Bandhani Accent Dots flanking the motif */}
            <circle cx="8" cy="7" r="0.9" fill={strokeColor} />
            <circle cx="32" cy="7" r="0.9" fill={strokeColor} />
            <circle cx="20" cy="1" r="0.7" fill={strokeColor} />
            <circle cx="20" cy="13" r="0.7" fill={strokeColor} />

            {/* Bottom guide line */}
            <line
              x1="0"
              y1="12.5"
              x2="40"
              y2="12.5"
              stroke={strokeColor}
              strokeWidth="0.75"
              strokeOpacity="0.4"
            />
          </pattern>
        </defs>
        <rect width="100%" height={height} fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
