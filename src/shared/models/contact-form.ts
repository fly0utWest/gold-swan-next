import { User, Mailbox, Phone } from "lucide-react";

export const mainInputs = [
  { icon: User, placeholderKey: "name", name: "name" },
  { icon: Mailbox, placeholderKey: "email", name: "email" },
  { icon: Phone, placeholderKey: "phone", name: "phone" },
] as const;

export const services = [
  { label: "digitalMarketing", value: "Digital Marketing" },
  { label: "brandDevelopmentPR", value: "Brand Development and PR" },
  {
    label: "reputationDataProtection",
    value: "Reputation and Data Protection",
  },
  { label: "analyticsStrategy", value: "Analytics and Strategy" },
  { label: "photoVideoShooting", value: "Photo and Video Shooting" },
  { label: "webDevelopment", value: "Web Application Development" },
];

export const industries = [
  { label: "retailEcommerce", value: "Retail & E-commerce" },
  { label: "technologySoftware", value: "Technology & Software" },
  { label: "healthcarePharmaceuticals", value: "Healthcare & Pharmaceuticals" },
  { label: "financeInsurance", value: "Finance & Insurance" },
  { label: "educationTraining", value: "Education & Training" },
  { label: "hospitalityTourism", value: "Hospitality & Tourism" },
  { label: "manufacturingProduction", value: "Manufacturing & Production" },
  { label: "realEstateConstruction", value: "Real Estate & Construction" },
  { label: "artsEntertainmentMedia", value: "Arts, Entertainment & Media" },
  { label: "transportationLogistics", value: "Transportation & Logistics" },
  {
    label: "nonprofitCommunityServices",
    value: "Nonprofit & Community Services",
  },
];

export const previousExperience = [
  { label: "positive", value: "Yes" },
  { label: "negative", value: "No" },
];

export const howDidYouHearOptions = [
  { label: "friends", value: "Advice from friends" },
  { label: "family", value: "Advice from family members" },
  { label: "advertising", value: "Advertising" },
];

export const businessOperationDurationOptions = [
  { label: "lessThanOneYear", value: "Less than a year" },
  { label: "oneYear", value: "One year" },
  { label: "twoYears", value: "Two years" },
  { label: "moreThanThreeYears", value: "More than three years" },
  { label: "moreThanFiveYears", value: "More than five years" },
];


