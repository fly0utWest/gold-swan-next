/**
 * Case Management System
 *
 * This module provides a data structure for managing case studies with:
 * - Metadata storage (tags, categories, counts, etc.)
 * - Navigation between cases (next/previous)
 * - Filtering and querying capabilities
 *
 * USAGE EXAMPLES:
 *
 * 1. Getting navigation:
 * ```typescript
 * const nextCase = getNextCase("plastic");
 * const prevCase = getPreviousCase("ecommerce");
 * ```
 *
 * 2. Filtering cases:
 * ```typescript
 * const reputationCases = getCasesByCategory("reputation");
 * const healthcareCases = getCasesByIndustry("healthcare");
 * const seoCases = getCasesByTags(["SEO"]);
 * ```
 */

export const allTags = [
  "Маркетинговая стратегия",
  "Продвижение в соц сетях",
  "3 д анимация",
  "Создание контента",
  "Разрабока сайта",
  "Разработка приложения",
  "SERM",
  "ORM",
  "Мониторинг",
  "Аналитика",
  "Лидогенерация",
  "SERM в Youtube",
  "Деиндексация",
  "Digital-PR",
  "Репутация",
  "Медицина",
  "Кризис-менеджмент",
  "SEO",
];

export interface CaseMetadata {
  slug: string;
  tags: string[];
  counts: {
    tasks: number;
    solutions: number;
    results: number;
    conclusions: number;
  };
  category:
    | "reputation"
    | "marketing"
    | "branding"
    | "analytics"
    | "development";
  industry:
    | "healthcare"
    | "retail"
    | "technology"
    | "finance"
    | "education"
    | "other";
  difficulty: "easy" | "medium" | "hard";
  duration: string; // e.g., "2-3 months"
  budget: string; // e.g., "$10k-50k"
  featured?: boolean; // For highlighting special cases
  published: boolean; // To control case visibility
  nextCase?: string; // Slug of the next case
  previousCase?: string; // Slug of the previous case
}

export const cases: CaseMetadata[] = [
  {
    slug: "plastic",
    tags: ["ORM", "Репутация", "Медицина", "Кризис-менеджмент", "SEO"],
    counts: {
      tasks: 5,
      solutions: 4,
      results: 3,
      conclusions: 3,
    },
    category: "reputation",
    industry: "healthcare",
    difficulty: "hard",
    duration: "2-3 months",
    budget: "$15k-30k",
    featured: true,
    published: true,
    nextCase: "gas-stations",
    previousCase: "baby-food",
  },
  {
    slug: "gas-stations",
    tags: [
      "ORM",
      "Репутация",
      "Кризис-менеджмент",
      "Контент-маркетинг",
      "SERM",
    ],
    counts: {
      tasks: 5,
      solutions: 5,
      results: 3,
      conclusions: 3,
    },
    category: "reputation",
    industry: "retail",
    difficulty: "hard",
    duration: "3-4 months",
    budget: "$25k-50k",
    featured: true,
    published: true,
    nextCase: "baby-food",
    previousCase: "plastic",
  },
  {
    slug: "baby-food",
    tags: ["ORM", "Репутация", "Кризис-менеджмент", "PR", "SERM"],
    counts: {
      tasks: 4,
      solutions: 4,
      results: 2,
      conclusions: 3,
    },
    category: "reputation",
    industry: "retail",
    difficulty: "hard",
    duration: "4-6 months",
    budget: "$30k-60k",
    featured: true,
    published: true,
    nextCase: "plastic",
    previousCase: "gas-stations",
  },
];

export function getCaseBySlug(slug: string): CaseMetadata | undefined {
  return cases.find((case_) => case_.slug === slug && case_.published);
}

export function getAllCases(): CaseMetadata[] {
  return cases.filter((case_) => case_.published);
}

export function getFeaturedCases(): CaseMetadata[] {
  return cases.filter((case_) => case_.featured && case_.published);
}

export function getCasesByCategory(
  category: CaseMetadata["category"]
): CaseMetadata[] {
  return cases.filter(
    (case_) => case_.category === category && case_.published
  );
}

export function getCasesByIndustry(
  industry: CaseMetadata["industry"]
): CaseMetadata[] {
  return cases.filter(
    (case_) => case_.industry === industry && case_.published
  );
}

export function getCasesByTags(tags: string[]): CaseMetadata[] {
  return cases.filter(
    (case_) => case_.published && tags.some((tag) => case_.tags.includes(tag))
  );
}

export function getCasesByDifficulty(
  difficulty: CaseMetadata["difficulty"]
): CaseMetadata[] {
  return cases.filter(
    (case_) => case_.difficulty === difficulty && case_.published
  );
}

export function getNextCase(currentSlug: string): CaseMetadata | undefined {
  const currentCase = getCaseBySlug(currentSlug);
  if (!currentCase || !currentCase.nextCase) {
    return undefined;
  }
  return getCaseBySlug(currentCase.nextCase);
}

export function getPreviousCase(currentSlug: string): CaseMetadata | undefined {
  const currentCase = getCaseBySlug(currentSlug);
  if (!currentCase || !currentCase.previousCase) {
    return undefined;
  }
  return getCaseBySlug(currentCase.previousCase);
}

export function getAllCategories(): CaseMetadata["category"][] {
  return Array.from(new Set(cases.map((case_) => case_.category)));
}

export function getAllIndustries(): CaseMetadata["industry"][] {
  return Array.from(new Set(cases.map((case_) => case_.industry)));
}

export function getAllDifficulties(): CaseMetadata["difficulty"][] {
  return Array.from(new Set(cases.map((case_) => case_.difficulty)));
}
