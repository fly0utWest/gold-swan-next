import { useTranslations } from "next-intl";
import AboutDepartment from "@/widgets/departments/about-department";
import DepartmentOverview from "@/widgets/departments/department-overview";
import DepartmentTools from "@/widgets/departments/department-tools";
import { AlignLeft } from "solar-icon-set";
import StrategySteps from "@/widgets/departments/strategy-steps";
import SectionDelimeter from "@/shared/ui/section-delimeter";
import Button from "@/shared/ui/button";
import Link from "@/shared/ui/link";
import { ShieldCheck } from "solar-icon-set";

export default function ReputationAndDataProtectionPage() {
  const t = useTranslations("departments.reputationAndDataProtection");

  const benefits = [
    "proactiveReputationManagement",
    "crisisPreparedness",
    "enhancedCustomerTrust",
  ];

  const tools = [
    "brandMonitoring",
    "negativeContentMitigation",
    "crisisManagement",
    "sentimentAnalysis",
    "dataProtection",
  ];

  const strategies = [
    {
      key: "onlineReputationManagement",
      steps: ["audit", "strategyDevelopment", "execution"],
    },
    {
      key: "negativeContentRemoval",
      steps: ["contentIdentification", "removalAssessment", "execution"],
    },
    {
      key: "crisisManagement",
      steps: ["assessTheCrisis", "rapidResponse", "continuousMonitoring"],
    },
    {
      key: "sentimentAnalysis",
      steps: ["dataMining", "categorization", "insightGeneration"],
    },
    {
      key: "continuousMonitoring",
      steps: ["toolSetup", "monitorMetrics", "rapidResponse"],
    },
    {
      key: "dataProtection",
      steps: ["systemAssessment", "implementation", "training"],
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
            Icon={ShieldCheck}
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
