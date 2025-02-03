import {
  Lightbulb,
  Scale,
  ShieldCheck,
  Wallet,
  ClockCircle,
} from "solar-icon-set";
import React from "react";
import FeatureCard from "./feature-card";
import { useTranslations } from "next-intl";
import Heading from "@/shared/ui/heading";

const AboutSection = () => {
  const t = useTranslations("about");

  const features = [
    {
      title: t("flexibility.translated"),
      content: t("flexibility.explained"),
      icon: Lightbulb, 
    },
    {
      title: t("speed.translated"),
      content: t("speed.explained"),
      icon: ClockCircle, 
    },
    {
      title: t("confidentiality.translated"),
      content: t("confidentiality.explained"),
      icon: ShieldCheck,
    },
    {
      title: t("pricing.translated"),
      content: t("pricing.explained"),
      icon: Wallet,
    },
    {
      title: t("ethicsAndResponsibility.translated"),
      content: t("ethicsAndResponsibility.explained"),
      icon: Scale,
    },
  ];

  return (
    <section
      className="bg-backgroundSecondary py-20 px-6  border-border border-b-2 rounded-b-3xl md:rounded-b-5xl"
      id="about-us"
    >
      <div className="max-w-screen-xl mx-auto space-y-10">
        <div className="flex flex-col text-center md:text-left gap-6 md:flex-row md:justify-between items-center">
          <Heading
            as="h2"
            className="text-5xl uppercase text-outline-primary-400 dark:text-black  text-neutral-100 text-nowrap"
          >
            {t("heading")}
          </Heading>
          <p className=" text-4xl text-pretty text-center text-primary-500">
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
