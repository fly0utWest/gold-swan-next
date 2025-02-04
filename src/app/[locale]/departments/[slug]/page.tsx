import { getTranslations } from "next-intl/server";
import { getDepartmentBySlug } from "@/shared/models/departments/getDepartmentBySlug";
import ServiceCard from "@/widgets/departments/service-card";
import Link from "@/shared/ui/link";
import Button from "@/shared/ui/button";
import Marquee from "@/shared/ui/marquee";
import DepartmentHeroSection from "@/widgets/departments/department-hero-section";
import DepartmentServices from "@/widgets/departments/department-services";
import AboutDepartment from "@/widgets/departments/about-department";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const departmentSlugs = [
  "webdev",
  "digitalMarketing",
  "analyticsAndStrategy",
  "brandDevelopmentAndPR",
  "photoAndVideoShooting",
  "reputationAndDataProtection",
];

export async function generateStaticParams() {
  return departmentSlugs.map((slug) => ({
    slug,
  }));
}

interface DepartmentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  if (!departmentSlugs.includes(slug)) {
    const t = await getTranslations("metadata.error");

    return {
      title: t("title"),
      description: t("description"),
      keywords: t("keywords"),
    };
  }

  const t = await getTranslations(`metadata.departments.${slug}`);

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default async function DepartmentPage({ params }: DepartmentPageProps) {
  const { slug } = await params;

  const department = await getDepartmentBySlug(slug);

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
        <DepartmentServices key={key} title={t((category as any).title)}>
          {(category as any).features.map((service: any, index: any) => (
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
