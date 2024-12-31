import React from "react";
import DragSlider from "../drag-slider";
import DepartmentCard from "./department-card";
import ProgrammingIcon from "@/shared/assets/icons/programming-icon";
import { Camera } from "solar-icon-set";
import { DepartmentButton } from "@/shared/ui/department-button";
import { MoneyBag } from "solar-icon-set";
import { Programming } from "solar-icon-set";
import { Safe2 } from "solar-icon-set";
import { Star2 } from "solar-icon-set";
import { PieChart2 } from "solar-icon-set";

const departments = [
  {
    icon: MoneyBag,
    href: "/departments/marketing",
    name: "Digital Marketing",
  },
  {
    title: "Brand Development and PR",
    description:
      "Our team specializes in brand development and public relations to enhance your brand's image and reputation.",
    icon: Star2,
    href: "/brand-development-pr",
    buttonText: "Learn More",
    name: "Brand Development and PR",
  },
  {
    title: "Reputation and Data Protection",
    description:
      "We offer services to protect your online reputation and ensure the security of your data.",
    icon: Safe2,
    href: "/reputation-data-protection",
    buttonText: "Learn More",
    name: "Reputation and Data Protection",
  },
  {
    title: "Analytics and Strategy",
    description:
      "Our analytics and strategy services help you make data-driven decisions to drive your business forward.",
    icon: PieChart2,
    href: "/analytics-strategy",
    buttonText: "Learn More",
    name: "Analytics and Strategy",
  },
  {
    title: "Photo and Video Shooting Services",
    description:
      "We provide professional photo and video shooting services to capture your brand's essence.",
    icon: Camera,
    href: "/photo-video-shooting",
    buttonText: "Learn More",
    name: "Photo and Video Shooting Services",
  },
  {
    title: "Web and Web Application Development",
    description:
      "Our team develops high-quality websites and web applications tailored to your business needs.",
    icon: Programming,
    href: "/web-development",
    buttonText: "Learn More",
    name: "Web and Web Application Development",
  },
];

const DepartmentSection = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col px-5 md:px-8 gap-8 md:gap-16">
      <h2 className="font-bold text-5xl lg:text-7xl text-center">
        Departments
      </h2>
      <div className="flex flex-row flex-wrap gap-8 justify-center w-full">
        {departments.map((department, index) => (
          <DepartmentButton
            key={index}
            Icon={department.icon}
            href={department.href}
            name={department.name}
          />
        ))}
      </div>
    </section>
  );
};

export default DepartmentSection;
