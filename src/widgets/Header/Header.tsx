import BrandLogo from "@/shared/ui/BrandLogo";
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="fixed h-20 top-0 left-0 w-full border-b-2 border-b-neutral-900 backdrop-blur-sm">
      <div className="flex max-w-screen-2xl justify-between items-center md:mx-auto px-6">
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
