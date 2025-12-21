import ContactForm from "./ContactForm";

export interface SectionProps {
  id: string;
}

export default function ContactSection({ id }: SectionProps) {
  return (
    <section id={id}>
      <ContactForm />
    </section>
  );
}
