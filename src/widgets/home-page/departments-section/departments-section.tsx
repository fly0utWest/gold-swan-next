import React from "react";
import { Camera } from "solar-icon-set";
import { DepartmentButton } from "@/shared/ui/department-button";
import { MoneyBag } from "solar-icon-set";
import { Programming } from "solar-icon-set";
import { Safe2 } from "solar-icon-set";
import { Star2 } from "solar-icon-set";
import { PieChart2 } from "solar-icon-set";
import { useTranslations } from "next-intl";
import Heading from "@/shared/ui/heading";

const DepartmentSection = () => {
  const t = useTranslations("departments.section");

  const departments = [
    {
      title: t("marketing"),
      icon: MoneyBag,
      href: "/departments/marketing",
    },
    {
      title: t("brandDevelopment"),
      icon: Star2,
      href: "/departments/branding",
    },
    {
      title: t("reputationAndDataProtection"),
      icon: Safe2,
      href: "/departments/ReputationAndDataProtection",
    },
    {
      title: t("analyticsAndStrategy"),
      icon: PieChart2,
      href: "/departments/analytics",
    },
    {
      title: t("photoVideoShooting"),
      icon: Camera,
      href: "/video",
    },
    {
      title: t("webdev"),
      icon: Programming,
      href: "/departments/webdev",
    },
  ];
  return (
    <section className="w-full flex justify-center items-center flex-col px-5 md:px-8 gap-8 md:gap-16">
      <Heading
        as="h2"
        className="font-bold text-5xl lg:text-7xl text-center"
        id="departments"
      >
        {t("heading")}
      </Heading>
      <div className="flex flex-row flex-wrap gap-8 justify-center w-full">
        {departments.map((department, index) => (
          <DepartmentButton
            key={index}
            Icon={department.icon}
            href={department.href}
            name={department.title!}
          />
        ))}
      </div>
    </section>
  );
};

export default DepartmentSection;
