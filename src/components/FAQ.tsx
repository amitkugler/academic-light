import SessionPricing from "@/components/SessionPricing";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "האם זה מחייב?",
    answer: "לא. אפשר להתחיל בפגישה אחת, ולהחליט בהמשך אם מתאים לך להמשיך - בקצב שלך וללא התחייבות.",
  },
  {
    question: "כמה זמן זה לוקח?",
    answer:
      "כל פגישה נמשכת שעה. יש מי שכמה פגישות בודדות מספקות להם, ויש מי שבוחרים תהליך ארוך יותר. הקצב והיקף הליווי מותאמים באופן אישי לצרכים שלך.",
  },
  {
    question: "איך מתקיימות הפגישות?",
    answer: "הפגישות מתקיימות בזום, בשעות שנוחות לך.",
  },
  {
    question: "האם המטרה היא ללמד אותי לעבוד בצורה עצמאית?",
    answer:
      "בהחלט. מטרת הליווי היא לתת כלים, חשיבה שיטתית והבנה של התהליך - כדי שתוכל/י להמשיך ולהתקדם באופן עצמאי.",
  },
  {
    question: "איך אדע אם הליווי מתאים לי?",
    answer:
      "אם את/ה מרגיש/ה תקיעות, חוסר בהירות או תסכול סביב העבודה המחקרית - ויש רצון להתקדם בצורה מסודרת יותר - יש סיכוי גדול שהליווי יתאים.",
  },
  {
    question: "מה ההבדל בין ליווי בכתיבה לבין כתיבה או עריכה במקומי?",
    answer:
      "בליווי אפשר לבחון יחד טיוטה, לקבל משוב על המבנה והטיעון, לזהות מה לא ברור וללמוד איך לשפר את הכתיבה. אני לא כותב את העבודה עבורך ולא מקבל טקסט לעריכה מלאה ולהחזרת גרסה מוכנה. הניסוח, התיקונים וההחלטות נשארים שלך, עם הכוונה מקצועית לאורך הדרך.",
  },
  {
    question: "איך עובד התשלום?",
    answer:
      "פגישת ליווי בת שעה עולה 450 ₪. בין הפגישות ניתן לפנות בשאלות נקודתיות - ללא תשלום נוסף. לרוב, השקעה בליווי בשלב מוקדם חוסכת זמן, מאמץ ועלויות בהמשך.",
  },
];

const FAQ = () => {
  const { t, isRTL } = useLanguage();
  return (
    <section className="px-4 md:px-8 py-8 md:py-10 bg-section-alt" id="content" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container-narrow mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-start animate-fade-up">{t("כמה שאלות שחוזרות כמעט תמיד")}</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-start text-lg font-medium hover:text-accent">
                {t(faq.question)}
              </AccordionTrigger>
              <AccordionContent className="text-start text-muted-foreground text-base leading-relaxed">
                {faq.question === "איך עובד התשלום?" ? <SessionPricing /> : t(faq.answer)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
