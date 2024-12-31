interface CloseIconProps {
  width?: number;
  height?: number;
  size?: number;
  color?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({
  width,
  height,
  size = 30,
  color = "var(--foreground)",
}) => {
  return (
    <svg
      width={width ?? size}
      height={height ?? size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5.80762"
        y="4.3934"
        width="28"
        height="2"
        rx="1"
        transform="rotate(45 5.80762 4.3934)"
        fill={color}
      />
      <rect
        x="4.39343"
        y="24.1923"
        width="28"
        height="2"
        rx="1"
        transform="rotate(-45 4.39343 24.1923)"
        fill={color}
      />
    </svg>
  );
};

export default CloseIcon;
