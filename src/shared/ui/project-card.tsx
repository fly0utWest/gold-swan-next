import React from "react";
import Heading from "@/shared/ui/heading";
import { useTranslations } from "next-intl";
import { CircleAlert, LucideIcon } from "lucide-react";

interface ProjectCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  attention?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  Icon,
  title,
  description,
  features,
  attention,
}) => {
  const t = useTranslations("projects");

  return (
    <div className="flex flex-col lg:flex-row gap-4 bg-background  p-6 rounded-3xl border-2 border-border max-w-screen-xl relative">
      {attention && (
        <div className="absolute top-0 right-0 bg-primary-200 text-lg lg:text-xl font-semibold border-primary-500 border-b-2 border-l-4 text-primary-500 p-2 rounded-bl-3xl uppercase rounded-tr-3xl">
          Coming Soon!
        </div>
      )}
      <div className="lg:w-1/2">
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <span className="w-[20px] lg:w-full border-2 border-primary-200"></span>
          <Icon size={64} color="var(--primary-500)" />
          <Heading
            as="h3"
            className="text-3xl text-center font-bold lg:text-left"
          >
            {title}
          </Heading>
        </div>
        <div className="text-xl text-center lg:text-left mt-4">
          <p>{description}</p>
          {/* {attention && (
            <div className="text-primary-500 mt-8 bg-card flex flex-col lg:flex-row gap-4 p-6 rounded-3xl items-center justify-center border-primary-200 border-4 text-lg lg:text-xl font-semibold md:text-left text-center">
              <CircleAlert className="animate-pulse" size={60} />
              <span>{attention}</span>
            </div>
          )} */}
        </div>
      </div>
      <div className="lg:w-1/2 mt-4 lg:mt-0">
        <Heading as="h4" className="text-2xl font-semibold mb-4">
          {t("upcoming.features-heading")}
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
