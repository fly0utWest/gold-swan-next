import { useTranslations } from "next-intl";
import AboutDepartment from "@/widgets/departments/about-department";
import Button from "@/shared/ui/button";
import Link from "@/shared/ui/link";
import Marquee from "@/shared/ui/marquee";
import { Star2 } from "solar-icon-set";
import DepartmentHeroSection from "@/widgets/departments/department-hero-section.";
import ServiceCard from "@/widgets/departments/service-card";
import DepartmentServices from "@/widgets/departments/department-services";
import * as brandServices from "@/shared/models/departments/branding";


export default function BrandDevelopmentPage() {
  const t = useTranslations("departments.brandDevelopmentAndPR");
  const miscT = useTranslations("misc");

  return (
    <>
      <DepartmentHeroSection
        Icon={Star2}
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
      <DepartmentServices title={t("brandBookCreation.title")}>
        {brandServices.brandBookServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>
      <DepartmentServices rounded title={t("brandPositioning.title")}>
        {brandServices.brandPositioningServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>
      <DepartmentServices title={t("uspDevelopment.title")}>
        {brandServices.uspDevelopmentServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>
      <DepartmentServices rounded title={t("creativeAdvertising.title")}>
        {brandServices.creativeAdvertisingServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>
      <DepartmentServices title={t("prAndMediaRelations.title")}>
        {brandServices.prAndMediaRelationsServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>
      <DepartmentServices rounded title={t("influencerMarketing.title")}>
        {brandServices.influencerMarketingServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>
      <DepartmentServices title={t("eventOrganization.title")}>
        {brandServices.eventOrganizationServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>
      <DepartmentServices rounded title={t("crisisPrManagement.title")}>
        {brandServices.crisisPrManagementServices.map((service, index) => (
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
