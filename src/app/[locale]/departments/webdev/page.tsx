import { useTranslations } from "next-intl";
import AboutDepartment from "@/widgets/departments/about-department";
import DepartmentOverview from "@/widgets/departments/department-overview";
import DepartmentTools from "@/widgets/departments/department-tools";
import StrategySteps from "@/widgets/departments/strategy-steps";
import SectionDelimeter from "@/shared/ui/section-delimeter";
import Button from "@/shared/ui/button";
import Link from "@/shared/ui/link";

export default function WebsiteAndWebAppDevelopmentPage() {
  const t = useTranslations("departments.webdev");

  const sections = [
    {
      key: "websiteDevelopment",
      title: t("sections.websiteDevelopment.title"),
      description: t("sections.websiteDevelopment.description"),
      features: [
        t("sections.websiteDevelopment.features.customWebsiteDesign"),
        t("sections.websiteDevelopment.features.responsiveDesign"),
        t("sections.websiteDevelopment.features.cms"),
      ],
      howItWorks: [
        t("sections.websiteDevelopment.howItWorks.conceptDevelopment"),
        t("sections.websiteDevelopment.howItWorks.designAndBuild"),
        t("sections.websiteDevelopment.howItWorks.launchAndOptimization"),
      ],
      example: t("sections.websiteDevelopment.example"),
    },
    {
      key: "eCommerceSolutions",
      title: t("sections.eCommerceSolutions.title"),
      description: t("sections.eCommerceSolutions.description"),
      features: [
        t("sections.eCommerceSolutions.features.onlineStoreDevelopment"),
        t("sections.eCommerceSolutions.features.integrationServices"),
        t("sections.eCommerceSolutions.features.performanceOptimization"),
      ],
      howItWorks: [
        t("sections.eCommerceSolutions.howItWorks.platformSelection"),
        t("sections.eCommerceSolutions.howItWorks.designAndIntegration"),
        t("sections.eCommerceSolutions.howItWorks.maintenanceAndUpgrades"),
      ],
      example: t("sections.eCommerceSolutions.example"),
    },
    {
      key: "webApplicationDevelopment",
      title: t("sections.webApplicationDevelopment.title"),
      description: t("sections.webApplicationDevelopment.description"),
      features: [
        t("sections.webApplicationDevelopment.features.customApplications"),
        t("sections.webApplicationDevelopment.features.apiIntegration"),
        t("sections.webApplicationDevelopment.features.scalableSolutions"),
      ],
      howItWorks: [
        t("sections.webApplicationDevelopment.howItWorks.needsAnalysis"),
        t("sections.webApplicationDevelopment.howItWorks.development"),
        t("sections.webApplicationDevelopment.howItWorks.deployment"),
      ],
      example: t("sections.webApplicationDevelopment.example"),
    },
    {
      key: "mobileWebDevelopment",
      title: t("sections.mobileWebDevelopment.title"),
      description: t("sections.mobileWebDevelopment.description"),
      features: [
        t("sections.mobileWebDevelopment.features.mobileOptimization"),
        t("sections.mobileWebDevelopment.features.adaptiveInterfaces"),
        t("sections.mobileWebDevelopment.features.seoBestPractices"),
      ],
      howItWorks: [
        t("sections.mobileWebDevelopment.howItWorks.mobileFirstStrategy"),
        t("sections.mobileWebDevelopment.howItWorks.crossDeviceTesting"),
        t("sections.mobileWebDevelopment.howItWorks.feedbackIntegration"),
      ],
      example: t("sections.mobileWebDevelopment.example"),
    },
    {
      key: "uxUiDesign",
      title: t("sections.uxUiDesign.title"),
      description: t("sections.uxUiDesign.description"),
      features: [
        t("sections.uxUiDesign.features.prototyping"),
        t("sections.uxUiDesign.features.userCenteredDesign"),
        t("sections.uxUiDesign.features.aestheticEnhancements"),
      ],
      howItWorks: [
        t("sections.uxUiDesign.howItWorks.research"),
        t("sections.uxUiDesign.howItWorks.designProcess"),
        t("sections.uxUiDesign.howItWorks.usabilityTesting"),
      ],
      example: t("sections.uxUiDesign.example"),
    },
    {
      key: "pwa",
      title: t("sections.pwa.title"),
      description: t("sections.pwa.description"),
      features: [
        t("sections.pwa.features.offlineFunctionality"),
        t("sections.pwa.features.appLikeExperience"),
        t("sections.pwa.features.crossBrowserCompatibility"),
      ],
      howItWorks: [
        t("sections.pwa.howItWorks.pwaDesign"),
        t("sections.pwa.howItWorks.development"),
        t("sections.pwa.howItWorks.launchAndMaintenance"),
      ],
      example: t("sections.pwa.example"),
    },
  ];

  return (
    <>
      <AboutDepartment heading={t("title")} description={t("description")} />
      <SectionDelimeter />
      {sections.map((section) => (
        <div key={section.key}>
          <DepartmentOverview
            heading={section.title}
            definition={section.description}
            benefits={section.features}
          />
          <SectionDelimeter />
          <DepartmentTools
            heading={section.title}
            tools={section.howItWorks.map((tool) => ({
              heading: { headingLevel: "h3", headingText: tool },
              description: tool,
            }))}
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
