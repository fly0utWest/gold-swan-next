"use client";

import React, { useEffect, useState } from "react";
import Button from "./button";
import Link from "./link";
import { useTranslations } from "next-intl";

const CookiesAgreement = () => {
  const [portalElement, setPortalElement] = useState<null | HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const t = useTranslations("misc");

  useEffect(() => {
    setPortalElement(document.getElementById("portal-container"));

    if (localStorage.getItem("isCookiesAllowed") !== "true") {
      setIsVisible(true);
      setTimeout(() => {
        setIsMounted(true);
      }, 10);
    }
  }, []);

  const handleAccept = () => {
    setIsMounted(false);
    setTimeout(() => {
      localStorage.setItem("isCookiesAllowed", "true");
      setIsVisible(false);
    }, 300);
  };

  if (!portalElement || !isVisible) {
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
