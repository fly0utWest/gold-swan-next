import { useTranslations } from "next-intl";
import AboutDepartment from "@/widgets/departments/about-department";
import Button from "@/shared/ui/button";
import Link from "@/shared/ui/link";
import DepartmentHeroSection from "@/widgets/departments/department-hero-section.";
import { Camera } from "solar-icon-set";
import DepartmentServices from "@/widgets/departments/department-services";
import ServiceCard from "@/widgets/departments/service-card";
import Marquee from "@/shared/ui/marquee";
import {
  photographyServices,
  videoProductionServices,
  designAndPrintingServices,
  postProductionServices,
  graphicDesignServices,
  musicalAccompanimentServices,
} from "@/shared/models/departments/photoVideo";

export default function PhotoAndVideoShootingPage() {
  const t = useTranslations("departments.photoAndVideoShooting");
  const miscT = useTranslations("misc");

  return (
    <>
      <DepartmentHeroSection
        Icon={Camera}
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
      <DepartmentServices
        title={t("photographyServices.title")}
      >
        {photographyServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>

      <DepartmentServices
        title={t("videoProduction.title")}
      >
        {videoProductionServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>

      <DepartmentServices
        title={t("designAndPostProduction.title")}
      >
        {designAndPrintingServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>

      <DepartmentServices
        title={t("designAndPostProduction.title")}
      >
        {postProductionServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>

      <DepartmentServices
        title={t("graphicDesign.title")}
      >
        {graphicDesignServices.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>

      <DepartmentServices
        rounded
        title={t("musicalAccompaniment.title")}
      >
        {musicalAccompanimentServices.map((service, index) => (
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
