import { useTranslations } from "next-intl";
import { Programming } from "solar-icon-set";
import ServiceCard from "@/widgets/departments/service-card";
import Link from "@/shared/ui/link";
import Button from "@/shared/ui/button";
import Marquee from "@/shared/ui/marquee";
import DepartmentHeroSection from "@/widgets/departments/department-hero-section";
import DepartmentServices from "@/widgets/departments/department-services";
import {
  fullStackServices,
  llmServices,
} from "@/shared/models/departments/features/webdev";
import AboutDepartment from "@/widgets/departments/about-department";

export default function WebsiteAndWebAppDevelopmentPage() {
  const t = useTranslations("departments.webdev");
  const miscT = useTranslations("misc");

  return (
    <>
      <DepartmentHeroSection
        Icon={Programming}
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
      <DepartmentServices title={t("fullStackDev.title")}>
        {fullStackServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>
      <DepartmentServices rounded title={t("LLMIntegrations.title")}>
        {llmServices.map((service, index) => (
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
