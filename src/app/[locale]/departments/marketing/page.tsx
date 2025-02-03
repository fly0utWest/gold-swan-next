import { useTranslations } from "next-intl";
import Marquee from "@/shared/ui/marquee";
import AboutDepartment from "@/widgets/departments/about-department";
import DepartmentHeroSection from "@/widgets/departments/department-hero-section";
import SectionDelimeter from "@/shared/ui/section-delimeter";
import Button from "@/shared/ui/button";
import Link from "@/shared/ui/link";
import ServiceCard from "@/widgets/departments/service-card";
import { MoneyBag } from "solar-icon-set";
import DepartmentServices from "@/widgets/departments/department-services";
import {
  seoServices,
  contentMarketingServices,
  smmServices,
  influencerMarketingServices,
  targetedAdvertisingServices,
  ppcServices,
  emailMarketingServices,
  analyticsAndAuditsServices,
} from "@/shared/models/departments/features/digitalMarketing";

export default function MarketingPage() {
  const t = useTranslations("departments.digitalMarketing");
  const miscT = useTranslations("misc");

  return (
    <>
      <DepartmentHeroSection
        Icon={MoneyBag}
        heading={[
          t("title.firstString"),
          t("title.secondString"),
          t("title.thirdString"),
        ]}
      />
      <AboutDepartment
        heading={t("title.full")}
        description={t("description")}
      />

      <DepartmentServices title={t("smm.title")}>
        {smmServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>

      <DepartmentServices title={t("seo.title")}>
        {seoServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>

      <DepartmentServices rounded title={t("contentMarketing.title")}>
        {contentMarketingServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>

      <DepartmentServices rounded title={t("influencerMarketing.title")}>
        {influencerMarketingServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>

      <DepartmentServices title={t("targetedAdvertising.title")}>
        {targetedAdvertisingServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>

      <DepartmentServices rounded title={t("ppc.title")}>
        {ppcServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>

      <DepartmentServices title={t("emailMarketing.title")}>
        {emailMarketingServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>

      <DepartmentServices rounded title={t("analyticsAndAudits.title")}>
        {analyticsAndAuditsServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>

      <SectionDelimeter />
      <Link href="/contact" className="flex justify-center mt-10">
        <Button className="overflow-hidden uppercase w-48 word-spacing-6 px-[0!important]">
          <Marquee repeatCount={2}>{miscT("contactUs")}</Marquee>
        </Button>
      </Link>
    </>
  );
}
