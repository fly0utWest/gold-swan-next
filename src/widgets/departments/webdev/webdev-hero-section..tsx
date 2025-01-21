import Heading from "@/shared/ui/heading";
import React from "react";
import { Programming } from "solar-icon-set";

interface WebdevHeroSectionProps {
  heading?: string[];
}

const WebdevHeroSection: React.FC = () => {
  return (
    <section className="w-full flex  bg-neutral-100 dark:bg-black flex-col px-6 py-8">
      <div className="flex flex-col self-center items-center gap-4">
        <Programming className="" color="var(--primary-400)" size={86} />
        <div className="bg-primary-500 rounded-full h-3 w-3"></div>
      </div>
      <Heading
        as="h1"
        className="flex flex-col items-center justify-center text-5xl *:w-max space-y-2 md:text-8xl w-full my-8"
      >
        <div className=" animate-slideInFromLeft flex items-center">
          <span className="uppercase">Awesome landings</span>
          <i className="h-1 w-12 inline-block mx-7 bg-primary-500"></i>
        </div>
        <div className=" animate-slideInFromRight flex items-center">
          <i className="h-1 w-12 inline-block mx-7 bg-primary-500"></i>
          <span className="uppercase">UI/UX design</span>
        </div>
        <div className=" animate-slideInFromLeft flex items-center">
          <span className="uppercase">E2E web solutions</span>
          <i className="h-1 w-12 inline-block mx-7 bg-transparent"></i>
        </div>
      </Heading>
    </section>
  );
};

export default WebdevHeroSection;
