import AboutSection from "@/widgets/home-page/about-section/about-section";
import DepartmentSection from "@/widgets/home-page/departments-section/departments-section";
import DragSlider from "@/widgets/home-page/drag-slider";
import HeroSection from "@/widgets/home-page/hero-section";
import MarqeeSection from "@/widgets/home-page/marquee-section";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MarqeeSection />
      <DepartmentSection />
    </>
  );
}
