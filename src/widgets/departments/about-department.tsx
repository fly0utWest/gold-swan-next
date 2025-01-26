import React from "react";
import Heading from "@/shared/ui/heading";

interface AboutDepartmentProps {
  heading: string;
  description: string;
  verticalMargin?: number;
}

const AboutDepartment: React.FC<AboutDepartmentProps> = ({
  heading,
  description,
  verticalMargin
}) => {
  return (
    <div
      className={`p-6 flex flex-col gap-4 text-xl max-w-screen-2xl md:mx-auto w-full ${verticalMargin ? `my-${verticalMargin}` : ""}`}
    >
      <Heading as="h1" className="text-5xl text-primary-500 font-semibold">
        {heading}
      </Heading>
      <section>
        <p>{description}</p>
      </section>
    </div>
  );
};

export default AboutDepartment;
