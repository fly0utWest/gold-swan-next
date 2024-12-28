"use client";

import { useTranslations } from "next-intl";
import Input from "./input";
import React, { useState } from "react";
import {
  User,
  Mailbox,
  Phone,
  Plain,
  CheckSquare,
  CloseSquare,
  Traffic,
} from "solar-icon-set";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Checkbox from "./checkbox";

const ContactFormSchema = z
  .object({
    name: z.string().nonempty(),
    email: z.string().email(),
    phone: z.string().nonempty(),
    services: z.array(z.string()),
    customService: z.string().optional(),
    industry: z.string(),
  })
  .refine((data) => data.services.length > 0 || data.customService, {
    message: "Please select at least one service or specify a custom service",
    path: ["services"], // Shows error on services field
  });

type ContactFormType = z.infer<typeof ContactFormSchema>;

const services = [
  { label: "digitalMarketing", value: "Digital Marketing" },
  { label: "brandDevelopmentPR", value: "Brand Development and PR" },
  {
    label: "reputationDataProtection",
    value: "Reputation and Data Protection",
  },
  { label: "analyticsStrategy", value: "Analytics and Strategy" },
  { label: "photoVideoShooting", value: "Photo and Video Shooting" },
  { label: "webDevelopment", value: "Web Application Development" },
];

const industries = [
  { label: "retailEcommerce", value: "Retail & E-commerce" },
  { label: "technologySoftware", value: "Technology & Software" },
  { label: "healthcarePharmaceuticals", value: "Healthcare & Pharmaceuticals" },
  { label: "financeInsurance", value: "Finance & Insurance" },
  { label: "educationTraining", value: "Education & Training" },
  { label: "hospitalityTourism", value: "Hospitality & Tourism" },
  { label: "manufacturingProduction", value: "Manufacturing & Production" },
  { label: "realEstateConstruction", value: "Real Estate & Construction" },
  { label: "artsEntertainmentMedia", value: "Arts, Entertainment & Media" },
  { label: "transportationLogistics", value: "Transportation & Logistics" },
  {
    label: "nonprofitCommunityServices",
    value: "Nonprofit & Community Services",
  },
];

const ContactForm = () => {
  const t = useTranslations("contact-form");
  const [showCustomInput, setShowCustomInput] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      services: [],
    },
  });

  const checkedServices = watch("services");

  const onSubmit = async (data: ContactFormType) => {
    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 py-6 w-full max-w-lg"
    >
      <Input
        icon={<User size={32} />}
        placeholder={t("name")}
        error={errors.name}
        {...register("name")}
      />
      <Input
        icon={<Mailbox size={32} />}
        placeholder={t("email")}
        error={errors.email}
        {...register("email")}
      />
      <Input
        icon={<Phone size={32} />}
        placeholder={t("phone")}
        error={errors.phone}
        {...register("phone")}
      />

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">{t("servicesInterest")}</h2>

        {services.map((service) => (
          <Checkbox
            type="checkbox"
            icon={<CloseSquare size={24} />}
            checkedIcon={<CheckSquare size={24} color="var(--primary-500)" />}
            key={service.label}
            label={t(`services.${service.label}`)}
            {...register("services")}
            value={service.value}
            checked={checkedServices.includes(service.value)}
          />
        ))}
        <Checkbox
          type="checkbox"
          icon={<CloseSquare size={24} />}
          checkedIcon={<CheckSquare size={24} color="var(--primary-500)" />}
          label={t(`services.custom`)}
          onChange={(e) => setShowCustomInput(e.target.checked)}
          checked={showCustomInput}
        />

        {showCustomInput && (
          <Input
            type="text"
            placeholder={t("services.custom")}
            {...register("customService")}
          />
        )}

        {errors.services && (
          <span className="text-red-500 text-sm">
            {errors.services.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">{t("industryInterest")}</h2>

        {industries.map((industry) => (
          <Checkbox
            key={industry.label}
            type="radio"
            icon={<Traffic size={24} />}
            checkedIcon={<Traffic size={24} color="var(--primary-500)" />}
            label={t(`industries.${industry.label}`)} // Display translated label
            value={industry.value} // Submit value to the server
            {...register("industry")} // Register the "industry" field
          />
        ))}

        {errors.industry && (
          <span className="text-red-500 text-sm">
            {errors.industry.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="flex items-center gap-2 justify-center rounded-3xl bg-primary-500 text-white px-5 py-4 hover:bg-primary-400 transition-colors uppercase"
      >
        {isSubmitting ? (
          <Plain size={24} className="animate-spin" />
        ) : (
          <>
            <Plain size={24} />
            {t("submit")}
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
