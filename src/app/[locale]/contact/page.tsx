import Button from "@/shared/ui/button";
import ContactForm from "@/shared/ui/contact-form";

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-8 p-6">
      <h1 className="font-bold text-5xl lg:text-7xl text-center">Contact Us</h1>
      <p className="text-center max-w-lg">
        We are here to help you with any questions you may have. Reach out to us
        and we will respond as soon as possible.
      </p>
      <ContactForm />
    </section>
  );
}
