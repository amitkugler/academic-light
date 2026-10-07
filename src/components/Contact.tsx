import { useLanguage } from "@/contexts/LanguageContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";

const Contact = () => {
  const { t, isRTL } = useLanguage();
  return (
    <section id="contact" className="relative isolate scroll-mt-20 overflow-hidden bg-ink py-28 text-white md:py-44">
      {/* Lamp-light glow: the "lighting the process" motif */}
      <div
        className="absolute left-1/2 top-0 -z-10 h-[38rem] w-[60rem] max-w-[160vw] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,hsl(var(--glow)/0.35),transparent)]"
        aria-hidden="true"
      />
      <Reveal className="shell flex flex-col items-center text-center" dir={isRTL ? "rtl" : "ltr"}>
        <h2 className="display-lg max-w-4xl">{t("מה היית רוצה לקדם במחקר שלך?")}</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">{t("אפשר לפנות ב־WhatsApp, לספר בקצרה מה מעסיק אותך ולבדוק יחד אם הליווי מתאים לך.")}</p>
        <WhatsAppButton className="mt-10" />
        <p className="mt-6 text-sm text-white/50">{t("פגישות בזום · שעה אחת · בשעות שנוחות לך", "Zoom sessions · one hour · at times that suit you")}</p>
      </Reveal>
    </section>
  );
};
export default Contact;
