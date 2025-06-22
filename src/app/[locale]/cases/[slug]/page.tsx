import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Chip } from "@/components/ui/chip";
import {
  getCaseBySlug,
  getNextCase,
  getPreviousCase,
} from "@/shared/models/cases/data";
import { notFound } from "next/navigation";

interface CasePageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function CasePage({ params }: CasePageProps) {
  const { locale, slug } = await params;
  const caseMetadata = getCaseBySlug(slug);

  if (!caseMetadata) {
    notFound();
  }

  const t = await getTranslations(`cases.${slug}`);
  const labels = await getTranslations("cases.labels");
  const tagLabels = await getTranslations("cases.tags");

  // Get navigation cases
  const nextCase = getNextCase(slug);
  const previousCase = getPreviousCase(slug);

  // Helper functions for translations
  const getDifficultyLabel = (difficulty: string) => {
    return labels(`difficulty.${difficulty}`);
  };

  const getCategoryLabel = (category: string) => {
    return labels(`category.${category}`);
  };

  const getIndustryLabel = (industry: string) => {
    return labels(`industry.${industry}`);
  };

  const getTagLabel = (tag: string) => {
    return tagLabels(tag.toLowerCase().replace(/\s+/g, ""));
  };

  // Build arrays using counts from metadata
  const tasks = Array.from({ length: caseMetadata.counts.tasks }, (_, i) =>
    t(`tasks.${i}`)
  );

  const solutions = Array.from(
    { length: caseMetadata.counts.solutions },
    (_, i) => t(`solutions.${i}`)
  );

  const results = Array.from({ length: caseMetadata.counts.results }, (_, i) =>
    t(`results.${i}`)
  );

  const conclusions = Array.from(
    { length: caseMetadata.counts.conclusions },
    (_, i) => t(`conclusions.${i}`)
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white p-12 md:p-16 rounded-3xl mb-16 shadow-2xl border border-slate-700/50 dark:border-gray-700/50">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <h1 className="text-4xl md:text-6xl font-black leading-tight bg-gradient-to-r from-white via-blue-100 to-white dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                {t("name")}
              </h1>
              <div className="flex gap-2 flex-wrap">
                <Chip
                  variant="outline"
                  className="border-red-400/50 text-red-300 bg-red-900/20 backdrop-blur-sm"
                >
                  {labels("underNda")}
                </Chip>
                <Chip
                  variant="outline"
                  className="border-blue-400/50 text-blue-300 bg-blue-900/20 backdrop-blur-sm"
                >
                  {getCategoryLabel(caseMetadata.category)}
                </Chip>
                {caseMetadata.featured && (
                  <Chip
                    variant="outline"
                    className="border-amber-400/50 text-amber-300 bg-amber-900/20 backdrop-blur-sm"
                  >
                    ⭐ {labels("featured")}
                  </Chip>
                )}
              </div>
            </div>

            {/* Case metadata */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base">
              <div className="text-center p-4 bg-white/10 dark:bg-gray-800/30 rounded-xl backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
                <div className="font-semibold text-gray-200 dark:text-gray-300 mb-1">
                  {labels("duration")}
                </div>
                <div className="text-white dark:text-gray-100 font-medium">
                  {caseMetadata.duration}
                </div>
              </div>
              <div className="text-center p-4 bg-white/10 dark:bg-gray-800/30 rounded-xl backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
                <div className="font-semibold text-gray-200 dark:text-gray-300 mb-1">
                  {labels("budget")}
                </div>
                <div className="text-white dark:text-gray-100 font-medium">
                  {caseMetadata.budget}
                </div>
              </div>
              <div className="text-center p-4 bg-white/10 dark:bg-gray-800/30 rounded-xl backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
                <div className="font-semibold text-gray-200 dark:text-gray-300 mb-1">
                  {labels("difficulty.easy")}
                </div>
                <div
                  className={`font-medium ${
                    caseMetadata.difficulty === "easy"
                      ? "text-green-300"
                      : caseMetadata.difficulty === "medium"
                      ? "text-yellow-300"
                      : "text-red-300"
                  }`}
                >
                  {getDifficultyLabel(caseMetadata.difficulty)}
                </div>
              </div>
              <div className="text-center p-4 bg-white/10 dark:bg-gray-800/30 rounded-xl backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
                <div className="font-semibold text-gray-200 dark:text-gray-300 mb-1">
                  {labels("industries")}
                </div>
                <div className="text-white dark:text-gray-100 font-medium">
                  {getIndustryLabel(caseMetadata.industry)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tags Section */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {caseMetadata.tags.map((tag, index) => (
              <Chip
                key={index}
                variant="outline"
                className="text-sm border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors"
              >
                {getTagLabel(tag)}
              </Chip>
            ))}
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Situation */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              {labels("situation")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("situation")}
            </p>
          </div>

          {/* Financial Damage */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              {labels("financialDamage")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("finDamage")}
            </p>
          </div>

          {/* Problem */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/50 lg:col-span-2">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              {labels("problem")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("problem")}
            </p>
          </div>

          {/* Tasks */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              {labels("tasks")}
            </h2>
            <ul className="space-y-3">
              {tasks.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                >
                  <span className="text-green-500 font-bold mt-0.5 text-lg">
                    •
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              {labels("solutions")}
            </h2>
            <ul className="space-y-3">
              {solutions.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                >
                  <span className="text-purple-500 font-bold mt-0.5 text-lg">
                    •
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              {labels("results")}
            </h2>
            <ul className="space-y-3">
              {results.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300"
                >
                  <span className="text-emerald-500 font-bold mt-0.5 text-lg">
                    •
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Financial Effect */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/50">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              {labels("financialEffect")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("finEffect")}
            </p>
          </div>
        </section>

        {/* Conclusions – Full Width */}
        <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-12 border border-white/20 dark:border-gray-700/50">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
            {labels("conclusions")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conclusions.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="text-indigo-500 font-bold text-xl mt-0.5 bg-white dark:bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                    {idx + 1}
                  </span>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="flex justify-between items-center">
          {previousCase ? (
            <Link
              href={`/${locale}/cases/${previousCase.slug}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-slate-700 hover:bg-slate-600 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium border border-slate-600/50 dark:border-gray-600/50 shadow-md hover:shadow-xl"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {labels("previous")}:{" "}
              {previousCase.slug
                .replace(/-/g, " ")
                .replace(/\b\w/g, (l: string) => l.toUpperCase())}
            </Link>
          ) : (
            <div></div>
          )}

          {nextCase && (
            <Link
              href={`/${locale}/cases/${nextCase.slug}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium border border-blue-500/50 dark:border-blue-400/50 shadow-md hover:shadow-xl"
            >
              {labels("next")}:{" "}
              {nextCase.slug
                .replace(/-/g, " ")
                .replace(/\b\w/g, (l: string) => l.toUpperCase())}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}
        </section>
      </div>
    </main>
  );
}
