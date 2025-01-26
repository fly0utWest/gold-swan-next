import SectionDelimeter from "@/shared/ui/section-delimeter";
import AboutSection from "@/widgets/home-page/about-section/about-section";
import AwardsSetion from "@/widgets/home-page/awards-section";
import DepartmentSection from "@/widgets/home-page/departments-section/departments-section";
import HeroSection from "@/widgets/home-page/hero-section";
import MarqeeSection from "@/widgets/home-page/marquee-section";
import PartnersSection from "@/widgets/home-page/partners-section";
import ProjectsSection from "@/widgets/home-page/projects-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AwardsSetion />
      <DepartmentSection />
      <PartnersSection outerMargin={16} />
      <AboutSection />
      <MarqeeSection />
      <ProjectsSection />
    </>
  );
}
