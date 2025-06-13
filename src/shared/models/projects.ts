import {
  BotMessageSquare,
  Bitcoin,
  SmartphoneNfc,
  Activity,
  LucideIcon,
} from "lucide-react";


export interface Project {
  Icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  attention?: string;
  status?: "coming-soon" | "beta" | "production";
  link?: string;
  note?: string;
}

export const upcomingProjects: Project[] = [
  {
    Icon: BotMessageSquare,
    title: "aiSupport.title",
    description: "aiSupport.description",
    features: [
      "aiSupport.features.availability",
      "aiSupport.features.automation",
      "aiSupport.features.integration",
      "aiSupport.features.learning",
      "aiSupport.features.analytics",
      "aiSupport.features.scalability",
      "aiSupport.features.automation",
      "aiSupport.features.interactions",
    ],
    attention: "aiSupport.attention",
    status: "beta",
    link: "https://growplex.dev/products/platform",
  },
  {
    Icon: Activity,
    title: "smmBot.title",
    description: "smmBot.description",
    features: [
      "smmBot.features.postStyleGeneration",
      "smmBot.features.contentCreation",
      "smmBot.features.contentPlanning",
      "smmBot.features.postIdeaSuggestions",
      "smmBot.features.textRewriting",
      "smmBot.features.textSpellingCheck",
      "smmBot.features.reelScripts",
      "smmBot.features.storyScripts",
      "smmBot.features.profileHeaderDesign",
      "smmBot.features.instagramVideoDownloader",
      "smmBot.features.imageGeneration",
      "smmBot.features.audioToText",
    ],
    note: "smmBot.note",
  },
  {
    Icon: SmartphoneNfc,
    title: "nfcReviews.title",
    description: "nfcReviews.description",
    features: [
      "nfcReviews.features.automation",
      "nfcReviews.features.nfcIntegration",
      "nfcReviews.features.aiProcessing",
      "nfcReviews.features.customerExperience",
      "nfcReviews.features.analytics",
      "nfcReviews.features.scalability",
      "nfcReviews.features.efficiency",
      "nfcReviews.features.engagement",
    ],
  },
  {
    Icon: Bitcoin,
    title: "cryptoMarketing.title",
    description: "cryptoMarketing.description",
    features: [
      "cryptoMarketing.features.strategy",
      "cryptoMarketing.features.content",
      "cryptoMarketing.features.community",
      "cryptoMarketing.features.influencers",
      "cryptoMarketing.features.optimization",
      "cryptoMarketing.features.advertising",
      "cryptoMarketing.features.pr",
      "cryptoMarketing.features.analytics",
    ],
  },
];
