import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/Reveal";

const HowItWorks = () => {
  const { t, isRTL } = useLanguage();

  const steps = [
    {
      title: t("עוצרים רגע", "Pause"),
      body: t("בוחנים יחד מה כבר עשית, איפה נתקעת ומה באמת חשוב לקדם עכשיו.", "We look together at what you've done, where you're stuck and what truly matters right now."),
    },
    {
      title: t("עובדים על מה שחשוב", "Work on what matters"),
      body: t("שעה ממוקדת בזום על המשימה או הקושי שבחרנו, בשעה שנוחה לך - גם אחרי שהילדים נרדמים.", "A focused hour on Zoom on the task or challenge we chose, at a time that suits you - even after the kids are asleep."),
    },
    {
      title: t("יוצאים עם צעדים ברורים", "Leave with clear next steps"),
      body: t("מסכמים כיוון ברור וצעדים מעשיים, כדי שהזמן המוגבל שלך ילך למקום הנכון.", "We agree on a clear direction and practical steps, so your limited time goes where it counts."),
    },
  ];

  return (
    <section id="how" className="scroll-mt-24 bg-background py-24 md:py-36">
      <div className="shell" dir={isRTL ? "rtl" : "ltr"}>
        <Reveal className="max-w-3xl text-start">
          <p className="eyebrow">{t("איך זה עובד", "How it works")}</p>
          <h2 className="display-lg mt-3">{t("שעה אחת. כיוון ברור.", "One hour. A clear direction.")}</h2>
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 120} className="relative text-start">
              <span className="inline-block text-7xl font-bold leading-none tracking-tighter text-gradient-warm md:text-8xl" aria-hidden="true">
                {index + 1}
              </span>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-border via-border to-transparent rtl:bg-gradient-to-l" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-bold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
