import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Database, Edit3, BookOpen, Presentation, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "כתיבת הצעת מחקר ותכנון פרויקט",
    description: "ליווי מובנה בבניית הצעת מחקר חזקה ומשכנעת, גם למסגרות מימון לאומיות ובינלאומיות, כגון תוכניות של האיחוד האירופי (EU): הגדרת שאלת מחקר, מטרות, מתודולוגיה ותוכנית עבודה ריאלית. כולל תמיכה בכתיבה מדעית ובהצגת הרציונל המחקרי."
  },
  {
    icon: BookOpen,
    title: "פיתוח מיומנויות לקריאה מדעית יעילה",
    description: "הקניית כלים לקריאה אפקטיבית של מאמרים: זיהוי המסר המרכזי, ניתוח ביקורתי, מיון מקורות רלוונטיים ושילוב התובנות במחקר — תוך חיסכון משמעותי בזמן."
  },
  {
    icon: Database,
    title: "תכנון ניסויים, ניתוח נתונים והסקת מסקנות",
    description: "ליווי בתכנון ניסויים בהתאם לשאלת המחקר, כולל ניתוח תוצאות וגיבוש מסקנות בצורה לוגית וברורה. הדגש הוא על עבודה מדעית מסודרת שמקדמת את הסיפור המחקרי."
  },
  {
    icon: Edit3,
    title: "כתיבה מדעית — מאמרים, עבודות ותזה",
    description: "תמיכה בבניית מבנה בהיר ומאורגן של הטקסט, בקבלת החלטות מה חשוב להדגיש, מה אפשר לצמצם, ואיך לספר את הסיפור המחקרי בצורה ברורה ומשכנעת."
  },
  {
    icon: Presentation,
    title: "הכנה להצגה בכנסים ולהגנה על המחקר",
    description: "סיוע בבניית מצגת ברורה וממוקדת, עיצוב הסיפור המחקרי לקהל היעד, תרגול הצגה בעל־פה והכנה לשאלות מהקהל — עבור כנסים, סמינרים והגנות פורמליות."
  },
  {
    icon: Heart,
    title: "תמיכה רגשית וניהול עומסים",
    description: "מתן ליווי רגשי ותמיכתי להתמודדות עם לחצים, עומס, חוסר ודאות ותחושת בדידות. הדגש הוא על חיזוק תחושת המסוגלות והשליטה בתהליך האקדמי."
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
          <p className="text-lg text-muted-foreground max-w-2xl">{t("איך כותבים הצעת מחקר, מאמר או תזה? איך מתכננים ניסויים נכון? איך קוראים מאמרים אקדמיים בצורה יעילה? ואיך מתמודדים עם עומס, לחץ והררי נתונים — בלי ללכת לאיבוד?")}</p>
          <p className="text-lg font-medium text-foreground mt-4">{t("אני כאן כדי ללוות חוקרים וחוקרות מהצעת המחקר ועד התזה — כדי שתוכלו לעבוד בצורה רגועה, יעילה וברורה יותר.")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={t(service.title)}
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300 animate-fade-up h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-start flex flex-col h-full" dir={isRTL ? "rtl" : "ltr"}>
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mb-4 ms-auto flex-shrink-0">
                  <service.icon className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-3 flex-shrink-0">{t(service.title)}</h3>
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
