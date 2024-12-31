import { useTranslations } from "next-intl";
import AboutDepartment from "@/widgets/departments/about-department";
import DepartmentOverview from "@/widgets/departments/department-overview";
import DepartmentInnerCard from "@/widgets/departments/department-inner-card";
import DepartmentTools from "@/widgets/departments/department-tools";
import { AlignLeft } from "solar-icon-set";

export default function MarketingPage() {
  const t = useTranslations("departments.marketing");

  const benefits = [
    "preciseAudienceTargeting",
    "realTimeResults",
    "costEfficientCampaigns",
  ];

  const tools = ["smm", "ppc", "seo", "emailMarketing", "contentMarketing"];

  return (
    <>
      <AboutDepartment heading={t("title")} description={t("description")} />
      <hr className="mx-10 md:mx-auto border-2 border-primary-400 my-4 max-w-2xl" />
      <DepartmentOverview
        heading={t("overview.title")}
        definition={t("overview.definition")}
        benefits={benefits.map((benefit) => t(`overview.benefits.${benefit}`))}
      />
      <hr className="mx-10 md:mx-auto border-2 border-primary-400 my-4 max-w-2xl" />
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
      <hr className="mx-10 md:mx-auto border-2 border-primary-400 my-4 max-w-2xl" />
    </>
  );
}
