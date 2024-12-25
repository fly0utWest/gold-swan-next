import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";

interface Props {
  className?: string;
  size: number;
}

const BrandLogo: React.FC<Props> = ({ className, size }) => {
  return (
    <Image
    width={size}
    height={size}
      className={className}
      src={Logo}
      alt="Gold Swan Agency"
    />
  );
};

export default BrandLogo;
