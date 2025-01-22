import React from "react";
import Heading from "@/shared/ui/heading";
import Marquee from "@/shared/ui/marquee";
import SectionDelimeter from "@/shared/ui/section-delimeter";
import Image from "next/image";
import AwardCard from "@/shared/ui/award-card";

const AwardsSetion = () => {
  const awardCards = [
    {
      title: "Best Data Solutions Platform",
      description: "The Recap: Tech Innovation Awards 2023",
      image: "1.png",
    },
    {
      title: "Top 5",
      description: "Top 5 PR agencies AllAdvertising",
      image: "2.png",
    },
    {
      title: "Reputation House",
      description: "Top Reputation Management Firms 2020 Reputation House",
      image: "2.png",
    },
    {
      title: "TOP 20",
      description: "AllAdvertising Marketing Research",
      image: "4.svg",
    },
    {
      title: "Reputation department of Gold Swan Agency",
      description:
        "The Best Use of Artificial Intelligence and Machine Learning.",
      image: "3.png",
      large: true,
    },
    {
      title: "Reputation department of Gold Swan Agency",
      description: "Business sector innovation of the year.",
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
        Our regalia
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
