import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, content }) => {
  return (
    <div className="flex flex-col text-center justify-center max-w-fit items-center md:flex-row md:justify-between">
      <div className="flex flex-col items-center w-max">
        {icon}
        <h3 className="text-2xl text-primary-400 dark:text-primary-200">
          {title}
        </h3>
      </div>
      <p className="text-lg md:max-w-[50%]">{content}</p>
    </div>
  );
};

export default FeatureCard;
