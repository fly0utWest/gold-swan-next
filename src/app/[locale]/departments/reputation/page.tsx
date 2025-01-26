import { useTranslations } from "next-intl";
import AboutDepartment from "@/widgets/departments/about-department";
import { Safe2 } from "solar-icon-set";
 "@/shared/ui/button";
import Link from "@/shared/ui/link";
import DepartmentHeroSection from "@/widgets/departments/department-hero-section.";
import DepartmentServices from "@/widgets/departments/department-services";
import { reputationLifecycle } from "@/shared/models/departments/reputation";
import ServiceCard from "@/widgets/departments/service-card";

export default function ReputationAndDataProtectionPage() {
  const t = useTranslations("departments.reputationAndDataProtection");
  return (
    <>
      <DepartmentHeroSection
        Icon={Safe2}
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
      <DepartmentServices title={t("reputationLifecycle.title")}>
        {reputationLifecycle.map((service, index) => (
          <ServiceCard
            key={index}
            Icon={service.Icon}
            title={t(service.title)}
            description={t(service.description)}
          />
        ))}
      </DepartmentServices>
      <Link href="/contact" className="block w-fit mx-auto mt-16">
        <Button className="w-48 px-[0!important]">CONTACT US</Button>
      </Link>
    </>
  );
}
