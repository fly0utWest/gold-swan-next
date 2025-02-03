import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { getDepartmentBySlug } from "@/shared/models/departments/getDepartmentBySlug";
import ServiceCard from "@/widgets/departments/service-card";
import Link from "@/shared/ui/link";
import Button from "@/shared/ui/button";
import Marquee from "@/shared/ui/marquee";
import DepartmentHeroSection from "@/widgets/departments/department-hero-section";
import DepartmentServices from "@/widgets/departments/department-services";
import AboutDepartment from "@/widgets/departments/about-department";

export async function generateStaticParams() {
  const departmentSlugs = [
    "webdev",
    "digitalMarketing",
    "analyticsAndStrategy",
    "brandDevelopmentAndPR",
    "photoAndVideoShooting",
    "reputationAndDataProtection",
  ];

  console.log("Generated Static Params:", departmentSlugs);

  return departmentSlugs.map((slug) => ({
    slug,
  }));
}

type Props = {
  params: { slug: string };
};

export default async function DepartmentPage({ params }: Props) {
  const { slug } = await params;

  const department = await getDepartmentBySlug(slug);

console.log(department)

  const t = await getTranslations(`departments.${slug}`);
  const miscT = await getTranslations("misc");

  if (!department) {
    return notFound();
  }

  return (
    <>
      <DepartmentHeroSection
        Icon={department.icon}
        heading={[
          t(department.title.firstString),
          t(department.title.secondString),
          t(department.title.thirdString),
        ]}
      />
      <AboutDepartment
        verticalMargin={16}
        heading={t(department.title.full)}
        description={t(department.description)}
      />

      {Object.entries(department.categories).map(([key, category]) => (
        <DepartmentServices key={key} title={t(category.title)}>
          {category.features.map((service: any, index: any) => (
            <ServiceCard
              key={index}
              Icon={service.Icon}
              title={t(service.title)}
              description={t(service.description)}
            />
          ))}
        </DepartmentServices>
      ))}

      <Link href="/contact" className="flex justify-center mt-10">
        <Button className="overflow-hidden uppercase w-48 word-spacing-6 px-[0!important]">
          <Marquee repeatCount={2}>{miscT("contactUs")}</Marquee>
        </Button>
      </Link>
    </>
  );
}
