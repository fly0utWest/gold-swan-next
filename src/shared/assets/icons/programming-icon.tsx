interface ProgrammingIconProps {
  width?: number;
  height?: number;
  size?: number;
  color?: string;
}

const ProgrammingIcon: React.FC<ProgrammingIconProps> = ({
  width,
  height,
  size = 50,
  color = "var(--foreground)",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={width ?? size}
      height={height ?? size}
    >
      <path
        fill={color}
        d="M3.04 18.28h57.92v39.62h3.04V6.1h-3.04v9.14H3.04V6.1H0v51.8h3.04V18.28z"
      />
      <path fill={color} d="M3.04 57.9h57.92v3.06H3.04z" />
      <path
        fill={color}
        d="M9.14 24.38v27.44h45.72V24.38H9.14zm18.28 15.24h-3.04v3.04h-3.04v3.06H18.28v-3.06h3.06v-3.04h3.04v-3.04h-3.04v-3.06H18.28v-3.04h3.06v3.04h3.04v3.06h3.04zm18.3 0h-12.2v-3.04h12.2z"
      />
      <path fill={color} d="M18.28 9.14h3.06V12.2H18.28z" />
      <path fill={color} d="M12.2 9.14h3.04V12.2H12.2z" />
      <path fill={color} d="M6.1 9.14h3.04V12.2H6.1z" />
      <path fill={color} d="M3.04 3.04h57.92v3.06H3.04z" />
    </svg>
  );
};

export default ProgrammingIcon;
