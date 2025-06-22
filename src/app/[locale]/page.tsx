import AboutSection from "@/widgets/home-page/about-section/about-section";
import AwardsSetion from "@/widgets/home-page/awards-section";
import CasesSection from "@/widgets/home-page/cases-section";
import DepartmentSection from "@/widgets/home-page/departments-section/departments-section";
import HeroSection from "@/widgets/home-page/hero-section";
import MarqeeSection from "@/widgets/home-page/marquee-section";
import PartnersMarquee from "@/widgets/home-page/partners-marquee";
import PartnersSection from "@/widgets/home-page/partners-section";
import ProjectsSection from "@/widgets/home-page/projects-section";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.home");

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DepartmentSection />
      <AwardsSetion />
      <PartnersSection />
      <PartnersMarquee />
      <AboutSection />
      <CasesSection />
      <MarqeeSection />
      <ProjectsSection />
    </>
  );
}
