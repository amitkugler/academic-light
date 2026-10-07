import { useLanguage } from "@/contexts/LanguageContext";
import WhatsAppButton from "@/components/WhatsAppButton";

const Introduction = () => {
  const { t, isRTL } = useLanguage();
  return (
    <section className="px-4 md:px-8 pt-8 md:pt-16 lg:pt-24 pb-16 md:pb-24 bg-background">
      <div className="container-narrow mx-auto text-start" dir={isRTL ? "rtl" : "ltr"}>
        <div className="space-y-8">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{t("אפשר להתקדם אחרת")}<br />
              <span className="text-accent-blue">{t("עם יותר בהירות, סדר וביטחון")}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("בתהליך האקדמי הכול מתקיים במקביל - הצעות מחקר, קריאה, ניסויים, ניתוח נתונים וכתיבה. כשכל משימה דורשת זמן ותשומת לב, קל להרגיש עומס ולחץ ולהתקשות לראות מה הצעד הבא. הניסיון שלי לימד אותי כמה חשוב שיהיה עם מי לחשוב בקול, לבחון כיוונים ולפרק את האתגר לצעדים שאפשר לבצע. זה המקום שבו אני מציע ליווי אישי, שמותאם למחקר שלך ולמה שנדרש לך עכשיו.")}</p>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <WhatsAppButton label={t("בול מה שחיפשתי - אפשר לדבר?")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
