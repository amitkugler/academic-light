import { useLanguage } from "@/contexts/LanguageContext";
import { Check, X } from "lucide-react";

const suitableFor = [
  "סטודנטים וסטודנטיות לתארים מתקדמים",
  "למי שזקוק/ה לליווי באחד או יותר משלבי המחקר והכתיבה האקדמית",
  "למי שמרגיש/ה חוסר סדר, עומס או חוסר בהירות בתהליך",
  "למי שמחפש/ת עוד זוג עיניים מקצועיות וליווי מקצועי ואנושי",
  "למי שזקוק/ה להכוונה בכתיבה אקדמית, כולל באנגלית",
  "למי שמרגיש/ה שהמנחה אינו זמין מספיק או שאינו מספק הכוונה מעשית",
  "למי שמרגיש/ה לבד בתוך העבודה המחקרית ורוצה ליווי תומך",
];

const notSuitableFor = [
  "למי שמחפש/ת שמישהו יכתוב או יערוך את העבודה במקומם",
  "למי שמצפה שמישהו ינהל או יבצע את המחקר עבורו/ה",
  "למי שמחפש/ת פתרון מיידי או קיצורים",
  "למי שזקוק/ה לשירותי תרגום מקצועיים בלבד",
];

const ForWhom = () => {
  const { t, isRTL } = useLanguage();
  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Suitable For */}
          <div className="text-start animate-fade-up" dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent-blue">{t("למי זה מתאים?")}</h2>
            <ul className="space-y-4">
              {suitableFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-whatsapp mt-1 flex-shrink-0" />
                  <span className="text-foreground">{t(item)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Suitable For */}
          <div className="text-start animate-fade-up" style={{ animationDelay: "0.2s" }} dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-destructive">{t("למי זה לא מתאים?")}</h2>
            <ul className="space-y-4">
              {notSuitableFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{t(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
