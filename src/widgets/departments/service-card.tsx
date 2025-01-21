import React from "react";
import Heading from "@/shared/ui/heading";
import { useTranslations } from "next-intl";
import Link from "@/shared/ui/link";

interface ServicestCardProps {
  Icon: (allProps: any) => JSX.Element;
  title: string;
  description: string;
}

const ServicesCard: React.FC<ServicestCardProps> = ({
  Icon,
  title,
  description,
}) => {
  const t = useTranslations("projects");

  return (
    <Link href="/contact" className="flex flex-col lg:flex-row gap-4 bg-neutral-100 dark:bg-background  p-6 rounded-3xl border-2 border-neutral-800 w-full flex-1 max-w-screen-xl hover:border-primary-500 transition-colors">
      <div className="lg:w-1/2">
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <span className="w-[20px] lg:w-full border-2 border-primary-200"></span>
          <Icon size={64} color="var(--primary-500)" iconStyle="Bold" />
          <Heading
            as="h3"
            className="text-3xl text-center font-bold lg:text-left"
          >
            {title}
          </Heading>
        </div>
        <p className="text-xl text-center lg:text-left mt-4">{description}</p>
      </div>
    </Link>
  );
};

export default ServicesCard;
