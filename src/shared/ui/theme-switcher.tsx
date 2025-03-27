"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useTranslations } from "next-intl";

const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const t = useTranslations("misc");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-row gap-3 justify-center items-center max-w-max">
      {currentTheme === "dark" ? <Moon size={24} /> : <Sun size={24} />}
      <div
        className="rounded-2xl border-2 relative h-8 w-12 p-[0.15rem] cursor-pointer bg-primary-50 border-primary-400 dark:bg-primary-100 dark:border-primary-500"
        onClick={() => {
          const newTheme = currentTheme === "dark" ? "light" : "dark";
          setTheme(newTheme);
        }}
      >
        <div
          className={`w-2/3 h-full rounded-2xl transition-transform border-2 border-primary-500 ${
            currentTheme === "dark"
              ? "translate-x-1/2 bg-primary-400"
              : "translate-x-0 bg-primary-100"
          }`}
        ></div>
      </div>
      <span className="md:hidden font-normal">
        {currentTheme === "dark" ? t("darkTheme") : t("lightTheme")}
      </span>
    </div>
  );
};

export default ThemeSwitcher;
