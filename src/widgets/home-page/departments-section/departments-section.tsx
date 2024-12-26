import React from 'react';
import DragSlider from '../drag-slider';
import DepartmentCard from './department-card';
import ProgrammingIcon from '@/shared/assets/icons/programming-icon';

const departments = [
  {
    title: "Digital Marketing",
    description: "We provide comprehensive digital marketing services to help you reach your target audience and achieve your business goals.",
    icon: <ProgrammingIcon />,
    href: "/digital-marketing",
    buttonText: "Learn More",
    name: "Digital Marketing"
  },
  {
    title: "Brand Development and PR",
    description: "Our team specializes in brand development and public relations to enhance your brand's image and reputation.",
    icon: <ProgrammingIcon />,
    href: "/brand-development-pr",
    buttonText: "Learn More",
    name: "Brand Development and PR"
  },
  {
    title: "Reputation and Data Protection",
    description: "We offer services to protect your online reputation and ensure the security of your data.",
    icon: <ProgrammingIcon />,
    href: "/reputation-data-protection",
    buttonText: "Learn More",
    name: "Reputation and Data Protection"
  },
  {
    title: "Analytics and Strategy",
    description: "Our analytics and strategy services help you make data-driven decisions to drive your business forward.",
    icon: <ProgrammingIcon />,
    href: "/analytics-strategy",
    buttonText: "Learn More",
    name: "Analytics and Strategy"
  },
  {
    title: "Photo and Video Shooting Services",
    description: "We provide professional photo and video shooting services to capture your brand's essence.",
    icon: <ProgrammingIcon />,
    href: "/photo-video-shooting",
    buttonText: "Learn More",
    name: "Photo and Video Shooting Services"
  },
  {
    title: "Web and Web Application Development",
    description: "Our team develops high-quality websites and web applications tailored to your business needs.",
    icon: <ProgrammingIcon />,
    href: "/web-development",
    buttonText: "Learn More",
    name: "Web and Web Application Development"
  },
];

const DepartmentSection = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col gap-16 mb-32">
      <h2 className="font-display font-bold text-5xl lg:text-7xl text-center">
        Departments
      </h2>
      <DragSlider>
        {departments.map((department, index) => (
          <DepartmentCard
            key={index}
            title={department.title}
            icon={department.icon}
            href={department.href}
            buttonText={department.buttonText}
          />
        ))}
      </DragSlider>
    </section>
  );
};

export default DepartmentSection;
