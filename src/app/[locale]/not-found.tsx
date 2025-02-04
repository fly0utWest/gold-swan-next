import { useTranslations } from "next-intl";
import Link from "@/shared/ui/link";
import Button from "@/shared/ui/button";

export default function ErrorNotFound() {
  const t = useTranslations("errors.notFound");

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full gap-8 text-center">
        <h1 className="font-display font-bold text-8xl md:text-9xl text-primary-500">
          404
        </h1>
        <p className="text-xl md:text-3xl px-4 max-w-md md:max-w-xl">
          {t("description")}
        </p>
        <Link href="/" className="text-primary-500 font-bold text-3xl">
          <Button>{t("button")}</Button>
        </Link>
      </div>
    </>
  );
}
