import { getTranslations } from "next-intl/server";
import {
  getAllCases,
  getAllCategories,
  getAllIndustries,
} from "@/shared/models/cases/data";
import { Metadata } from "next";
import CasesPageClient from "./CasesPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.cases");

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

interface CasesPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function CasesPage({ params }: CasesPageProps) {
  const { locale } = await params;

  const allCases = getAllCases();
  const categories = getAllCategories();
  const industries = getAllIndustries();

  return (
    <CasesPageClient
      allCases={allCases}
      categories={categories}
      industries={industries}
      locale={locale}
    />
  );
}
