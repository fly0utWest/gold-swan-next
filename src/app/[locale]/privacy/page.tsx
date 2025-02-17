import React from "react";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Heading from "@/shared/ui/heading";
import { privacySections } from "@/shared/models/privacy";

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
    <div className="w-full h-full flex flex-col gap-8 items-center justify-center p-6 lg:mx-auto max-w-screen-xl">
      <div className="flex flex-col gap-4 text-center">
        <Heading as="h1" className="font-bold text-5xl lg:text-7xl text-center">
          {t("heading")}
        </Heading>
        <p className="text-xl">{t("description")}</p>
        <p className="text-md">{t("lastUpdated")}</p>
      </div>
      <div className="w-full">
        {privacySections.map((section) => (
          <div className="my-12" key={section.sectionKey}>
            <Heading as="h2" className="font-bold text-2xl text-primary-500">
              {t(`sections.${section.sectionKey}.${section.title}`)}
            </Heading>
            <p className="text-xl">{t(`sections.${section.sectionKey}.${section.description}`)}</p>
            {section.items.length > 0 ? (
              <ol className="list-inside text-lg list-decimal">
                {section.items.map((itemKey) => (
                  <li className="marker:text-primary-200" key={itemKey}>
                    {t(`sections.${section.sectionKey}.items.${itemKey}`)}
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
