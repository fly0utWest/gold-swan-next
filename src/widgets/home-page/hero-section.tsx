import React from "react";
import BrandLogo from "@/shared/ui/brand-logo";

const HeroSection = () => {
  return (
    <section className="p-6 flex flex-col items-center overflow-y-hidden bg-neutral-100 relative dark:bg-black h-screen">
      <div className="space-y-4">
        <h1 className="text-6xl *:block text-center md:text-9xl">
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
    </section>
  );
};

export default HeroSection;
