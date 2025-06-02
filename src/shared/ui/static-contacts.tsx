import React from "react";
import {
  PhoneCall,
  Mail,
  Plane,
  PhoneOutgoing,
  SendHorizonal,
} from "lucide-react";
import ContactItem from "./contact-item";
import Heading from "./heading";
import { useTranslations } from "next-intl";

const StaticContacts = () => {
  const t = useTranslations("contact-form.general");

  return (
    <section className="p-5 dark:bg-black bg-neutral-100 rounded-3xl w-full hover:shadow-sm hover:shadow-primary-500 transition-shadow">
      <Heading as="h2" className="text-center text-3xl">
        {t("title")}
      </Heading>
      <Heading as="h3" className="text-center text-2xl text-bold mt-5">
        {t("subTitle")}
      </Heading>
      <div>
        <ContactItem
          Icon={PhoneCall}
          title={t("phone")}
          link="tel:+354 788 8066"
          content="+354 788 8066"
        />
        <ContactItem
          Icon={PhoneOutgoing}
          title="Whatsapp"
          link="https://wa.me/3547888066"
          content="+354 788 8066"
        />
      </div>
      <hr className="w-full border-t border-foreground my-2" />
      <Heading as="h3" className="text-center text-2xl text-bold mt-5">
        Telegram
      </Heading>
      <div>
        <ContactItem
          Icon={SendHorizonal}
          title={t("people.devLead")}
          link="https://t.me/growplex"
          content="@growplex"
        />
        <ContactItem
          Icon={SendHorizonal}
          title={t("people.clientRelations")}
          link="https://t.me/gold_swanis"
          content="@gold_swanis"
        />
      </div>
      <hr className="w-full border-t border-foreground my-2" />
      <ContactItem
        title="Email"
        Icon={Mail}
        link="mailto:goldswaniceland@gmail.com"
        content="goldswaniceland@gmail.com"
      />
    </section>
  );
};

export default StaticContacts;
