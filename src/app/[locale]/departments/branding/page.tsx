import { useTranslations } from "next-intl";
import AboutDepartment from "@/widgets/departments/about-department";
import DepartmentOverview from "@/widgets/departments/department-overview";
import DepartmentTools from "@/widgets/departments/department-tools";
import { AlignLeft } from "solar-icon-set";
import StrategySteps from "@/widgets/departments/strategy-steps";
import SectionDelimeter from "@/shared/ui/section-delimeter";
import Button from "@/shared/ui/button";
import Link from "@/shared/ui/link";
import { StarRainbow } from "solar-icon-set";

export default function BrandDevelopmentPage() {
  const t = useTranslations("departments.brandDevelopment");

  const benefits = [
    "strongBrandIdentity",
    "enhancedPublicImage",
    "longTermSuccess",
  ];

  const tools = [
    "brandBook",
    "brandPositioning",
    "uspDevelopment",
    "creativeAdvertising",
    "prAndMediaRelations",
    "influencerMarketing",
    "eventOrganization",
    "crisisPRManagement",
  ];

  const strategies = [
    {
      key: "contentStrategy",
      steps: [
        "research",
        "design",
        "documentation",
        "audienceResearch",
        "valueMapping",
        "strategyImplementation",
      ],
    },
    {
      key: "positioning",
      steps: ["defineUVP", "keyMessaging", "competitorAnalysis"],
    },
    {
      key: "usp",
      steps: ["featureAnalysis", "targetedMessaging", "proofPoints"],
    },
    {
      key: "advertisingCampaigns",
      steps: [
        "ideaGeneration",
        "contentProduction",
        "crossPlatformDistribution",
        "performanceAnalysis",
      ],
    },
    {
      key: "prRelations",
      steps: ["messageCrafting", "distribution", "followUp"],
    },
    {
      key: "influencerCampaigns",
      steps: ["research", "collaboration", "analysis"],
    },
    {
      key: "eventPlanning",
      steps: ["conceptCreation", "execution", "followUp"],
    },
    {
      key: "crisisManagement",
      steps: ["situationAnalysis", "responseStrategy", "monitoring"],
    },
  ];

  return (
    <>
      <AboutDepartment heading={t("title")} description={t("description")} />
      <SectionDelimeter />
      <DepartmentOverview
        heading={t("overview.title")}
        definition={t("overview.definition")}
        benefits={benefits.map((benefit) => t(`overview.benefits.${benefit}`))}
      />
      <SectionDelimeter />
      <DepartmentTools
        heading={t("tools.title")}
        tools={tools.map((tool) => ({
          Icon: AlignLeft,
          heading: {
            headingLevel: "h3",
            headingText: t(`tools.${tool}.title`),
          },
          description: t(`tools.${tool}.description`),
        }))}
      />
      <SectionDelimeter />
      {strategies.map((strategy, index) => (
        <div key={strategy.key}>
          <StrategySteps
            Icon={StarRainbow}
            heading={t(`strategies.${strategy.key}.title`)}
            steps={strategy.steps.map((step) =>
              t(`strategies.${strategy.key}.steps.${step}`)
            )}
            example={t(`strategies.${strategy.key}.example`)}
          />
          <SectionDelimeter />
        </div>
      ))}
      <Link href="/contact" className="block w-fit mx-auto mt-16">
        <Button className="w-48 px-[0!important]">CONTACT US</Button>
      </Link>
    </>
  );
}
