import { useLanguage } from "@/contexts/LanguageContext";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="px-4 md:px-8 pt-8 md:pt-10 pb-16 md:pb-24 scroll-mt-20 bg-background">
      <div className="container-narrow mx-auto text-start">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("מה היית רוצה לקדם במחקר שלך?")}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("אפשר לפנות ב־WhatsApp, לספר בקצרה מה מעסיק אותך ולבדוק יחד אם הליווי מתאים לך.")}</p>
        <WhatsAppButton />
      </div>
    </section>
  );
};
export default Contact;
