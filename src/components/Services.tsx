import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Database, Edit3, BookOpen, Presentation, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "כתיבת הצעת מחקר ותכנון פרויקט",
    description: "גיבוש שאלת מחקר, ניסוח פערים, מטרות, שיטות ותוכנית עבודה להצעות מחקר ומימון לאומיות ובינלאומיות, כולל תוכניות EU."
  },
  {
    icon: BookOpen,
    title: "פיתוח מיומנויות לקריאה מדעית יעילה",
    description: "זיהוי המסר המרכזי, ניתוח ביקורתי, בחירת מקורות רלוונטיים ושילוב התובנות במחקר."
  },
  {
    icon: Database,
    title: "תכנון ניסויים, ניתוח נתונים והסקת מסקנות",
    description: "תכנון ניסויים ממוקדים, הבנת הנתונים וגיבוש מסקנות מבוססות."
  },
  {
    icon: Edit3,
    title: "כתיבה מדעית - מאמרים, עבודות ותזה",
    description: "ליווי בארגון הטקסט ובהחלטה מה להדגיש ומה לצמצם, לחידוד הטיעון ולהצגת המחקר בבהירות."
  },
  {
    icon: Presentation,
    title: "הכנה להצגה בכנסים ולהגנה על המחקר",
    description: "עיצוב הסיפור המחקרי לקהל היעד, תרגול הצגה בעל־פה והכנה לשאלות בכנסים ובהגנות."
  },
  {
    icon: Heart,
    title: "תמיכה רגשית וניהול עומסים",
    description: "ליווי רגשי בהתמודדות עם לחץ, חוסר ודאות ותחושת בדידות, לחיזוק המסוגלות והשליטה בתהליך."
  }
];

const Services = () => {
  const { t, isRTL } = useLanguage();
  return (
    <section className="px-4 md:px-8 pt-16 md:pt-24 pb-8 md:pb-10 bg-section-alt">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-start mb-12" dir={isRTL ? "rtl" : "ltr"}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("בכל שלב בתהליך האקדמי")}<br />
            <span className="text-accent-blue">{t("– אני פה להאיר!")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">{t("איך כותבים הצעת מחקר, מאמר או תזה? איך מתכננים ניסויים נכון? איך קוראים מאמרים אקדמיים בצורה יעילה? ואיך מתמודדים עם עומס, לחץ והררי נתונים - בלי ללכת לאיבוד?")}</p>
          <p className="text-lg font-medium text-foreground mt-4">{t("אני כאן כדי ללוות חוקרים וחוקרות בשלבי המחקר, הכתיבה והגשת הצעות למימון - כדי שתוכלו לעבוד בצורה רגועה, יעילה וברורה יותר.")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={t(service.title)}
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300 animate-fade-up h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-start flex flex-col h-full" dir={isRTL ? "rtl" : "ltr"}>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-6 h-6 text-accent-blue" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold min-w-0 pt-2.5">{t(service.title)}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {t(service.description)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
