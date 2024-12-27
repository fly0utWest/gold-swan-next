"use client";

import { useTranslations } from "next-intl";
import Input from "./input";
import React from "react";
import { User } from "solar-icon-set";
import { Mailbox } from "solar-icon-set";
import { Phone } from "solar-icon-set";

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
      <input
        type="text"
        placeholder={t("countryCode")}
        className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800"
      />
      <label className="text-neutral-800 dark:text-neutral-300">
        {t("servicesInterest")}
      </label>
      <select className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800">
        <option>{t("services.digitalMarketing")}</option>
        <option>{t("services.brandDevelopmentPR")}</option>
        <option>{t("services.reputationDataProtection")}</option>
        <option>{t("services.analyticsStrategy")}</option>
        <option>{t("services.photoVideoShooting")}</option>
        <option>{t("services.webDevelopment")}</option>
        <option>{t("services.personalizedService")}</option>
      </select>
      <label className="text-neutral-800 dark:text-neutral-300">
        {t("industrySector")}
      </label>
      <select className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800">
        <option>{t("industries.retailEcommerce")}</option>
        <option>{t("industries.technologySoftware")}</option>
        <option>{t("industries.healthcarePharmaceuticals")}</option>
        <option>{t("industries.financeInsurance")}</option>
        <option>{t("industries.educationTraining")}</option>
        <option>{t("industries.hospitalityTourism")}</option>
        <option>{t("industries.manufacturingProduction")}</option>
        <option>{t("industries.realEstateConstruction")}</option>
        <option>{t("industries.artsEntertainmentMedia")}</option>
        <option>{t("industries.transportationLogistics")}</option>
        <option>{t("industries.nonprofitCommunityServices")}</option>
        <option>{t("industries.other")}</option>
      </select>
      <label className="text-neutral-800 dark:text-neutral-300">
        {t("previouslyWorked")}
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center">{t("yes")}</label>
        <label className="flex items-center">
          <input
            type="radio"
            name="previouslyWorked"
            value="no"
            className="mr-2"
          />
          {t("no")}
        </label>
        <input
          type="text"
          placeholder={t("customAnswer")}
          className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800"
        />
      </div>
      <label className="text-neutral-800 dark:text-neutral-300">
        {t("hearAboutUs")}
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center">
          <input
            type="radio"
            name="hearAboutUs"
            value="friends"
            className="mr-2"
          />
          {t("hearOptions.friends")}
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="hearAboutUs"
            value="family"
            className="mr-2"
          />
          {t("hearOptions.family")}
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="hearAboutUs"
            value="dentist"
            className="mr-2"
          />
          {t("hearOptions.dentist")}
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="hearAboutUs"
            value="advertising"
            className="mr-2"
          />
          {t("hearOptions.advertising")}
        </label>
        <input
          type="text"
          placeholder={t("customAnswer")}
          className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800"
        />
      </div>
      <label className="text-neutral-800 dark:text-neutral-300">
        {t("businessOperation")}
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center">
          <input
            type="radio"
            name="businessOperation"
            value="lessThanYear"
            className="mr-2"
          />
          {t("operationOptions.lessThanYear")}
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="businessOperation"
            value="oneYear"
            className="mr-2"
          />
          {t("operationOptions.oneYear")}
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="businessOperation"
            value="twoYears"
            className="mr-2"
          />
          {t("operationOptions.twoYears")}
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="businessOperation"
            value="threeYears"
            className="mr-2"
          />
          {t("operationOptions.threeYears")}
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="businessOperation"
            value="fiveYears"
            className="mr-2"
          />
          {t("operationOptions.fiveYears")}
        </label>
        <input
          type="text"
          placeholder={t("customAnswer")}
          className="rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 px-5 py-4 dark:bg-black bg-white dark:text-neutral-300 text-neutral-800"
        />
      </div>
      <label className="text-neutral-800 dark:text-neutral-300">
        {t("additionalResources")}
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center">
          <input
            type="radio"
            name="additionalResources"
            value="yes"
            className="mr-2"
          />
          {t("yes")}
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="additionalResources"
            value="no"
            className="mr-2"
          />
          {t("no")}
        </label>
      </div>
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
