import { useLanguage } from "@/contexts/LanguageContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const Introduction = () => {
  const { t, isRTL } = useLanguage();

  const day = [
    { time: "06:30", label: t("כתיבה ממוקדת · פרק הדיון", "Focused writing · Discussion chapter"), tone: "thesis" },
    { time: "08:00", label: t("פיזור לגנים", "Daycare drop-off"), tone: "life" },
    { time: "09:00", label: t("מעבדה ועבודה", "Lab and work"), tone: "life" },
    { time: "18:30", label: t("ארוחת ערב משפחתית", "Family dinner"), tone: "life" },
    { time: "21:00", label: t("פגישת ליווי בזום", "Mentoring session on Zoom"), tone: "session" },
  ];

  return (
    <section className="overflow-hidden bg-background py-24 md:py-36">
      <div className="shell grid items-center gap-16 lg:grid-cols-2" dir={isRTL ? "rtl" : "ltr"}>
        <Reveal className="text-start">
          <h2 className="display-md">
            {t("התזה מקבלת מקום.", "Your thesis gets its place.")}
            <br />
            <span className="text-muted-foreground">{t("וגם כל השאר.", "So does everything else.")}</span>
          </h2>
          <p className="lead mt-6">{t("בתהליך האקדמי הכול מתקיים במקביל - הצעות מחקר, קריאה, ניסויים, ניתוח נתונים וכתיבה. כשכל משימה דורשת זמן ותשומת לב, קל להרגיש עומס ולחץ ולהתקשות לראות מה הצעד הבא. הניסיון שלי לימד אותי כמה חשוב שיהיה עם מי לחשוב בקול, לבחון כיוונים ולפרק את האתגר לצעדים שאפשר לבצע. זה המקום שבו אני מציע ליווי אישי, שמותאם למחקר שלך ולמה שנדרש לך עכשיו.")}</p>
          <div className="mt-8">
            <WhatsAppButton label={t("בול מה שחיפשתי - אפשר לדבר?")} />
          </div>
        </Reveal>

        {/* Illustrative day: research fits inside a full life, not the other way around */}
        <Reveal delay={150} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,hsl(var(--glow-soft))_0%,transparent_70%)]" aria-hidden="true" />
          <figure className="card-surface p-6 md:p-7" aria-label={t("דוגמה ליום של חוקרת עם משפחה", "An example day for a researcher with a family")}>
            <figcaption className="flex items-baseline justify-between">
              <span className="text-xl font-bold tracking-tight">{t("יום שלישי", "Tuesday")}</span>
              <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">{t("דוגמה", "Example")}</span>
            </figcaption>
            <ol className="mt-5 space-y-2">
              {day.map((item) => (
                <li
                  key={item.time}
                  className={cn(
                    "flex items-center gap-4 rounded-2xl px-4 py-3",
                    item.tone === "life" && "bg-secondary/70",
                    item.tone === "thesis" && "bg-glow-soft",
                    item.tone === "session" && "bg-ink text-white",
                  )}
                >
                  <span className={cn("w-12 shrink-0 text-sm font-semibold tabular-nums", item.tone === "session" ? "text-glow" : "text-muted-foreground")}>
                    <bdi>{item.time}</bdi>
                  </span>
                  <span className="font-medium">{item.label}</span>
                </li>
              ))}
            </ol>
          </figure>
          <div className="glass absolute -bottom-6 end-[-0.5rem] flex items-center gap-3 rounded-2xl px-4 py-3 md:end-[-2rem]">
            <svg viewBox="0 0 36 36" className="h-10 w-10 -rotate-90" aria-hidden="true">
              <circle cx="18" cy="18" r="15" fill="none" stroke="hsl(var(--border))" strokeWidth="4" />
              <circle cx="18" cy="18" r="15" fill="none" stroke="hsl(var(--whatsapp))" strokeWidth="4" strokeLinecap="round" strokeDasharray="94.2" strokeDashoffset="28" />
            </svg>
            <span className="text-sm leading-tight">
              <span className="block font-semibold">{t("צעד אחד קדימה", "One step forward")}</span>
              <span className="block text-muted-foreground">{t("כל יום, גם קטן", "Every day, even a small one")}</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Introduction;
