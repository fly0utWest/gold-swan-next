import React from "react";
import Heading from "@/shared/ui/heading";

interface DepartmentServicesProps {
  title: string;
  children: React.ReactNode;
  rounded?: boolean;
}

const DepartmentServices: React.FC<DepartmentServicesProps> = ({
  children,
  title,
  rounded = false,
}) => {
  return (
    <div
      className={`flex justify-center items-center flex-col gap-16 border-b-2 py-12 px-4 md:px-12 lg:p-20
                    border-neutral-100 bg-white dark:bg-black dark:border-border ${
                      rounded ? "rounded-b-3xl md:rounded-b-6xl" : ""
                    }`}
    >
      <Heading
        as="h2"
        className="text-center text-outline-primary-500 text-background shadow-primary-400 text-5xl lg:text-7xl font-bold"
        id="departments"
      >
        {title}
      </Heading>
      <section className="grid px-6 gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-4 lg:gap-8 place-content-center">
        {children}
      </section>
    </div>
  );
};

export default DepartmentServices;
