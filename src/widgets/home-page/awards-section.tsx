import React, { use } from "react";
import Heading from "@/shared/ui/heading";
import Marquee from "@/shared/ui/marquee";
import SectionDelimeter from "@/shared/ui/section-delimeter";
import Image from "next/image";
import AwardCard from "@/shared/ui/award-card";
import { useTranslations } from "next-intl";

const AwardsSetion = () => {
  const t = useTranslations("awards");

  const awardCards = [
    {
      title: t("bestDataSolutionsPlatform.title"),
      description: t("bestDataSolutionsPlatform.description"),
      image: "1.png",
    },
    {
      title: t("top5.title"),
      description: t("top5.description"),
      image: "2.png",
    },
    {
      title: t("reputationHouse.title"),
      description: t("reputationHouse.description"),
      image: "2.png",
    },
    {
      title: t("top20.title"),
      description: t("top20.description"),
      image: "4.svg",
    },
    {
      title: t("reputationDeptGoldSwanAI.title"),
      description: t("reputationDeptGoldSwanAI.description"),
      image: "3.png",
      large: true,
    },
    {
      title: t("reputationDeptGoldSwanInnovation.title"),
      description: t("reputationDeptGoldSwanInnovation.description"),
      image: "3.png",
      large: true,
    },
  ];

  return (
    <div className="my-16 space-y-16">
      <Heading
        as="h2"
        className="font-bold text-5xl lg:text-7xl text-center"
        id="departments"
      >
        {t("heading")}
      </Heading>
      <section className="w-full flex justify-center items-center flex-col px-5 md:px-8 gap-8 md:gap-16 md:max-w-screen-2xl md:mx-auto">
        <div className="flex flex-row flex-wrap gap-x-20 justify-center items-center w-full">
          {[1, 2, 3, 4, 5].map((index) => (
            <Image
              key={index}
              className="object-contain"
              src={`/images/awards/${index}.webp`}
              alt="Award image"
              width={200}
              height={200}
            />
          ))}
        </div>
        <SectionDelimeter />
        <div className="flex flex-col flex-wrap gap-8 w-full md:flex-row">
          {awardCards.map((award, index) => (
            <AwardCard key={index} {...award} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AwardsSetion;
