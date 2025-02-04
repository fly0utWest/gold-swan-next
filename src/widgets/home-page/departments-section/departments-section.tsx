import React from "react";
import { DepartmentButton } from "@/shared/ui/department-button";
import { useTranslations } from "next-intl";
import Heading from "@/shared/ui/heading";
import departmentButtons from "@/shared/models/departments/buttons";

const DepartmentSection = () => {
  const t = useTranslations("departments.section");

  return (
    <div className="my-16 space-y-16">
      <Heading
        as="h2"
        className="font-bold text-5xl lg:text-7xl text-center"
        id="departments"
      >
        {t("heading")}
      </Heading>
      <section className="max-w-screen-2xl flex justify-center items-center flex-col px-5 md:px-8 md:mx-auto gap-8 md:gap-16">
        <div className="flex flex-row flex-wrap gap-8 justify-center w-full">
          {departmentButtons.map((department, index) => (
            <DepartmentButton
              key={index}
              Icon={department.icon}
              href={department.href}
              name={t(department.title)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DepartmentSection;
