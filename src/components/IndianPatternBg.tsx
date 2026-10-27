import React, { useId } from "react";

interface IndianPatternBgProps {
  color?: "white" | "blue" | "sand";
  opacity?: number; // e.g. 0.05
  className?: string;
}

/**
 * Traditional Indian Block-Print & Buta Background Pattern
 * Creates a subtle, faint backdrop for the Footer and "How Ordering Works" section.
 */
export default function IndianPatternBg({
  color = "white",
  opacity = 0.05,
  className = "",
}: IndianPatternBgProps) {
  const rawId = useId();
  const patternId = `indian-bg-pattern-${rawId.replace(/:/g, "")}`;

  const strokeColor = color === "blue" ? "#2A3F8F" : color === "sand" ? "#E2DACB" : "#FFFFFF";

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <pattern
            id={patternId}
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            {/* Center Block-print Buti (Lotus / Paisley silhouette) */}
            <g transform="translate(32, 32)">
              {/* Petal cluster */}
              <circle cx="0" cy="0" r="2" fill={strokeColor} />
              <path
                d="M0,-8 C2.5,-4 2.5,-1 0,0 C-2.5,-1 -2.5,-4 0,-8 Z"
                fill={strokeColor}
              />
              <path
                d="M0,8 C2.5,4 2.5,1 0,0 C-2.5,1 -2.5,4 0,8 Z"
                fill={strokeColor}
              />
              <path
                d="M-8,0 C-4,2.5 -1,2.5 0,0 C-1,-2.5 -4,-2.5 -8,0 Z"
                fill={strokeColor}
              />
              <path
                d="M8,0 C4,2.5 1,2.5 0,0 C1,-2.5 4,-2.5 8,0 Z"
                fill={strokeColor}
              />

              {/* Diagonal leaf wisps */}
              <circle cx="-5" cy="-5" r="0.9" fill={strokeColor} />
              <circle cx="5" cy="-5" r="0.9" fill={strokeColor} />
              <circle cx="-5" cy="5" r="0.9" fill={strokeColor} />
              <circle cx="5" cy="5" r="0.9" fill={strokeColor} />
            </g>

            {/* Corner Bandhani dots diamond */}
            <circle cx="0" cy="0" r="1.5" fill={strokeColor} />
            <circle cx="64" cy="0" r="1.5" fill={strokeColor} />
            <circle cx="0" cy="64" r="1.5" fill={strokeColor} />
            <circle cx="64" cy="64" r="1.5" fill={strokeColor} />

            {/* Faint connecting jaali dotted diamonds */}
            <circle cx="16" cy="16" r="0.6" fill={strokeColor} />
            <circle cx="48" cy="16" r="0.6" fill={strokeColor} />
            <circle cx="16" cy="48" r="0.6" fill={strokeColor} />
            <circle cx="48" cy="48" r="0.6" fill={strokeColor} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
