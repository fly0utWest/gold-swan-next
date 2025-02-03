import { useTranslations } from "next-intl";
import AboutDepartment from "@/widgets/departments/about-department";
import DepartmentServices from "@/widgets/departments/department-services";
import Button from "@/shared/ui/button";
import Link from "@/shared/ui/link";
import DepartmentHeroSection from "@/widgets/departments/department-hero-section";
import ServiceCard from "@/widgets/departments/service-card";
import Marquee from "@/shared/ui/marquee";
import { PieChart3 } from "solar-icon-set";
import {
  businessAnalyticsServices,
  marketResearchServices,
  strategicPlanningServices,
  predictiveAnalyticsServices,
  competitiveAnalysisServices,
  kpiMonitoringServices,
  dataVisualizationServices,
} from "@/shared/models/departments/features/analyticsAndStrategy";

export default function AnalyticsAndStrategyPage() {
  const t = useTranslations("departments.analyticsAndStrategy");
  const miscT = useTranslations("misc");

  return (
    <>
      <DepartmentHeroSection
        Icon={PieChart3}
        heading={[
          t("title.firstString"),
          t("title.secondString"),
          t("title.thirdString"),
        ]}
      />
      <AboutDepartment
        verticalMargin={16}
        heading={t("title.full")}
        description={t("description")}
      />
      <DepartmentServices title={t("businessAnalytics.title")}>
        {businessAnalyticsServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>
      <DepartmentServices rounded title={t("marketResearch.title")}>
        {marketResearchServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>
      <DepartmentServices title={t("strategicPlanning.title")}>
        {strategicPlanningServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>
      <DepartmentServices rounded title={t("predictiveAnalytics.title")}>
        {predictiveAnalyticsServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>
      <DepartmentServices title={t("competitiveAnalysis.title")}>
        {competitiveAnalysisServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>
      <DepartmentServices rounded title={t("kpiMonitoring.title")}>
        {kpiMonitoringServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>
      <DepartmentServices title={t("dataVisualization.title")}>
        {dataVisualizationServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>
      <Link href="/contact" className="flex justify-center mt-10">
        <Button className="overflow-hidden uppercase w-48 word-spacing-6 px-[0!important]">
          <Marquee repeatCount={2}>{miscT("contactUs")}</Marquee>
        </Button>
      </Link>
    </>
  );
}
