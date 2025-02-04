import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.error");

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default function CatchAll() {
  // `not-found` page currently only works if it's a top-level file (which is not possible with i18n)
  // or if it's called from a server component (which is what we're doing here)
  notFound();
  return null;
}
