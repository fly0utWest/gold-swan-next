"use client";

import { useTranslations } from "next-intl";
import Input from "./input";
import React, { useState } from "react";
import { User, Mailbox, Phone, Plain } from "solar-icon-set";
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
  })
  .refine((data) => data.services.length > 0 || data.customService, {
    message: "Please select at least one service or specify a custom service",
    path: ["services"], // Shows error on services field
  });

type ContactFormType = z.infer<typeof ContactFormSchema>;

const services = [
  { value: "digitalMarketing", label: "Digital Marketing" },
  { value: "brandDevelopmentPR", label: "Brand Development and PR" },
  {
    value: "reputationDataProtection",
    label: "Reputation and Data Protection",
  },
  { value: "analyticsStrategy", label: "Analytics and Strategy" },
  { value: "photoVideoShooting", label: "Photo and Video Shooting" },
  { value: "webDevelopment", label: "Web Application Development" },
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
    }
  });

  const isServicesChecked = watch("services");

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
            key={service.value}
            label={t(`services.${service.value}`)}
            {...register("services")}
            value={service.label}
          />
        ))}
        <Checkbox
          label={t(`services.custom`)}
          onChange={(e) => setShowCustomInput(e.target.checked)}
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
