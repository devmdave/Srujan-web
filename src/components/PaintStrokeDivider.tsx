import React, { useId } from "react";

interface PaintStrokeDividerProps {
  color?: "blue" | "indigo" | "white" | "sand";
  className?: string;
  flip?: boolean;
}

/**
 * Traditional Indian Motif Section Divider
 * Thin, repeated block-print floral vine and bandhani dot pattern
 * Used as authentic section dividers across pages.
 */
export default function PaintStrokeDivider({
  color = "blue",
  className = "",
}: PaintStrokeDividerProps) {
  const rawId = useId();
  const patternId = `divider-motif-${rawId.replace(/:/g, "")}`;

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
      <div className="w-full max-w-4xl h-3">
        <svg
          width="100%"
          height="12"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id={patternId}
              width="36"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              {/* Top guide line */}
              <line
                x1="0"
                y1="1"
                x2="36"
                y2="1"
                stroke={strokeColor}
                strokeWidth="0.5"
                strokeOpacity="0.5"
              />

              {/* Central Block-print Floral & Paisley Motif */}
              <circle cx="18" cy="6" r="1.3" fill={strokeColor} />
              <path
                d="M18,3 C18.7,4.2 18.7,5.2 18,5.5 C17.3,5.2 17.3,4.2 18,3 Z"
                fill={strokeColor}
              />
              <path
                d="M18,9 C18.7,7.8 18.7,6.8 18,6.5 C17.3,6.8 17.3,7.8 18,9 Z"
                fill={strokeColor}
              />
              <path
                d="M15,6 C16.2,5.3 17.2,5.3 17.5,6 C17.2,6.7 16.2,6.7 15,6 Z"
                fill={strokeColor}
              />
              <path
                d="M21,6 C19.8,5.3 18.8,5.3 18.5,6 C18.8,6.7 19.8,6.7 21,6 Z"
                fill={strokeColor}
              />

              {/* Delicate vine curves */}
              <path
                d="M0,6 Q9,4 18,6 T36,6"
                fill="none"
                stroke={strokeColor}
                strokeWidth="0.75"
              />

              {/* Bandhani dots */}
              <circle cx="9" cy="6" r="0.8" fill={strokeColor} />
              <circle cx="27" cy="6" r="0.8" fill={strokeColor} />

              {/* Bottom guide line */}
              <line
                x1="0"
                y1="11"
                x2="36"
                y2="11"
                stroke={strokeColor}
                strokeWidth="0.5"
                strokeOpacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="12" fill={`url(#${patternId})`} />
        </svg>
      </div>
    </div>
  );
}
