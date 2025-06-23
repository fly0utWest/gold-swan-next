"use client";

import Link from "next/link";
import { Chip } from "@/components/ui/chip";
import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { allTags } from "@/shared/models/cases/data";

interface CasesPageClientProps {
  allCases: any[];
  categories: string[];
  industries: string[];
  locale: string;
}

export default function CasesPageClient({
  allCases,
  categories,
  industries,
  locale,
}: CasesPageClientProps) {
  const t = useTranslations("cases.listing");
  const labels = useTranslations("cases.labels");
  const tagLabels = useTranslations("cases.tags");

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const difficulties = ["easy", "medium", "hard"];

  const filteredCases = useMemo(() => {
    let filtered = allCases.filter((caseItem) => {
      const categoryMatch =
        selectedCategory === "all" || caseItem.category === selectedCategory;
      const industryMatch =
        selectedIndustry === "all" || caseItem.industry === selectedIndustry;
      const difficultyMatch =
        selectedDifficulty === "all" ||
        caseItem.difficulty === selectedDifficulty;
      // AND logic for tags
      const tagsMatch =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => caseItem.tags.includes(tag));
      return categoryMatch && industryMatch && difficultyMatch && tagsMatch;
    });
    // Featured first
    filtered = [
      ...filtered.filter((c) => c.featured),
      ...filtered.filter((c) => !c.featured),
    ];
    return filtered;
  }, [
    allCases,
    selectedCategory,
    selectedIndustry,
    selectedDifficulty,
    selectedTags,
  ]);

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

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-black dark:via-neutral-950 dark:to-black">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section with Filters */}
        <section className="relative overflow-hidden bg-gradient-to-r from-amber-900 via-yellow-900 to-amber-900 dark:from-black dark:via-neutral-950 dark:to-black text-white p-12 md:p-16 rounded-3xl mb-16 shadow-2xl border border-amber-700/50 dark:border-gray-700/50">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-amber-600/20"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-white via-yellow-100 to-white dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent drop-shadow-lg mb-8">
              {t("title")}
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 dark:text-yellow-200 max-w-3xl mx-auto leading-relaxed mb-8">
              {t("description")}
            </p>
            {/* Filters moved here */}
            <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 dark:border-gray-700/50 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                {/* Category Filter */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 shadow-sm"
                  >
                    <option value="all">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {getCategoryLabel(category)}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Industry Filter */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Industry
                  </label>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 shadow-sm"
                  >
                    <option value="all">All Industries</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {getIndustryLabel(industry)}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Difficulty Filter */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Difficulty
                  </label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 shadow-sm"
                  >
                    <option value="all">All Difficulties</option>
                    {difficulties.map((difficulty) => (
                      <option key={difficulty} value={difficulty}>
                        {getDifficultyLabel(difficulty)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Tag Filter Chips */}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {allTags.map((tag) => (
                  <Chip
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className={`cursor-pointer text-sm border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors ${
                      selectedTags.includes(tag)
                        ? "bg-yellow-200 dark:bg-yellow-700/70 border-yellow-400 dark:border-yellow-500 text-yellow-900 dark:text-yellow-100"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedTags((prev) =>
                        prev.includes(tag)
                          ? prev.filter((t) => t !== tag)
                          : [...prev, tag]
                      );
                    }}
                  >
                    {getTagLabel(tag)}
                  </Chip>
                ))}
              </div>
              {/* Results Count & Clear Filters */}
              <div className="mt-2 flex items-center justify-between">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Showing{" "}
                  <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                    {filteredCases.length}
                  </span>{" "}
                  of <span className="font-semibold">{allCases.length}</span>{" "}
                  cases
                </div>
                {(selectedCategory !== "all" ||
                  selectedIndustry !== "all" ||
                  selectedDifficulty !== "all" ||
                  selectedTags.length > 0) && (
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedIndustry("all");
                      setSelectedDifficulty("all");
                      setSelectedTags([]);
                    }}
                    className="text-sm text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 font-medium transition-colors"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Cases List */}
        <section className="space-y-6">
          {filteredCases.map((caseItem) => (
            <Link
              key={caseItem.slug}
              href={`/${locale}/cases/${caseItem.slug}`}
              className="group block bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/50 hover:border-yellow-300 dark:hover:border-yellow-600 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                        {caseItem.slug
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (l: string) => l.toUpperCase())}
                      </h3>
                      {caseItem.featured && (
                        <Chip
                          variant="outline"
                          className="text-xs border-amber-400/50 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 font-semibold"
                        >
                          ⭐ {labels("featured")}
                        </Chip>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 mb-6">
                      <Chip
                        variant="outline"
                        className="text-sm border-yellow-400/50 text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 font-medium"
                      >
                        {getCategoryLabel(caseItem.category)}
                      </Chip>
                      <Chip
                        variant="outline"
                        className="text-sm border-amber-400/50 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 font-medium"
                      >
                        {getIndustryLabel(caseItem.industry)}
                      </Chip>
                      <Chip
                        variant="outline"
                        className={`text-sm font-medium ${
                          caseItem.difficulty === "easy"
                            ? "border-green-400/50 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
                            : caseItem.difficulty === "medium"
                            ? "border-yellow-400/50 text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
                            : "border-red-400/50 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20"
                        }`}
                      >
                        {getDifficultyLabel(caseItem.difficulty)}
                      </Chip>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                        <div className="font-semibold text-gray-500 dark:text-gray-400 text-sm mb-1">
                          {labels("duration")}
                        </div>
                        <div className="text-gray-900 dark:text-white font-medium">
                          {caseItem.duration}
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                        <div className="font-semibold text-gray-500 dark:text-gray-400 text-sm mb-1">
                          {labels("budget")}
                        </div>
                        <div className="text-gray-900 dark:text-white font-medium">
                          {caseItem.budget}
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                        <div className="font-semibold text-gray-500 dark:text-gray-400 text-sm mb-1">
                          {labels("tasks")}
                        </div>
                        <div className="text-gray-900 dark:text-white font-medium">
                          {caseItem.counts.tasks} tasks
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="font-semibold text-gray-500 dark:text-gray-400 mb-3">
                        Tags
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {caseItem.tags
                          .slice(0, 6)
                          .map((tag: string, index: number) => (
                            <Chip
                              key={index}
                              variant="outline"
                              className="text-xs border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors"
                            >
                              {getTagLabel(tag)}
                            </Chip>
                          ))}
                        {caseItem.tags.length > 6 && (
                          <Chip
                            variant="outline"
                            className="text-xs border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50"
                          >
                            +{caseItem.tags.length - 6}
                          </Chip>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <div className="relative overflow-hidden bg-gradient-to-r from-yellow-600 via-amber-600 to-amber-600 dark:from-black dark:via-neutral-950 dark:to-black text-white p-12 rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-amber-600/20"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-xl mb-8 text-yellow-100 dark:text-yellow-200 max-w-2xl mx-auto leading-relaxed">
                {t("cta.description")}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-yellow-600 dark:bg-gray-800 dark:text-yellow-400 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                {t("cta.button")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
