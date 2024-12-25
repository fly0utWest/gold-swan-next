import BrandLogo from "@/shared/ui/BrandLogo";
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="fixed inset-x-0 w-full">
      <div className="flex flex-row max-w-screen-2xl w-full justify-between items-center md:mx-auto">
        <Link href="/">
          <BrandLogo size={80} />
        </Link>
        <nav className="flex flex-row gap-4">
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
