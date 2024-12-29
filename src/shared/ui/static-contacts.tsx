import React from "react";
import {
  PhoneCallingRounded,
  CallMedicine,
  LetterOpened,
  Plain,
} from "solar-icon-set";
import ContactItem from "./contact-item";
import Heading from "./heading";

const StaticContacts = () => {
  return (
    <section className="p-5 dark:bg-black bg-neutral-100 rounded-3xl w-full hover:shadow-sm hover:shadow-primary-500 transition-shadow">
      <Heading as="h2" className="text-center text-3xl">
        Contacts
      </Heading>
      <Heading as="h3" className="text-center text-2xl text-bold mt-5">
        General
      </Heading>
      <div>
        <ContactItem
          icon={<PhoneCallingRounded size={32} color="var(--primary-500)" />}
          title="Phone"
          link="tel:+354 788 8066"
          content="+354 788 8066"
        />
        <ContactItem
          icon={<CallMedicine size={32} color="var(--primary-500)" />}
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
          icon={<Plain size={32} color="var(--primary-500)" />}
          title="Manager of the Development Department and Head of Upcoming Products"
          link="https://t.me/dark_aura"
          content="@dark_aura"
        />
        <ContactItem
          icon={<Plain size={32} color="var(--primary-500)" />}
          title="Client Relations Manager"
          link="https://t.me/gold_swanis"
          content="@gold_swanis"
        />
      </div>
      <hr className="w-full border-t border-foreground my-2" />
      <ContactItem
        title="Email"
        icon={<LetterOpened size={32} />}
        link="mailto:goldswaniceland@gmail.com"
        content="goldswaniceland@gmail.com"
      />
    </section>
  );
};

export default StaticContacts;
