"use client";

import { useTranslations } from "next-intl";
import Input from "./input";
import React from "react";
import { User } from "solar-icon-set";
import { Mailbox } from "solar-icon-set";
import { Phone } from "solar-icon-set";
import { QuestionCircle } from "solar-icon-set";

const ContactForm = () => {
  const t = useTranslations("contact-form");

  return (
    <form className="flex flex-col gap-8 py-6 w-full max-w-lg">
      <Input
        icon={<User size={32} />}
        placeholder={t("name")}
        type="text"
        id="email"
      />
      <Input
        icon={<Mailbox size={32} />}
        placeholder={t("email")}
        type="text"
      />
      <Input
        type="tel"
        placeholder={t("phone")}
        icon={<Phone size={32} />}
        id="phone"
      /> 
      <textarea
        placeholder={t("message")}
        className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800"
      />
      <button
        type="submit"
        className="rounded-3xl bg-primary-500 text-white px-5 py-4 hover:bg-primary-400 transition-colors"
      >
        {t("submit")}
      </button>
    </form>
  );
};

export default ContactForm;
