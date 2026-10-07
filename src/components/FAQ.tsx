import SessionPricing from "@/components/SessionPricing";
import Reveal from "@/components/Reveal";
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
    <section className="scroll-mt-24 bg-section-alt py-24 md:py-36" id="faq" dir={isRTL ? "rtl" : "ltr"}>
      <div className="shell max-w-4xl">
        <Reveal className="text-start">
          <p className="eyebrow">{t("שאלות נפוצות", "FAQ")}</p>
          <h2 className="display-md mt-3">{t("כמה שאלות שחוזרות כמעט תמיד")}</h2>
        </Reveal>

        <Reveal delay={100} className="card-surface mt-10 px-6 md:px-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/70 last:border-b-0">
                <AccordionTrigger className="py-6 text-start text-lg font-semibold tracking-tight hover:no-underline md:text-xl [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-muted-foreground">
                  {t(faq.question)}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-start text-base leading-relaxed text-muted-foreground md:text-lg">
                  {faq.question === "איך עובד התשלום?" ? <SessionPricing /> : t(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
