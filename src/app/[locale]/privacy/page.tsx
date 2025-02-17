import React from "react";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Heading from "@/shared/ui/heading";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.privacy");

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default async function PrivacyPage() {
  const t = await getTranslations("privacy");

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 lg:mx-auto max-w-screen-xl">
      <div className="flex flex-col gap-4 text-center">
        <Heading className="font-bold text-5xl lg:text-7xl text-center">
          {t("heading")}
        </Heading>
        <p className="text-xl">{t("description")}</p>
        <p className="text-md">{t("lastUpdated")}</p>
      </div>
      <section>

      </section>
    </div>
  );
}
