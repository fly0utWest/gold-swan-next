import React from "react";
import Heading from "@/shared/ui/heading";
import { LucideIcon } from "lucide-react";
import { JSX } from "react"; 
export interface DepartmentInnerCardProps {
  Icon?: LucideIcon;
  heading: {
    headingLevel: keyof JSX.IntrinsicElements;
    headingText: string;
  };
  description: string;
}

const DepartmentInnerCard: React.FC<DepartmentInnerCardProps> = ({
  Icon,
  heading,
  description,
}) => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-black border-2 border-primary-400 rounded-2xl">
      <div className="flex gap-4">
        {Icon ? <Icon size={32} color="var(--primary-500)" /> : null}
        <Heading
          as={heading.headingLevel}
          className="text-2xl font-semibold text-primary-500"
        >
          {heading.headingText}
        </Heading>
      </div>
      <p className="mt-4 text-lg text-foreground">{description}</p>
    </div>
  );
};

export default DepartmentInnerCard;
