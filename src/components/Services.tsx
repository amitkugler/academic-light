import { FileText, Database, Edit3, BookOpen, Presentation, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "כתיבת הצעת מחקר ותכנון פרויקט",
    description: "ליווי מובנה בבניית הצעת מחקר חזקה ומשכנעת: הגדרת שאלת מחקר, מטרות, מתודולוגיה ותוכנית עבודה ריאלית. כולל תמיכה בכתיבה מדעית ובהצגת הרציונל המחקרי — גם באנגלית, במידת הצורך."
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
  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-right mb-12" dir="rtl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            בכל שלב בתהליך האקדמי
            <br />
            <span className="text-accent-blue">– אני פה להאיר!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            איך כותבים הצעת מחקר, מאמר או תזה? איך מתכננים ניסויים נכון? איך קוראים מאמרים אקדמיים בצורה יעילה? ואיך מתמודדים עם עומס, לחץ והררי נתונים — בלי ללכת לאיבוד?
          </p>
          <p className="text-lg font-medium text-foreground mt-4">
            אני כאן כדי ללוות חוקרים וחוקרות מהצעת המחקר ועד התזה — כדי שתוכלו לעבוד בצורה רגועה, יעילה וברורה יותר.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300 animate-fade-up h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-right flex flex-col h-full" dir="rtl">
                <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mb-4 mr-auto flex-shrink-0">
                  <service.icon className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-3 flex-shrink-0">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
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
