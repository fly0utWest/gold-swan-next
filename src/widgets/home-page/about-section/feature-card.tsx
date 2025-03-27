import Heading from "@/shared/ui/heading";
import { LucideIcon } from "lucide-react";
import React from "react";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  content: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title, content }) => {
  return (
    <div className="flex flex-col gap-4 text-center justify-center max-w-fit items-center md:flex-row md:justify-between scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 intersect-once transition-transform duration-500">
        <Icon size={128} />
        <Heading
          as="h3"
          className="text-3xl text-primary-400 dark:text-primary-200"
        >
          {title}
        </Heading>
      <p className="text-2xl md:max-w-[50%]">{content}</p>
    </div>
  );
};

export default FeatureCard;
