import React from "react";
import Heading from "@/shared/ui/heading";
import Link from "@/shared/ui/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  Icon,
  title,
  description,
}) => {

  return (
    <Link
      href="/contact"
      className="flex flex-col lg:flex-row gap-4 bg-background  p-6 rounded-3xl border-2 border-border w-full flex-1 max-w-screen-xl hover:border-primary-500 transition-colors"
    >
      <div>
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <span className="w-5 lg:w-full border-2 border-primary-200"></span>
          <Icon size={64} color="var(--primary-500)" />
          <Heading
            as="h3"
            className="text-lg xl:text-2xl 2xl:text-3xl text-center font-bold lg:text-left"
          >
            {title}
          </Heading>
        </div>
        <p className="text-xl text-center lg:text-left mt-4">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
