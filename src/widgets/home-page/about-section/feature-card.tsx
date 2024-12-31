import React from "react";
import { IconProps } from "solar-icon-set";

interface FeatureCardProps {
  Icon: (allProps: IconProps) => JSX.Element;
  title: string;
  content: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title, content }) => {
  return (
    <div className="flex flex-col text-center justify-center max-w-fit items-center md:flex-row md:justify-between scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition-transform duration-500">
      <div className="flex flex-col items-center w-max">
        <Icon size={128}/>
        <h3 className="text-2xl text-primary-400 dark:text-primary-200">
          {title}
        </h3>
      </div>
      <p className="text-lg md:max-w-[50%]">{content}</p>
    </div>
  );
};

export default FeatureCard;
