"use client";

import BrandLogo from "@/shared/ui/brand-logo";
import React from "react";
import Link from "../link";
import HeaderLink from "./header-link";
import { useTranslations, useLocale } from "next-intl";
import LocaleSwitcher from "@/shared/ui/locale-switcher";
import Marquee from "../marquee";
import HeaderMenu from "./header-menu";
import Button from "../button";
import ThemeSwitcher from "../theme-switcher";

const Header: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("nav");
  return (
    <header className="fixed top-0 left-0 w-full border-b-2 border-b-neutral-900 backdrop-blur-md z-10">
      <div className="flex max-w-screen-2xl justify-between items-center md:mx-auto px-6 py-2">
        <Link href="/">
          <BrandLogo size={80} />
        </Link>
        <div className="flex items-center gap-6">
          <HeaderMenu>
            <ThemeSwitcher />
            <LocaleSwitcher currentLocale={locale} />
            <Link href="/#download" className="hidden md:block">
              <Button className="w-14 overflow-hidden md:w-48 word-spacing-6 px-[0!important]">
                <Marquee repeatCount={2}>{t("contact")}</Marquee>
              </Button>
            </Link>
          </HeaderMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
