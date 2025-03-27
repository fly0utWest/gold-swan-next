import React from "react";
import Logo from "../assets/logo.webp";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className, size = 150 }) => {
  return (
    <Image
      width={size}
      height={size}
      priority={true}
      className={className}
      src={Logo}
      alt="Gold Swan Agency"
    />
  );
};

export default BrandLogo;
