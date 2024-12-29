import ContactForm from "@/shared/ui/contact-form";
import StaticContacts from "@/shared/ui/static-contacts";
import Heading from "@/shared/ui/heading";

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-8 p-6 max-w-screen-xl lg:mx-auto">
      <Heading className="font-bold text-5xl lg:text-7xl text-center">Contact Us</Heading>
      <p className="text-center max-w-lg">
        We are here to help you with any questions you may have. Reach out to us
        and we will respond as soon as possible.
      </p>
      <div className="flex flex-col items-center lg:flex-row w-full lg:items-start lg:justify-center gap-6">
        <ContactForm />
        <StaticContacts />
      </div>
    </section>
  );
}
