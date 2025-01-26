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
    <div className="my-16 space-y-16">
      <Heading
        as="h2"
        className="font-bold text-5xl lg:text-7xl text-center px-5 md:px-8"
        id="departments"
      >
        {t("heading")}
      </Heading>
      <section className="w-full flex justify-center items-center flex-col gap-8 md:gap-16 md:mx-auto">
        <div className="flex flex-row flex-wrap gap-20 justify-center items-center w-full px-5 md:px-8 md:max-w-screen-2xl">
          {awardChevrons.map((image, index) => (
            <Image
              key={index}
              className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              src={image}
              alt="Award image"
              width={175}
              height={175}
            />
          ))}
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
