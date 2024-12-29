"use client";

import { useTranslations } from "next-intl";
import Input from "./input";
import React from "react";
import {
  User,
  Mailbox,
  Phone,
  Plain,
  CheckSquare,
  CloseSquare,
  Traffic,
  TrafficEconomy,
} from "solar-icon-set";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Checkbox from "./checkbox";
import Textarea from "./textarea";

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

const previousExperience = [
  { label: "positive", value: "Yes" },
  { label: "negative", value: "No" },
];

const howDidYouHearOptions = [
  { label: "friends", value: "Advice from friends" },
  { label: "family", value: "Advice from family members" },
  { label: "dentist", value: "Advice from another dentist" },
  { label: "advertising", value: "Advertising" },
];

const businessOperationDurationOptions = [
  { label: "lessThanOneYear", value: "Less than a year" },
  { label: "oneYear", value: "One year" },
  { label: "twoYears", value: "Two years" },
  { label: "moreThanThreeYears", value: "More than three years" },
  { label: "moreThanFiveYears", value: "More than five years" },
];

const ContactForm = () => {
  const t = useTranslations("contact-form");

  // Refactor schema to be static
  const ContactFormSchema = z
    .object({
      name: z.string().nonempty(t("nameRequired")),
      email: z.string().email(t("invalidEmail")),
      phone: z.string().nonempty(t("phoneRequired")),
      services: z.array(z.string()),
      customService: z.string().optional(),
      industry: z.string().nonempty(t("industryRequired")),
      previousExperience: z.string().nonempty(t("previousExperienceRequired")),
      howDidYouHear: z.string().nonempty(t("howDidYouHearRequired")),
      businessOperationDuration: z
        .string()
        .nonempty(t("businessOperationDurationRequired")),
      aditionalComment: z.string().optional(),
    })
    .refine((data) => data.services.length > 0 || data.customService, {
      message: t("selectServiceOrCustom"),
      path: ["services"],
    });

  type ContactFormType = z.infer<typeof ContactFormSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      services: [],
      industry: "",
      previousExperience: "",
      howDidYouHear: "",
      businessOperationDuration: "",
    },
  });

  const checkedServices = watch("services");
  const selectedIndustry = watch("industry");
  const selectedExperience = watch("previousExperience");
  const selectedHowDidYouHear = watch("howDidYouHear");
  const selectedBusinessOperationDuration = watch("businessOperationDuration");

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
        icon={<User size={32} color={errors.name ? "var(--error)" : ""} />}
        placeholder={t("name")}
        error={errors.name}
        {...register("name")}
      />
      <Input
        icon={<Mailbox size={32} color={errors.email ? "var(--error)" : ""} />}
        placeholder={t("email")}
        error={errors.email}
        {...register("email")}
      />
      <Input
        icon={<Phone size={32} color={errors.phone ? "var(--error)" : ""} />}
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
            onChange={(e) => {
              setValue(
                "services",
                e.target.checked
                  ? [...checkedServices, service.value]
                  : checkedServices.filter((item) => item !== service.value)
              );
              trigger("services");
            }}
          />
        ))}

        <Checkbox
          type="checkbox"
          icon={<CloseSquare size={24} />}
          checkedIcon={<CheckSquare size={24} color="var(--primary-500)" />}
          label={t(`services.custom`)}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setValue("customService", isChecked ? "" : undefined);
            trigger("customService");
          }}
          checked={watch("customService") !== undefined}
        />

        {watch("customService") !== undefined && (
          <Input
            type="text"
            placeholder={t("services.custom")}
            {...register("customService")}
            onChange={() => trigger("services")}
          />
        )}

        {errors.services && (
          <span className="text-red-500">{errors.services.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">{t("industriesInterest")}</h2>

        {industries.map((industry) => (
          <Checkbox
            key={industry.label}
            type="radio"
            icon={<Traffic size={24} />}
            checkedIcon={
              <TrafficEconomy size={24} color="var(--primary-500)" />
            }
            label={t(`industries.${industry.label}`)}
            value={industry.value}
            {...register("industry")}
            checked={selectedIndustry === industry.value}
            onChange={() => {
              setValue("industry", industry.value);
              trigger("industry");
            }}
          />
        ))}

        <Checkbox
          type="radio"
          icon={<Traffic size={24} />}
          checkedIcon={<TrafficEconomy size={24} color="var(--primary-500)" />}
          label={t("industries.custom")}
          checked={!industries.some((ind) => ind.value === selectedIndustry)}
          onClick={() => {
            setValue("industry", "");
            trigger("industry");
          }}
        />

        {!industries.some((ind) => ind.value === selectedIndustry) && (
          <Input
            type="text"
            placeholder={t("industries.custom")}
            value={selectedIndustry}
            onChange={(e) => {
              setValue("industry", e.target.value);
              trigger("industry");
            }}
          />
        )}

        {errors.industry && (
          <span className="text-red-500">{errors.industry.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">{t("experienceInterest")}</h2>

        {previousExperience.map((experience) => (
          <Checkbox
            key={experience.label}
            type="radio"
            icon={<Traffic size={24} />}
            checkedIcon={
              <TrafficEconomy size={24} color="var(--primary-500)" />
            }
            label={t(`previousExperience.${experience.label}`)}
            value={experience.value}
            {...register("industry")}
            checked={selectedExperience === experience.value}
            onChange={() => {
              setValue("previousExperience", experience.value);
              trigger("previousExperience");
            }}
          />
        ))}

        <Checkbox
          type="radio"
          icon={<Traffic size={24} />}
          checkedIcon={<TrafficEconomy size={24} color="var(--primary-500)" />}
          label={t("previousExperience.custom")}
          checked={
            !previousExperience.some((exp) => exp.value === selectedExperience)
          }
          onClick={() => {
            setValue("previousExperience", "");
            trigger("previousExperience");
          }}
        />

        {!previousExperience.some(
          (ind) => ind.value === selectedExperience
        ) && (
          <Input
            type="text"
            placeholder={t("previousExperience.custom")}
            value={selectedExperience}
            onChange={(e) => {
              setValue("previousExperience", e.target.value);
              trigger("previousExperience");
            }}
          />
        )}

        {errors.previousExperience && (
          <span className="text-red-500">
            {errors.previousExperience.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">{t("howDidYouHearInterest")}</h2>
        {howDidYouHearOptions.map((option) => (
          <Checkbox
            key={option.label}
            type="radio"
            icon={<Traffic size={24} />}
            checkedIcon={
              <TrafficEconomy size={24} color="var(--primary-500)" />
            }
            label={t(`howDidYouHear.${option.label}`)}
            value={option.value}
            {...register("howDidYouHear")}
            checked={selectedHowDidYouHear === option.value}
            onChange={() => {
              setValue("howDidYouHear", option.value);
              trigger("howDidYouHear");
            }}
          />
        ))}

        <Checkbox
          type="radio"
          icon={<Traffic size={24} />}
          checkedIcon={<TrafficEconomy size={24} color="var(--primary-500)" />}
          label={t("howDidYouHear.custom")}
          checked={
            !howDidYouHearOptions.some(
              (opt) => opt.value === selectedHowDidYouHear
            )
          }
          onClick={() => {
            setValue("howDidYouHear", "");
            trigger("howDidYouHear");
          }}
        />

        {!howDidYouHearOptions.some(
          (opt) => opt.value === selectedHowDidYouHear
        ) && (
          <Input
            type="text"
            placeholder={t("howDidYouHear.custom")}
            value={selectedHowDidYouHear}
            onChange={(e) => {
              setValue("howDidYouHear", e.target.value);
              trigger("howDidYouHear");
            }}
          />
        )}

        {errors.howDidYouHear && (
          <span className="text-red-500">{errors.howDidYouHear.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">
          {t("businessOperationInterest")}
        </h2>
        {businessOperationDurationOptions.map((option) => (
          <Checkbox
            key={option.label}
            type="radio"
            icon={<Traffic size={24} />}
            checkedIcon={
              <TrafficEconomy size={24} color="var(--primary-500)" />
            }
            label={t(`businessOperationDuration.${option.label}`)}
            value={option.value}
            {...register("businessOperationDuration")}
            checked={selectedBusinessOperationDuration === option.value}
            onChange={() => {
              setValue("businessOperationDuration", option.value);
              trigger("businessOperationDuration");
            }}
          />
        ))}

        <Checkbox
          type="radio"
          icon={<Traffic size={24} />}
          checkedIcon={<TrafficEconomy size={24} color="var(--primary-500)" />}
          label={t("businessOperationDuration.custom")}
          checked={
            !businessOperationDurationOptions.some(
              (opt) => opt.value === selectedBusinessOperationDuration
            )
          }
          onClick={() => {
            setValue("businessOperationDuration", "");
            trigger("businessOperationDuration");
          }}
        />

        {!businessOperationDurationOptions.some(
          (opt) => opt.value === selectedBusinessOperationDuration
        ) && (
          <Input
            type="text"
            placeholder={t("businessOperationDuration.custom")}
            value={selectedBusinessOperationDuration}
            onChange={(e) => {
              setValue("businessOperationDuration", e.target.value);
              trigger("businessOperationDuration");
            }}
          />
        )}

        {errors.businessOperationDuration && (
          <span className="text-red-500">
            {errors.businessOperationDuration.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">
          {t("businessOperationInterest")}
        </h2>
        <Textarea
          placeholder="Aditional comment"
          {...register("aditionalComment")}
        />
      </div>
      {/* Submit Button */}
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
