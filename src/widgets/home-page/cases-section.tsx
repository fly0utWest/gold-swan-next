import React from "react";
import Heading from "@/shared/ui/heading";
import SectionDelimeter from "@/shared/ui/section-delimeter";
import Button from "@/shared/ui/button";
import Link from "@/shared/ui/link";
import { useTranslations } from "next-intl";

const CasesSection = () => {
  const t = useTranslations("cases.home");

  return (
    <div className="space-y-16 w-full">
      <section
        id="cases"
        className="w-full flex justify-center items-center flex-col gap-8 md:gap-16 md:mx-auto"
      >
        <div
          className={`flex w-full flex-col gap-24 bg-background-secondary border-border border-b-2 p-16`}
        >
          <Heading
            as="h2"
            className="text-center text-outline-primary-500 text-background shadow-primary-400 text-5xl lg:text-7xl font-bold"
            id="cases"
          >
            {t("title")}
          </Heading>
          <div className="flex justify-center">
            <Link href="/cases">
              <Button className="dark:bg-primary-500 dark:text-white dark:hover:bg-primary-400 dark:hover:text-white bg-primary-100 text-primary-500 hover:bg-primary-500 hover:text-white">
                {t("cta")}
              </Button>
            </Link>
          </div>
        </div>
        <SectionDelimeter />
      </section>
    </div>
  );
};

export default CasesSection;
