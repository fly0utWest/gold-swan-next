import React from "react";

interface PuzzleIconProps {
  width?: number;
  height?: number;
  size?: number;
  color?: string;
}

const PuzzleIcon: React.FC<PuzzleIconProps> = ({
  width,
  height,
  size = 150,
  color = "var(--foreground)",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -2 64 64"
      width={width ?? size}
      height={height ?? size}
      fill="none"
    >
      <path
        d="M24.25 14.7a4.675 4.675 0 0 0 -1.4 3.375 4.8 4.8 0 0 0 4.775 4.775H30V30H22.85v2.5a4.775 4.775 0 0 1 -9.55 0v-2.5H3.75V3.75H30v9.55h-2.375a4.675 4.675 0 0 0 -3.375 1.4Z"
        stroke={color}
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <path
        d="M56.25 3.75V30h-9.55v-2.375a4.775 4.775 0 0 0 -4.775 -4.775 4.8 4.8 0 0 0 -4.775 4.775V30H30V22.85h-2.375a4.8 4.8 0 0 1 -4.775 -4.775 4.775 4.775 0 0 1 4.775 -4.775H30V3.75Z"
        stroke={color}
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <path
        d="M37.15 41.925A4.8 4.8 0 0 1 32.5 46.7h-2.5v9.55H3.75V30h9.55v2.5a4.775 4.775 0 0 0 9.55 0v-2.5H30v7.15h2.5a4.8 4.8 0 0 1 4.65 4.775Z"
        stroke={color}
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <path
        d="M56.25 30v26.25H30v-9.55h2.5a4.775 4.775 0 0 0 0 -9.55h-2.5V30h7.15v-2.375a4.8 4.8 0 0 1 4.775 -4.775 4.775 4.775 0 0 1 4.775 4.775V30Z"
        stroke={color}
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="4"
      />
    </svg>
  );
};

export default PuzzleIcon;
