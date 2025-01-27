import React, { use } from "react";
import Image from "next/image";
import { partnerLogos, partnerMarquee } from "@/shared/models/awards";
import Heading from "@/shared/ui/heading";
import { useTranslations } from "next-intl";
import StaticMarquee from "@/shared/ui/static-marquee";

interface PartnersSectionProps {
  outerMargin?: number | string;
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ outerMargin }) => {
  const t = useTranslations("partners");
  return (
    <div
      className={`flex flex-col gap-24 bg-backgroundSecondary border-border border-y-2 p-16 ${
        outerMargin ? `my-${outerMargin}` : ""
      }`}
    >
      <Heading
        as="h2"
        className="text-center text-outline-primary-500 text-background shadow-primary-400 text-5xl lg:text-7xl font-bold"
        id="partners"
      >
        {t("heading")}
      </Heading>
      <section className="w-full">
        <div className="w-full flex justify-center items-center flex-col flex-wrap md:flex-row gap-16  md:max-w-screen-2xl md:mx-auto">
          {partnerLogos.map((image, index) => (
            <Image
              key={index}
              className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              src={image}
              alt="Partner logo"
              width={200}
              height={200}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PartnersSection;
