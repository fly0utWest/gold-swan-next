import Heading from "@/shared/ui/heading";
import React from "react";

interface DepartmentHeroSectionProps {
  heading: string[];
  Icon: (allProps: any) => JSX.Element;
}

const DepartmentHeroSection: React.FC<DepartmentHeroSectionProps> = ({
  heading,
  Icon,
}) => {
  return (
    <section className="w-full flex bg-background-secondary flex-col px-6 py-8 border-b-2 border-border">
      <div className="flex flex-col self-center items-center gap-4">
        <Icon color="var(--primary-400)" size={86} />
        <div className="bg-primary-500 rounded-full h-3 w-3"></div>
      </div>
      <Heading
        as="h1"
        className="flex flex-col items-center justify-center text-center text-xl md:text-4xl *:w-max space-y-2 lg:text-6xl w-full my-8"
      >
        <div className=" animate-slideInFromLeft flex items-center">
          <span className="uppercase">{heading[0]}</span>
          <i className="h-1 w-7 min-w-fit inline-block ml-7 bg-primary-500"></i>
        </div>
        <div className=" animate-slideInFromRight flex items-center">
          <i className="h-1 w-7  min-w-min inline-block mr-7 bg-primary-500"></i>
          <span className="uppercase">{heading[1]}</span>
        </div>
        <div className=" animate-slideInFromLeft flex items-center">
          <span className="uppercase">{heading[2]}</span>
          <i className="h-1 w-7 min-w-min inline-block ml-7 bg-transparent"></i>
        </div>
      </Heading>
    </section>
  );
};

export default DepartmentHeroSection;
