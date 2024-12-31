import React from "react";
import Heading from "@/shared/ui/heading";
import { IconProps } from "solar-icon-set/dist/types";

interface ProjectCardProps {
  Icon: (allProps: IconProps) => JSX.Element;
  title: string;
  description: string;
  features: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  Icon,
  title,
  description,
  features,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 bg-neutral-100 dark:bg-background  p-6 rounded-3xl border-2 border-neutral-800 max-w-screen-xl">
      <div className="lg:w-1/2">
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <span className="w-[20px] lg:w-full border-2 border-primary-200"></span>
          <Icon size={64} color="var(--primary-500)" iconStyle="Bold" />
          <Heading as="h3" className="text-3xl font-bold">
            {title}
          </Heading>
        </div>
        <p className="text-xl text-center lg:text-left mt-4">{description}</p>
      </div>
      <div className="lg:w-1/2 mt-4 lg:mt-0">
        <Heading as="h4" className="text-2xl font-semibold mb-4">
          Key Features
        </Heading>
        <ul className="list-disc list-inside space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-lg marker:text-primary-500">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
