import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Chip } from "@/components/ui/chip";
import {
  getAllCases,
  getAllCategories,
  getAllIndustries,
} from "@/shared/models/cases/data";
import { Metadata } from "next";

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
  const t = await getTranslations("cases.listing");
  const labels = await getTranslations("cases.labels");

  const allCases = getAllCases();
  const categories = getAllCategories();
  const industries = getAllIndustries();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white p-8 md:p-12 rounded-2xl mb-12 shadow-2xl border border-slate-700/50 dark:border-gray-700/50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent drop-shadow-sm mb-6">
              {t("title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 max-w-3xl mx-auto">
              {t("description")}
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {allCases.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              {labels("totalCases")}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {categories.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              {labels("categories")}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {industries.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              {labels("industries")}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              {allCases.filter((c) => c.featured).length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              {labels("featured")}
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCases.map((caseItem) => (
            <Link
              key={caseItem.slug}
              href={`/cases/${caseItem.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {caseItem.slug}
                  </h3>
                  {caseItem.featured && (
                    <Chip
                      variant="outline"
                      className="border-green-400/50 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
                    >
                      {labels("featured")}
                    </Chip>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Chip
                    variant="outline"
                    className="text-xs border-blue-400/50 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                  >
                    {caseItem.category}
                  </Chip>
                  <Chip
                    variant="outline"
                    className="text-xs border-purple-400/50 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20"
                  >
                    {caseItem.industry}
                  </Chip>
                  <Chip
                    variant="outline"
                    className="text-xs border-orange-400/50 text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20"
                  >
                    {caseItem.difficulty}
                  </Chip>
                </div>

                {/* Metadata */}
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <div className="font-semibold text-gray-500 dark:text-gray-400">
                      {labels("duration")}
                    </div>
                    <div className="text-gray-900 dark:text-white">
                      {caseItem.duration}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-500 dark:text-gray-400">
                      {labels("budget")}
                    </div>
                    <div className="text-gray-900 dark:text-white">
                      {caseItem.budget}
                    </div>
                  </div>
                </div>

                {/* Top Tags */}
                <div className="flex flex-wrap gap-1">
                  {caseItem.tags.slice(0, 3).map((tag, index) => (
                    <Chip
                      key={index}
                      variant="outline"
                      className="text-xs border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300"
                    >
                      {tag}
                    </Chip>
                  ))}
                  {caseItem.tags.length > 3 && (
                    <Chip
                      variant="outline"
                      className="text-xs border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300"
                    >
                      +{caseItem.tags.length - 3}
                    </Chip>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white p-8 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-lg mb-6 text-blue-100 dark:text-blue-200">
              {t("cta.description")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-400 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              {t("cta.button")}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
