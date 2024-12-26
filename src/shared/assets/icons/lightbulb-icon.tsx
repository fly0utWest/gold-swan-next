import React from "react";

interface LightbulbIconProps {
  width?: number;
  height?: number;
  size?: number;
  color?: string;
}

const LightbulbIcon: React.FC<LightbulbIconProps> = ({
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
        d="M25.225 18.075a4.775 4.775 0 1 0 9.55 0 4.775 4.775 0 1 0 -9.55 0"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <path
        d="M22.85 34.775A7.15 7.15 0 0 1 30 27.625a7.15 7.15 0 0 1 7.15 7.15"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <path
        d="M49.1 22.85a19.1 19.1 0 1 0 -31.8 14.225 9.525 9.525 0 0 1 3.15 7.075v7.325a4.775 4.775 0 0 0 4.775 4.775h9.55a4.775 4.775 0 0 0 4.775 -4.775v-7.325a9.4 9.4 0 0 1 3.125 -7.05 19.05 19.05 0 0 0 6.425 -14.25Z"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="4"
      />
      <path
        d="M20.45 44.325h19.1"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="4"
      />
    </svg>
  );
};

export default LightbulbIcon;
