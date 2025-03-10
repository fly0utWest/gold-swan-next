"use client";

import { useState, useEffect } from "react";
import Button from "./button";
import Link from "./link";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie";

const CookiesAgreement = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [cookieState, setCookieState] = useState<
    "accepted" | "rejected" | "not-answered"
  >("not-answered");

  const t = useTranslations("misc");

  useEffect(() => {
    setIsMounted(true);
    const state = Cookies.get("cookie-consent-state");

    if (state === "accepted" || state === "rejected") {
      setCookieState(state);
      updateConsent(state);
    }
  }, []);

  const updateConsent = (state: "accepted" | "rejected") => {
    if (
      typeof window !== "undefined" &&
      typeof (window as any).gtag === "function"
    ) {
      (window as any).gtag("consent", "update", {
        ad_storage: state === "accepted" ? "granted" : "denied",
        analytics_storage: state === "accepted" ? "granted" : "denied",
      });

      if (state === "accepted") {
        (window as any).gtag(
          "config",
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
          {
            anonymize_ip: true,
          }
        );
      }
    }
  };

  const handleAccept = () => {
    Cookies.set("cookie-consent-state", "accepted", { expires: 365 });
    setCookieState("accepted");
    updateConsent("accepted");
  };

  if (cookieState !== "not-answered") {
    return null;
  }

  return (
    <div
      className={`fixed flex flex-col hover:border-primary-500 gap-4 left-4 bottom-4 p-6 border-2 border-border rounded-2xl bg-background-secondary 
      transition duration-300 ${isMounted ? "opacity-100" : "opacity-0"}`}
    >
      <div>
        <p className="text-lg">{t("cookiesUsage")}</p>
        <Link className="underline" href={"/privacy"}>
          {t("privacy")}
        </Link>
      </div>
      <Button
        onClick={handleAccept}
        className="overflow-hidden w-max uppercase text-sm"
      >
        {t("cookiesAgreement")}
      </Button>
    </div>
  );
};

export default CookiesAgreement;
