import React from "react";
import Heading from "@/shared/ui/heading";
import SectionDelimeter from "@/shared/ui/section-delimeter";
import Image from "next/image";
import AwardCard from "@/shared/ui/award-card";
import { useTranslations } from "next-intl";
import { awards } from "@/shared/models/awards";
import { awardChevrons } from "@/shared/models/awards";

const AwardsSetion = () => {
  const t = useTranslations("awards");

  return (
    <div className="space-y-16 w-full">
      <section className="w-full flex justify-center items-center flex-col gap-8 md:gap-16 md:mx-auto">
        <div
          className={`flex w-full flex-col gap-24 bg-background-secondary border-border border-b-2 p-16`}
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
              {awardChevrons.map((image, index) => (
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
        <SectionDelimeter />
        <div className="flex flex-col flex-wrap gap-8 w-full md:flex-row px-5 md:px-8 md:max-w-screen-2xl">
          {awards.map((award, index) => (
            <AwardCard
              key={index}
              {...award}
              title={t(award.title)}
              description={t(award.description)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AwardsSetion;
