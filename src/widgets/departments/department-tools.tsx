import React from "react";
import Heading from "@/shared/ui/heading";
import DepartmentInnerCard, {
  DepartmentInnerCardProps,
} from "./department-inner-card";

interface DepartmentToolsProps {
  heading: string;
  tools: DepartmentInnerCardProps[];
}

const DepartmentTools: React.FC<DepartmentToolsProps> = ({
  heading,
  tools,
}) => {
  return (
    <div className="max-w-screen-2xl p-6 md:mx-auto w-full space-y-6">
      <Heading as="h2" className="text-2xl text-primary-400 font-semibold">
        {heading}
      </Heading>

      <section className="flex flex-col gap-6 lg:flex-row flex-wrap">
        {tools.map((tool, index) => (
          <DepartmentInnerCard key={index} {...tool} />
        ))}
      </section>
    </div>
  );
};

export default DepartmentTools;
