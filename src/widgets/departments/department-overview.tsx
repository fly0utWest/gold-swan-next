import React from "react";
import Heading from "@/shared/ui/heading";
import { QuestionCircle } from "solar-icon-set";

interface DepartmentOverviewProps {
  heading: string;
  definition: string;
  benefits: string[];
}

const DepartmentOverview: React.FC<DepartmentOverviewProps> = ({
  heading,
  definition,
  benefits,
}) => {
  return (
    <div className="max-w-screen-2xl p-6 md:mx-auto w-full space-y-6">
      <div className="flex flex-col gap-4 text-xl">
        <div className="flex items-center gap-2">
          <QuestionCircle size={32} color="var(--primary-500)" />
          <Heading as="h2" className="text-2xl text-primary-400 font-semibold">
            {heading}
          </Heading>
        </div>
        <p>{definition}</p>
      </div>

      <section>
        <u className="list-disc list-inside space-y-2 no-underline">
          {benefits.map((benefit, index) => (
            <li key={index} className="marker:text-primary-500 text-lg">
              {benefit}
            </li>
          ))}
        </u>
      </section>
    </div>
  );
};

export default DepartmentOverview;
