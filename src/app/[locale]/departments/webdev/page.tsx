import { useTranslations } from "next-intl";
import WebdevHeroSection from "@/widgets/departments/webdev/webdev-hero-section.";
import { StarRainbow, Cart3, MagicStick3, Database, Crown } from "solar-icon-set";
import WebdevServices from "@/widgets/departments/webdev/webdev-services";
import ServicesCard from "@/widgets/departments/service-card";
import Link from "@/shared/ui/link";
import Button from "@/shared/ui/button";
import Marquee from "@/shared/ui/marquee";

export default function WebsiteAndWebAppDevelopmentPage() {
  const t = useTranslations("departments.webdev");
  const miscT = useTranslations("misc");
  const fullStackServices = [
    {
      Icon: StarRainbow,
      title: t("fullStackDev.features.landing.title"),
      description: t("fullStackDev.features.landing.description"),
    },
    {
      Icon: Cart3,
      title: t("fullStackDev.features.contentDrivenSite.title"),
      description: t("fullStackDev.features.contentDrivenSite.description"),
    },
    {
      Icon: MagicStick3,
      title: t("fullStackDev.features.PWA.title"),
      description: t("fullStackDev.features.PWA.description"),
    },
  ];

  const llmServices = [
    {
      Icon: Database,
      title: t("LLMIntegrations.features.CRMAutomation.title"),
      description: t("LLMIntegrations.features.CRMAutomation.description"),
    },
    {
      Icon: Crown,
      title: t("LLMIntegrations.features.customIntegrations.title"),
      description: t("LLMIntegrations.features.customIntegrations.description"),
    },
  ];

  return (
    <>
      <WebdevHeroSection />
      <WebdevServices title={t("fullStackDev.title")}>
        {fullStackServices.map((service, index) => (
          <ServicesCard
            key={index}
            Icon={service.Icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </WebdevServices>
      <WebdevServices rounded title={t("LLMIntegrations.title")}>
        {llmServices.map((service, index) => (
          <ServicesCard
            key={index}
            Icon={service.Icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </WebdevServices>

      <Link href="/contact" className="flex justify-center mt-10">
        <Button className="overflow-hidden uppercase w-48 word-spacing-6 px-[0!important]">
          <Marquee repeatCount={2}>{miscT("contactUs")}</Marquee>
        </Button>
      </Link>
    </>
  );
}
