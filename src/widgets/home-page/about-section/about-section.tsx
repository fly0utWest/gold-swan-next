import { Lightbulb, CupStar, ChecklistMinimalistic } from "solar-icon-set";
import React from "react";
import FeatureCard from "./feature-card";
import { useTranslations } from "next-intl";
import Heading from "@/shared/ui/heading";

const AboutSection = () => {
  const t = useTranslations("about");

  const features = [
    {
      title: t("idea.translated"),
      content: t("idea.explained"),
      icon: Lightbulb,
    },
    {
      title: t("strategy.translated"),
      content: t("strategy.explained"),
      icon: CupStar,
    },
    {
      title: t("implementation.translated"),
      content: t("implementation.explained"),
      icon: ChecklistMinimalistic,
    },
  ];

  return (
    <section className="bg-neutral-100 dark:bg-black pb-10 px-6 rounded-b-3xl md:rounded-b-5xl" id="about-us">
      <div className="max-w-screen-xl mx-auto space-y-10">
        <div className="flex flex-col text-center md:text-left gap-6 md:flex-row md:justify-between items-center">
          <Heading
            as="h2"
            className="text-5xl uppercase text-outline-primary-400 dark:text-black  text-neutral-100 text-nowrap"
          >
            {t("heading")}
          </Heading>
          <p className="md:max-w-[50%] text-3xl text-pretty">
            {t("description")}
          </p>
        </div>
        <div className="space-y-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              content={feature.content}
              Icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
