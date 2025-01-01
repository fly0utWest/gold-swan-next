import Link from "../link";
import { SquareArrowUp } from "solar-icon-set";
import { useTranslations } from "next-intl";
import BrandLogo from "../brand-logo";
import FooterLink from "./footer-link";

export default function Footer() {
  const t = useTranslations("nav");

  return (
    <footer className="flex flex-col gap-16 mt-16 px-8 md:px-16 bg-neutral-100 dark:bg-black pt-4 pb-16">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-8">
        <div className="flex flex-col gap-4 items-center lg:items-start mb-12 md:mb-0">
          <BrandLogo />
          <h3 className="font-display font-bold text-4xl md:text-5xl cursor-help w-full max-w-xs text-center lg:text-left"></h3>
          <p className="text-xl text-foreground w-full max-w-sm text-center lg:text-left">
            <span className="text-primary-500">&#x275D;</span>
            {t("description")}
            <span className="text-primary-500">&#x275E;</span>
          </p>
        </div>
        <div className="flex flex-col gap-8 lg:gap-4 items-center lg:items-start w-full max-w-xs">
          <FooterLink href="/">{t("home")}</FooterLink>
          <FooterLink href="/contact">{t("contact")}</FooterLink>
        </div>
        <div className="flex flex-col gap-8 lg:gap-4 items-center lg:items-start w-full max-w-xs">
          <FooterLink href="/#departments">{t("services")}</FooterLink>
          <FooterLink href="/#upcoming-projects">{t("projects")}</FooterLink>
        </div>
        <Link
          href="#top"
          role="button"
          className="group w-32 h-32 font-bold font-display aspect-square text-4xl overflow-hidden hover:bg-primary-500 flex-col
                        hover:text-primary-50 rounded-full bg-primary-100 text-primary-500 flex justify-center items-center transition-colors
                        active:bg-primary-400 active:text-primary-50 duration-300 ease-in-out min-w-max min-h-max"
        >
          <div className="group-hover:-translate-y-32 transition-transform duration-300 ease-in-out">
            up
          </div>
          <div className="translate-y-32 group-hover:-translate-y-5 transition-transform h-0 duration-300 ease-in-out flex items-center">
            <SquareArrowUp size={60} iconStyle="Bold" />
          </div>
        </Link>
      </div>
    </footer>
  );
}
