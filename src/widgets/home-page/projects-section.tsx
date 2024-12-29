import React from "react";
import Heading from "@/shared/ui/heading";
import { Help, ChartSquare, Bottle } from "solar-icon-set";
import ProjectCard from "@/shared/ui/project-card";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      Icon: Help,
      title: "AI-Powered Support",
      description:
        "Our AI-Powered Support redefines customer service by addressing common challenges such as high costs, limited availability, and outdated solutions. With 24/7 availability, cost-efficient automation, and personalized interactions, the system seamlessly integrates with communication channels like messengers and email. It learns from customer queries, scales to handle simultaneous requests, and provides actionable analytics to improve service quality. This innovation ensures businesses can deliver exceptional support while optimizing resources.",
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
      Icon: ChartSquare,
      title: "NFC-Driven Automated Review Generation",
      description:
        "Our NFC-Driven Automated Review Generation system revolutionizes how businesses gather customer feedback. By automating the process with NFC tags and AI, reviews are collected quickly and easily, reducing manual efforts and costs. Customers benefit from a streamlined experience, while businesses enjoy increased engagement, accurate feedback, and enhanced ratings. Scalable and equipped with detailed analytics, this solution helps industries like hospitality, retail, and dining boost their reputations efficiently.",
      features: [
        "Streamlined feedback collection with NFC",
        "Automated review process",
        "Increased engagement",
        "Accurate and timely feedback",
        "Enhanced ratings and reputation",
        "Detailed analytics for improvement",
        "Scalable across industries",
      ],
    },
    {
      Icon: Bottle,
      title: "Crypto Marketing Package for Utility Projects",
      description:
        "Our Crypto Marketing Package is tailored exclusively for utility crypto projects, supporting them at every stage of development. The package includes brand strategy, content creation, community engagement, and influencer outreach. From optimized websites to targeted advertising and PR campaigns, our approach ensures increased visibility, trust, and adoption. Designed with scalability and measurable results in mind, this service drives growth while meeting the unique demands of the crypto landscape.",
      features: [
        "Comprehensive brand strategy",
        "Content creation for engagement",
        "Community building and outreach",
        "Influencer partnerships",
        "Optimized websites and PR campaigns",
        "Scalable marketing efforts",
        "Measurable growth and visibility",
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
              Icon={project.Icon}
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

export default ProjectsSection;
