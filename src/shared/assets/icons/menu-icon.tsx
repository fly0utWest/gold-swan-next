interface MenuIconProps {
  width?: number;
  height?: number;
  size?: number;
  color?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({
  width,
  height,
  size = 30,
  color = "var(--foreground)",
}) => {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10C1.44772 10 1 10.4477 1 11C1 11.5523 1.44771 12 2 12H28C28.5523 12 29 11.5523 29 11C29 10.4477 28.5523 10 28 10H2Z"
        fill={color}
      />
      <path
        d="M2 18C1.44772 18 1 18.4477 1 19C1 19.5523 1.44771 20 2 20H28C28.5523 20 29 19.5523 29 19C29 18.4477 28.5523 18 28 18H2Z"
        fill={color}
      />
    </svg>
  );
};

export default MenuIcon;
