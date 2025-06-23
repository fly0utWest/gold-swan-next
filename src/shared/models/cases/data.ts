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
  "Marketing Strategy",
  "Social Media Marketing",
  "3D Animation",
  "Content Creation",
  "Website Development",
  "App Development",
  "SERM",
  "ORM",
  "Monitoring",
  "Analytics",
  "Lead Generation",
  "YouTube SERM",
  "Deindexing",
  "Digital PR",
  "Reputation Management",
  "Healthcare",
  "Crisis Management",
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
    tags: [
      "ORM",
      "Reputation Management",
      "Healthcare",
      "Crisis Management",
      "SEO",
    ],
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
    previousCase: "regional-developer",
  },
  {
    slug: "gas-stations",
    tags: [
      "ORM",
      "Reputation Management",
      "Crisis Management",
      "Content Marketing",
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
    tags: ["ORM", "Reputation Management", "Crisis Management", "PR", "SERM"],
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
    nextCase: "taxi-service",
    previousCase: "gas-stations",
  },
  {
    slug: "taxi-service",
    tags: [
      "Social Media Marketing",
      "Content Creation",
      "Marketing Strategy",
      "ORM",
      "Monitoring",
    ],
    counts: {
      tasks: 3,
      solutions: 3,
      results: 4,
      conclusions: 3,
    },
    category: "marketing",
    industry: "other",
    difficulty: "medium",
    duration: "3.25 years",
    budget: "$40K-70K",
    featured: true,
    published: true,
    nextCase: "metallurgy-mining",
    previousCase: "baby-food",
  },
  {
    slug: "metallurgy-mining",
    tags: [
      "Reputation Management",
      "ORM",
      "Monitoring",
      "Content Creation",
      "HR",
    ],
    counts: {
      tasks: 3,
      solutions: 4,
      results: 3,
      conclusions: 3,
    },
    category: "reputation",
    industry: "other",
    difficulty: "medium",
    duration: "8 years",
    budget: "$15-30K",
    featured: true,
    published: true,
    nextCase: "sports-retail-leader",
    previousCase: "taxi-service",
  },
  {
    slug: "sports-retail-leader",
    tags: [
      "Reputation Management",
      "ORM",
      "Monitoring",
      "Content Creation",
      "HR",
    ],
    counts: {
      tasks: 4,
      solutions: 3,
      results: 3,
      conclusions: 3,
    },
    category: "reputation",
    industry: "other",
    difficulty: "medium",
    duration: "4 years",
    budget: "$60K/year",
    featured: true,
    published: true,
    nextCase: "plastic",
    previousCase: "metallurgy-mining",
  },
  {
    slug: "large-construction-company",
    tags: [
      "Reputation Management",
      "ORM",
      "Monitoring",
      "Content Creation",
      "HR",
    ],
    counts: {
      tasks: 6,
      solutions: 6,
      results: 6,
      conclusions: 3,
    },
    category: "reputation",
    industry: "other",
    difficulty: "hard",
    duration: "1.75 years",
    budget: "$35K-60K",
    featured: false,
    published: true,
    nextCase: "regional-developer",
    previousCase: "sports-retail-leader",
  },
  {
    slug: "regional-developer",
    tags: [
      "Reputation Management",
      "ORM",
      "Monitoring",
      "Content Creation",
      "HR",
    ],
    counts: {
      tasks: 4,
      solutions: 4,
      results: 3,
      conclusions: 3,
    },
    category: "reputation",
    industry: "other",
    difficulty: "medium",
    duration: "7 years",
    budget: "$15K-30K",
    featured: false,
    published: true,
    nextCase: "plastic",
    previousCase: "large-construction-company",
  },
  {
    slug: "sanitaryware-manufacturer",
    tags: [
      "Reputation Management",
      "ORM",
      "Monitoring",
      "Content Creation",
      "HR",
    ],
    counts: {
      tasks: 3,
      solutions: 8,
      results: 4,
      conclusions: 3,
    },
    category: "reputation",
    industry: "other",
    difficulty: "medium",
    duration: "2 years",
    budget: "$38K+/year",
    featured: false,
    published: true,
    nextCase: "cosmetics-manufacturer",
    previousCase: "auto-manufacturer",
  },
  {
    slug: "cosmetics-manufacturer",
    tags: [
      "Reputation Management",
      "ORM",
      "Monitoring",
      "Content Creation",
      "HR",
    ],
    counts: {
      tasks: 4,
      solutions: 3,
      results: 2,
      conclusions: 3,
    },
    category: "reputation",
    industry: "other",
    difficulty: "easy",
    duration: "4.75 years",
    budget: "$31K/year",
    featured: false,
    published: true,
    nextCase: "auto-manufacturer",
    previousCase: "sanitaryware-manufacturer",
  },
  {
    slug: "auto-manufacturer",
    tags: [
      "Reputation Management",
      "ORM",
      "Monitoring",
      "Content Creation",
      "HR",
    ],
    counts: {
      tasks: 4,
      solutions: 5,
      results: 2,
      conclusions: 3,
    },
    category: "reputation",
    industry: "other",
    difficulty: "medium",
    duration: "7 years",
    budget: "$90K/year",
    featured: true,
    published: true,
    nextCase: "sanitaryware-manufacturer",
    previousCase: "cosmetics-manufacturer",
  },
  {
    slug: "fitness-chain",
    tags: [
      "Reputation Management",
      "ORM",
      "Monitoring",
      "Content Creation",
      "HR",
    ],
    counts: {
      tasks: 6,
      solutions: 5,
      results: 4,
      conclusions: 3,
    },
    category: "reputation",
    industry: "other",
    difficulty: "medium",
    duration: "6 years",
    budget: "$53K/year",
    featured: false,
    published: true,
    nextCase: "travel-platform",
    previousCase: "gas-station-network",
  },
  {
    slug: "travel-platform",
    tags: [
      "Reputation Management",
      "ORM",
      "Monitoring",
      "Content Creation",
      "HR",
    ],
    counts: {
      tasks: 5,
      solutions: 5,
      results: 2,
      conclusions: 3,
    },
    category: "reputation",
    industry: "other",
    difficulty: "easy",
    duration: "4 years",
    budget: "$59K/year",
    featured: false,
    published: true,
    nextCase: "shoe-retailer",
    previousCase: "fitness-chain",
  },
  {
    slug: "shoe-retailer",
    tags: [
      "Reputation Management",
      "ORM",
      "Monitoring",
      "Content Creation",
      "HR",
    ],
    counts: {
      tasks: 2,
      solutions: 2,
      results: 2,
      conclusions: 3,
    },
    category: "reputation",
    industry: "retail",
    difficulty: "easy",
    duration: "6 months",
    budget: "$13K/year",
    featured: false,
    published: true,
    nextCase: "gas-station-network",
    previousCase: "travel-platform",
  },
  {
    slug: "gas-station-network",
    tags: [
      "Reputation Management",
      "ORM",
      "Monitoring",
      "Content Creation",
      "HR",
    ],
    counts: {
      tasks: 2,
      solutions: 2,
      results: 2,
      conclusions: 3,
    },
    category: "reputation",
    industry: "other",
    difficulty: "easy",
    duration: "8 years",
    budget: "$75K/year",
    featured: false,
    published: true,
    nextCase: "fitness-chain",
    previousCase: "shoe-retailer",
  },
  {
    slug: "premium-tech-retail",
    tags: [
      "Reputation Management",
      "ORM",
      "Monitoring",
      "Content Creation",
      "HR",
    ],
    counts: {
      tasks: 1,
      solutions: 3,
      results: 2,
      conclusions: 3,
    },
    category: "reputation",
    industry: "retail",
    difficulty: "easy",
    duration: "3.75 years",
    budget: "$27K/year",
    featured: true,
    published: true,
    nextCase: "plastic",
    previousCase: "gas-station-network",
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
