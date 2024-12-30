import React from "react";
import Heading from "@/shared/ui/heading";
import { upcomingProjects } from "@/shared/models/projects";
import ProjectCard from "@/shared/ui/project-card";
import { getTranslations } from "next-intl/server";

const ProjectsSection: React.FC = async () => {
  const t = await getTranslations("projects.upcoming");

  return (
    <div
      className="flex justify-center items-center flex-col gap-24 mb-16 border-2 py-12 px-4 md:px-12 lg:p-20
                    border-neutral-100 rounded-4xl md:rounded-6xl bg-white dark:bg-black dark:border-neutral-800 md:o-16 o-4 mx-offset w-full-no-offset"
    >
      <Heading
        as="h2"
        className="text-center text-outline-primary-500 text-background shadow-primary-400 text-5xl lg:text-7xl font-bold"
      >
        {t("heading")}
      </Heading>
      <section className="w-full">
        <div className="flex flex-col gap-8 lg:items-center">
          {upcomingProjects.map((project) => (
            <ProjectCard
              key={project.title}
              Icon={project.Icon}
              title={t(project.title)}
              description={t(project.description)}
              features={project.features.map((feature) => t(feature))}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
