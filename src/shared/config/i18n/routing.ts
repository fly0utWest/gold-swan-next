import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "is"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
