import React from "react";
import Heading from "@/shared/ui/heading";
import { Help, ChartSquare, Bottle } from "solar-icon-set";
import ProjectCard from "@/shared/ui/project-card";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      Icon: <Help size={64} color="var(--primary-500)"/>,
      title: "AI-Powered Support",
      description:
        "Our AI-Powered Support redefines customer service by addressing common challenges such as high costs, limited availability, and outdated solutions.",
      features: [
        "24/7 availability",
        "Cost-efficient automation",
        "Personalized interactions",
        "Seamless integration with communication channels",
        "Continuous learning from customer queries",
        "Scalable to handle simultaneous requests",
        "Actionable analytics for service improvement",
      ],
    },
    {
      Icon: <ChartSquare />,
      title: "AI-Driven Analytics",
      description:
        "Our AI-Driven Analytics platform revolutionizes data analysis by leveraging advanced machine learning algorithms to uncover deep insights from complex datasets.",
      features: [
        "Real-time data processing",
        "Intuitive visualizations",
        "Automated report generation",
        "Adaptive to various data sources",
        "Scalable for large data volumes",
        "Continuous improvement of analytical models",
        "Pattern recognition and predictive modeling",
      ],
    },
    {
      Icon: <Bottle size={64}/>,
      title: "Intelligent Automation",
      description:
        "Our Intelligent Automation solution streamlines business processes by combining AI, machine learning, and robotic process automation to enhance efficiency and reduce errors.",
      features: [
        "Process analysis and optimization",
        "Automated workflow creation",
        "Integration with existing systems",
        "Natural language processing capabilities",
        "Adaptive learning for process improvement",
        "Real-time monitoring and reporting",
        "Scalable across multiple departments",
      ],
    },
  ];

  return (
    <div
      className="flex justify-center items-center flex-col gap-24 mb-16 border-2 py-12 px-4 md:px-12 lg:p-20
                    border-neutral-100 rounded-4xl md:rounded-6xl bg-white dark:bg-black dark:border-neutral-800 md:o-16 o-4 mx-offset w-full-no-offset"
    >
      <Heading
        as="h2"
        className="text-center text-outline-primary-500 text-background shadow-primary-400 text-5xl lg:text-7xl font-bold"
      >
        Upcoming Projects
      </Heading>
      <section className="w-full">
        <div className="flex flex-col gap-8 lg:items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              icon={project.Icon}
              title={project.title}
              description={project.description}
              features={project.features}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection