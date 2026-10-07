import { useLanguage } from "@/contexts/LanguageContext";
import { Check, X } from "lucide-react";
import Reveal from "@/components/Reveal";

const suitableFor = [
  "חוקרים וחוקרות בתואר שני, בדוקטורט ובפוסט־דוקטורט",
  "למי שזקוק/ה לליווי באחד או יותר משלבי המחקר והכתיבה האקדמית",
  "למי שמרגיש/ה חוסר סדר, עומס או חוסר בהירות בתהליך",
  "למי שמחפש/ת עוד זוג עיניים מקצועיות וליווי מקצועי ואנושי",
  "למי שזקוק/ה להכוונה בכתיבה אקדמית, כולל באנגלית",
  "למי שמרגיש/ה שהמנחה אינו זמין מספיק או שאינו מספק הכוונה מעשית",
  "למי שמרגיש/ה לבד בתוך העבודה המחקרית ורוצה ליווי תומך",
];

const notSuitableFor = [
  "למי שמחפש/ת כתיבה או עריכה של עבודה מוכנה במקומם, ולא הכוונה ומשוב על הכתיבה שלהם",
  "למי שמצפה שמישהו ינהל או יבצע את המחקר עבורו/ה",
  "למי שמחפש/ת פתרון מיידי או קיצורים",
  "למי שזקוק/ה לשירותי תרגום מקצועיים בלבד",
];

const ForWhom = () => {
  const { t, isRTL } = useLanguage();
  return (
    <section className="bg-background py-24 md:py-36">
      <div className="shell grid gap-5 lg:grid-cols-[1.25fr_1fr]" dir={isRTL ? "rtl" : "ltr"}>
        <Reveal className="card-surface p-8 text-start md:p-10">
          <h2 className="display-md">{t("למי זה מתאים?")}</h2>
          <ul className="mt-8 space-y-4">
            {suitableFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-foreground">{t(item)}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="rounded-[1.75rem] border border-border bg-secondary/60 p-8 text-start md:p-10">
          <h2 className="display-md text-muted-foreground">{t("למי זה לא מתאים?")}</h2>
          <ul className="mt-8 space-y-4">
            {notSuitableFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-muted-foreground">
                  <X className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-muted-foreground">{t(item)}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default ForWhom;
