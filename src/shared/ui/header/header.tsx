"use client";

import BrandLogo from "@/shared/ui/brand-logo";
import React from "react";
import Link from "../link";
import HeaderLink from "./header-link";
import { useTranslations, useLocale } from "next-intl";
import LocaleSwitcher from "@/shared/ui/locale-switcher";
import HeaderMenu from "./header-menu";
import ThemeSwitcher from "../theme-switcher";

const Header: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("nav");

  const headerLinks = [
    { href: "/#departments", label: t("services") },
    { href: "/#cases", label: t("cases") },
    { href: "/contact", label: t("contact") },
    { href: "/#upcoming-projects", label: t("projects") },
  ];

  return (
    <header className="fixed top-0 text-foreground-0 w-full border-b-2 border-b-neutral-900 backdrop-blur-md z-10">
      <div className="flex max-w-screen-2xl justify-between items-center md:mx-auto px-6 py-2">
        <Link href="/">
          <BrandLogo size={80} />
        </Link>
        <div className="flex items-center gap-6">
          <HeaderMenu>
            {headerLinks.map((link, index) => (
              <HeaderLink key={index} href={link.href}>
                {link.label}
              </HeaderLink>
            ))}
            <LocaleSwitcher currentLocale={locale} />
            <ThemeSwitcher />
          </HeaderMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
