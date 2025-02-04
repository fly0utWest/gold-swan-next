"use client";

import z from "zod";
import { useTranslations } from "next-intl";
import Input from "./input";
import React from "react";
import {
  Plain,
  CheckSquare,
  CloseSquare,
  Traffic,
  TrafficEconomy,
  CheckCircle,
} from "solar-icon-set";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Checkbox from "./checkbox";
import Textarea from "./textarea";
import Heading from "./heading";
import {
  services,
  industries,
  previousExperience,
  howDidYouHearOptions,
  businessOperationDurationOptions,
  mainInputs,
} from "@/shared/models/contact-form";

const ContactForm = () => {
  const t = useTranslations("contact-form");

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
      additionalComment: z.string().optional(),
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
    formState: { errors, isSubmitting, isSubmitSuccessful },
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
      {mainInputs.map(({ icon: Icon, placeholderKey, name }) => (
        <Input
          key={name}
          Icon={Icon}
          placeholder={t(placeholderKey)}
          error={errors[name]}
          {...register(name)}
        />
      ))}
      <div className="flex flex-col gap-4">
        <Heading as="h3" className="text-lg font-medium">
          {t("servicesInterest")}
        </Heading>
        {services.map((service) => (
          <Checkbox
            type="checkbox"
            Icon={CloseSquare}
            CheckedIcon={CheckSquare}
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
          Icon={CloseSquare}
          CheckedIcon={CheckSquare}
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
          <span className="text-error">{errors.services.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <Heading as="h3" className="text-lg font-medium">
          {t("industriesInterest")}
        </Heading>

        {industries.map((industry) => (
          <Checkbox
            key={industry.label}
            type="radio"
            Icon={Traffic}
            CheckedIcon={TrafficEconomy}
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
          Icon={Traffic}
          CheckedIcon={TrafficEconomy}
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
          <span className="text-error">{errors.industry.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <Heading as="h3" className="text-lg font-medium">
          {t("experienceInterest")}
        </Heading>

        {previousExperience.map((experience) => (
          <Checkbox
            key={experience.label}
            type="radio"
            Icon={Traffic}
            CheckedIcon={TrafficEconomy}
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
          Icon={Traffic}
          CheckedIcon={TrafficEconomy}
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
          <span className="text-error">
            {errors.previousExperience.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <Heading as="h3" className="text-lg font-medium">
          {t("howDidYouHearInterest")}
        </Heading>
        {howDidYouHearOptions.map((option) => (
          <Checkbox
            key={option.label}
            type="radio"
            Icon={Traffic}
            CheckedIcon={TrafficEconomy}
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
          Icon={Traffic}
          CheckedIcon={TrafficEconomy}
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
          <span className="text-error">{errors.howDidYouHear.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <Heading as="h3" className="text-lg font-medium">
          {t("businessOperationInterest")}
        </Heading>
        {businessOperationDurationOptions.map((option) => (
          <Checkbox
            key={option.label}
            type="radio"
            Icon={Traffic}
            CheckedIcon={TrafficEconomy}
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
          Icon={Traffic}
          CheckedIcon={TrafficEconomy}
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
          <span className="text-error">
            {errors.businessOperationDuration.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <Heading as="h3" className="text-lg font-medium">
          {t("additionalCommentsInterest")}
        </Heading>
        <Textarea
          placeholder={t("additionalCommentsPlaceholder")}
          {...register("additionalComment")}
        />
      </div>
      <button
        type="submit"
        className={`flex items-center gap-2 justify-center rounded-3xl text-foreground px-5 py-4 transition-colors uppercase ${
          isSubmitSuccessful
            ? "bg-success hover:bg-success-secondary"
            : "bg-primary-500 hover:bg-primary-400"
        }`}
      >
        {isSubmitting ? (
          <Plain size={24} className="animate-spin" />
        ) : isSubmitSuccessful ? (
          <CheckCircle size={24} />
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
