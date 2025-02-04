import ContactForm from "@/shared/ui/contact-form";
import StaticContacts from "@/shared/ui/static-contacts";
import Heading from "@/shared/ui/heading";
import { useTranslations } from "next-intl";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.contact");

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default function ContactPage() {
  const t = useTranslations("contact-form.general")

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 p-6 max-w-screen-xl lg:mx-auto">
      <Heading className="font-bold text-5xl lg:text-7xl text-center">{t("title")}</Heading>
      <p className="text-center max-w-lg">{t("description")}</p>
      <div className="flex flex-col items-center lg:flex-row w-full lg:items-start lg:justify-center gap-6">
        <ContactForm />
        <StaticContacts />
      </div>
    </div>
  );
}
