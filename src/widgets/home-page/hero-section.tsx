import React from "react";
import BrandLogo from "@/shared/ui/brand-logo";
import Button from "@/shared/ui/button";
import Link from "@/shared/ui/link";
import Marquee from "@/shared/ui/marquee";
import { useTranslations } from "next-intl";
import { ArrowDown } from "lucide-react";
import Heading from "@/shared/ui/heading";

const HeroSection = () => {
  const t = useTranslations("misc");

  return (
    <section className="p-6 flex flex-col justify-center items-center gap-16 md:gap-8 overflow-y-hidden relative bg-background-secondary min-h-[100dvh] overflow-x-hidden">
      <div className=" space-y-4">
        <Heading
          as="h1"
          className="text-6xl *:block text-center space-y-2 md:text-8xl"
        >
          <span className="text-primary-400 animate-slideInFromLeft">
            Gold Swan
          </span>
          <span className="animate-slideInFromRight text-5xl md:7xl uppercase">
            All-In Agency
          </span>
        </Heading>
        <div className="flex flex-col items-center text-center">
          <BrandLogo className="animate-opacityIn" size={250} />
          <p className="text-2xl">
            <span className="text-primary-500">&#x275D;</span>
            {t("slogan")}
            <span className="text-primary-500">&#x275E;</span>
          </p>
        </div>
      </div>
      <Link href="/contact" className="block">
        <Button className="overflow-hidden uppercase word-spacing-6 w-48 px-[0!important]">
          <Marquee repeatCount={2}>{t("contactUs")}</Marquee>
        </Button>
      </Link>
      <div className="flex flex-col items-center gap-4">
        <span className="text-bold text-xl uppercase">{t("knowMore")}</span>
        <ArrowDown className="animate-bounce" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
