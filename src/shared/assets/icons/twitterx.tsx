interface TwitterXIconProps {
  width?: number;
  height?: number;
  size?: number;
  color?: string;
}

const TwitterX: React.FC<TwitterXIconProps> = ({
  width,
  height,
  size = 32,
  color = "var(--foreground)",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      height={height || size}
      width={width || size}
    >
      <desc>Logo Twitter X Streamline Icon: https://streamlinehq.com</desc>
      <g id="logo-twitter-x">
        <path
          fill={color}
          fillRule="evenodd"
          d="M18.1148 11.388133333333332L27.602399999999996 0.8421333333333334H31.68L19.867066666666666 13.9732L29.9104 28.791599999999995L31.514 31.157866666666667H21.03093333333333L20.58 30.492399999999996L13.885866666666667 20.615466666666666L4.3984 31.156799999999997H0.31999999999999995L12.133866666666666 18.03053333333333L2.0878666666666668 3.208266666666667L0.4842666666666667 0.8421333333333334H10.9672L11.418133333333332 1.5076L18.1148 11.388266666666667ZM22.63853333333333 28.126399999999997L6.2009333333333325 3.8735999999999997H9.359733333333333L25.79733333333333 28.126399999999997H22.63853333333333Z"
          clipRule="evenodd"
          strokeWidth="1"
        ></path>
      </g>
    </svg>
  );
};

export default TwitterX;
