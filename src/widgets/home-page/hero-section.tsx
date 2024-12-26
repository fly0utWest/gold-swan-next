import React from "react";
import BrandLogo from "@/shared/ui/brand-logo";
import Button from "@/shared/ui/button";
import Link from "@/shared/ui/link";

const HeroSection = () => {
  return (
    <section className="p-6 flex flex-col items-center  gap-16 overflow-y-hidden bg-neutral-100 relative dark:bg-black min-h-[100dvh] overflow-x-hidden">
      <div className=" space-y-4">
        <h1 className="text-6xl *:block text-center md:text-8xl">
          <span className="text-primary-400 animate-slideInFromRight">
            Gold
          </span>
          <span className="animate-slideInFromLeft">Swan</span>
          <span className="animate-slideInFromRight">Agency</span>
        </h1>
        <div className="flex flex-col items-center text-center">
          <BrandLogo className="animate-opacityIn" size={250} />
          <p className="text-2xl">
            We are a digital agency that specializes in web development and
            marketing.
          </p>
        </div>
      </div>
      <Link href="#contact">
      <Button>
        Contact Us
      </Button>
      </Link>
    </section>
  );
};

export default HeroSection;
