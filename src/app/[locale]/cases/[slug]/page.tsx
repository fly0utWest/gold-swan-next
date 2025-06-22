import { useTranslations } from "next-intl";
import Link from "next/link";
import { Chip } from "@/components/ui/chip";
import {
  getCaseBySlug,
  getNextCase,
  getPreviousCase,
} from "@/shared/models/cases/data";
import { notFound } from "next/navigation";

interface CasePageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default function CasePage({ params }: CasePageProps) {
  const caseMetadata = getCaseBySlug(params.slug);

  if (!caseMetadata) {
    notFound();
  }

  const t = useTranslations(`cases.${params.slug}`);
  const labels = useTranslations("cases.labels");

  // Get navigation cases
  const nextCase = getNextCase(params.slug);
  const previousCase = getPreviousCase(params.slug);

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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white p-8 md:p-12 rounded-2xl mb-12 shadow-2xl border border-slate-700/50 dark:border-gray-700/50">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent drop-shadow-sm">
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
                  {caseMetadata.category}
                </Chip>
                {caseMetadata.featured && (
                  <Chip
                    variant="outline"
                    className="border-green-400/50 text-green-300 bg-green-900/20 backdrop-blur-sm"
                  >
                    {labels("featured")}
                  </Chip>
                )}
              </div>
            </div>

            {/* Case metadata */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base">
              <div className="text-center p-3 bg-white/10 dark:bg-gray-800/30 rounded-lg backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
                <div className="font-semibold text-gray-200 dark:text-gray-300">
                  {labels("duration")}
                </div>
                <div className="text-white dark:text-gray-100">
                  {caseMetadata.duration}
                </div>
              </div>
              <div className="text-center p-3 bg-white/10 dark:bg-gray-800/30 rounded-lg backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
                <div className="font-semibold text-gray-200 dark:text-gray-300">
                  {labels("budget")}
                </div>
                <div className="text-white dark:text-gray-100">
                  {caseMetadata.budget}
                </div>
              </div>
              <div className="text-center p-3 bg-white/10 dark:bg-gray-800/30 rounded-lg backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
                <div className="font-semibold text-gray-200 dark:text-gray-300">
                  {labels("difficulty")}
                </div>
                <div className="capitalize text-white dark:text-gray-100">
                  {caseMetadata.difficulty}
                </div>
              </div>
              <div className="text-center p-3 bg-white/10 dark:bg-gray-800/30 rounded-lg backdrop-blur-sm border border-white/20 dark:border-gray-700/50">
                <div className="font-semibold text-gray-200 dark:text-gray-300">
                  {labels("industry")}
                </div>
                <div className="capitalize text-white dark:text-gray-100">
                  {caseMetadata.industry}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tags Section */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {caseMetadata.tags.map((tag, index) => (
              <Chip key={index} variant="outline" className="text-sm">
                {tag}
              </Chip>
            ))}
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Situation */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              {labels("situation")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("situation")}
            </p>
          </div>

          {/* Financial Damage */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              {labels("financialDamage")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("finDamage")}
            </p>
          </div>

          {/* Problem */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow lg:col-span-2">
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              {labels("problem")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("problem")}
            </p>
          </div>

          {/* Tasks */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              {labels("tasks")}
            </h2>
            <ul className="space-y-2">
              {tasks.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  <span className="text-green-500 font-bold mt-0.5">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              {labels("solutions")}
            </h2>
            <ul className="space-y-2">
              {solutions.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  <span className="text-purple-500 font-bold mt-0.5">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              {labels("results")}
            </h2>
            <ul className="space-y-2">
              {results.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  <span className="text-emerald-500 font-bold mt-0.5">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Financial Effect */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              {labels("financialEffect")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("finEffect")}
            </p>
          </div>
        </section>

        {/* Conclusions – Full Width */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
            <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
            {labels("conclusions")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conclusions.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-start gap-3">
                  <span className="text-indigo-500 font-bold text-lg mt-0.5">
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
              href={`/cases/${previousCase.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium border border-slate-600/50 dark:border-gray-600/50"
            >
              ← {labels("previous")}: {previousCase.slug}
            </Link>
          ) : (
            <div></div>
          )}

          {nextCase && (
            <Link
              href={`/cases/${nextCase.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium border border-blue-500/50 dark:border-blue-400/50 shadow-md hover:shadow-xl"
            >
              {labels("next")}: {nextCase.slug} →
            </Link>
          )}
        </section>
      </div>
    </main>
  );
}
