"use client";

import { useTranslations } from "next-intl";
import Input from "./input";
import React from "react";
import { User } from "solar-icon-set";
import { Mailbox } from "solar-icon-set";
import { Phone } from "solar-icon-set";
import { useForm } from "react-hook-form";
import { Plain } from "solar-icon-set";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string().nonempty(),
});

type ContactFormType = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const t = useTranslations("contact-form");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormType>({ resolver: zodResolver(ContactFormSchema) });

  const onSubmit = async (data: ContactFormType) => {
    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
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
