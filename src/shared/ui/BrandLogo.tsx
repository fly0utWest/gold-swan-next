import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size: number;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className, size }) => {
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
