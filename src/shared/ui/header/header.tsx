"use client";

import BrandLogo from "@/shared/ui/brand-logo";
import React from "react";
import { Link } from "@/shared/config/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import LocaleSwitcher from "@/shared/ui/locale-switcher";

const Header: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("nav");
  return (
    <header className="fixed h-20 top-0 left-0 w-full border-b-2 border-b-neutral-900 backdrop-blur-sm">
      <div className="flex max-w-screen-2xl justify-between items-center md:mx-auto px-6">
        <Link href="/">
          <BrandLogo size={80} />
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex flex-row gap-4">
            <Link href="/services">{t("services")}</Link>
            <Link href="/projects">{t("contact")}</Link>
            <Link href="/contact">{t("contact")}</Link>
          </nav>

          <LocaleSwitcher currentLocale={locale} />
        </div>
      </div>
    </header>
  );
};

export default Header;
