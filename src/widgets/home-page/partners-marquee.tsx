import React from "react";
import { partnerMarquee } from "@/shared/models/awards";
import StaticMarquee from "@/shared/ui/static-marquee";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Heading from "@/shared/ui/heading";

const PartnersMarquee: React.FC = () => {
    const t = useTranslations("partners");

    return (
    <div className="p-6 bg-card overflow-hidden border-y-primary-200 h-max space-y-5 border-y-2">
      <Heading className="text-3xl text-center text-primary-500 font-bold uppercase" as="h2">{t("marqueeHeading")}</Heading>
      <StaticMarquee repeatCount={2}>
        {partnerMarquee.map((image, index) => (
          <div key={index} className="flex items-center justify-center mx-4">
            <Image
              src={image}
              alt="Partner logo"
              width={150}
              height={150}
              className="h-auto"
            />
          </div>
        ))}
      </StaticMarquee>
    </div>
  );
};

export default PartnersMarquee;
