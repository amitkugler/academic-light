import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Database, Edit3, BookOpen, Presentation, Heart } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: FileText,
    title: "כתיבת הצעת מחקר ותכנון פרויקט",
    description: "ליווי מובנה בבניית הצעת מחקר חזקה ומשכנעת, גם למסגרות מימון לאומיות ובינלאומיות, כגון תוכניות של האיחוד האירופי (EU): הגדרת שאלת מחקר, מטרות, מתודולוגיה ותוכנית עבודה ריאלית. כולל תמיכה בכתיבה מדעית ובהצגת הרציונל המחקרי."
  },
  {
    icon: BookOpen,
    title: "פיתוח מיומנויות לקריאה מדעית יעילה",
    description: "הקניית כלים לקריאה אפקטיבית של מאמרים: זיהוי המסר המרכזי, ניתוח ביקורתי, מיון מקורות רלוונטיים ושילוב התובנות במחקר - תוך חיסכון משמעותי בזמן."
  },
  {
    icon: Database,
    title: "תכנון ניסויים, ניתוח נתונים והסקת מסקנות",
    description: "ליווי בתכנון ניסויים בהתאם לשאלת המחקר, כולל ניתוח תוצאות וגיבוש מסקנות בצורה לוגית וברורה. הדגש הוא על עבודה מדעית מסודרת שמקדמת את הסיפור המחקרי."
  },
  {
    icon: Edit3,
    title: "כתיבה מדעית - מאמרים, עבודות ותזה",
    description: "תמיכה בבניית מבנה בהיר ומאורגן של הטקסט, בקבלת החלטות מה חשוב להדגיש, מה אפשר לצמצם, ואיך לספר את הסיפור המחקרי בצורה ברורה ומשכנעת."
  },
  {
    icon: Presentation,
    title: "הכנה להצגה בכנסים ולהגנה על המחקר",
    description: "סיוע בבניית מצגת ברורה וממוקדת, עיצוב הסיפור המחקרי לקהל היעד, תרגול הצגה בעל־פה והכנה לשאלות מהקהל - עבור כנסים, סמינרים והגנות פורמליות."
  },
  {
    icon: Heart,
    title: "תמיכה רגשית וניהול עומסים",
    description: "מתן ליווי רגשי ותמיכתי להתמודדות עם לחצים, עומס, חוסר ודאות ותחושת בדידות. הדגש הוא על חיזוק תחושת המסוגלות והשליטה בתהליך האקדמי."
  }
];

// Bento layout: a hero card, four equal tiles, and a full-width closing card for the human side of the work
const layout = [
  "lg:col-span-4 bg-gradient-to-br from-glow-soft via-card to-card",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-6 bg-ink text-white",
];

const Services = () => {
  const { t, isRTL } = useLanguage();
  return (
    <section id="services" className="scroll-mt-24 bg-section-alt py-24 md:py-36">
      <div className="shell" dir={isRTL ? "rtl" : "ltr"}>
        <Reveal className="max-w-3xl text-start">
          <h2 className="display-lg">
            {t("בכל שלב בתהליך האקדמי")}
            <br />
            <span className="text-burgundy">{t("– אני פה להאיר!")}</span>
          </h2>
          <p className="lead mt-6">{t("איך כותבים הצעת מחקר, מאמר או תזה? איך מתכננים ניסויים נכון? איך קוראים מאמרים אקדמיים בצורה יעילה? ואיך מתמודדים עם עומס, לחץ והררי נתונים - בלי ללכת לאיבוד?")}</p>
          <p className="mt-4 text-lg font-medium text-foreground">{t("אני כאן כדי ללוות חוקרים וחוקרות בשלבי המחקר, הכתיבה והגשת הצעות למימון - כדי שתוכלו לעבוד בצורה רגועה, יעילה וברורה יותר.")}</p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6 md:gap-5">
          {services.map((service, index) => {
            const featured = index === 0;
            const dark = index === services.length - 1;
            return (
              <Reveal
                key={service.title}
                delay={(index % 3) * 90}
                className={cn("card-surface lift flex flex-col p-7 text-start md:p-8", featured && "md:col-span-2 md:min-h-[22rem]", dark && "md:col-span-2", layout[index])}
              >
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-2xl",
                    dark ? "bg-white/10 text-glow" : "bg-accent-blue/10 text-accent-blue",
                    featured && "h-14 w-14",
                  )}
                >
                  <service.icon className={featured ? "h-7 w-7" : "h-6 w-6"} aria-hidden="true" />
                </div>
                <h3 className={cn("mt-auto pt-10 font-bold tracking-tight", featured ? "text-2xl md:text-3xl" : "text-xl")}>{t(service.title)}</h3>
                <p className={cn("mt-3 leading-relaxed", dark ? "text-white/70 max-w-3xl" : "text-muted-foreground", featured && "max-w-xl text-lg")}>
                  {t(service.description)}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
