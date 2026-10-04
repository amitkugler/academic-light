import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, FileText, Presentation, BookOpen, Layout, FolderKanban, Lightbulb, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StoreItem {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  price: string;
  priceEn: string;
  category: string;
  categoryEn: string;
  icon: React.ReactNode;
  features: string[];
  featuresEn: string[];
  comingSoon?: boolean;
}

const storeItems: StoreItem[] = [
  {
    id: 1,
    title: "תבנית מצגת מחקר",
    titleEn: "Research Presentation Template",
    description: "תבנית PowerPoint מעוצבת מקצועית להצגת מחקר בכנסים ובסמינרים אקדמיים.",
    descriptionEn: "Professionally designed PowerPoint template for presenting research at conferences and academic seminars.",
    price: "₪79",
    priceEn: "$22",
    category: "מצגות",
    categoryEn: "Presentations",
    icon: <Presentation className="w-8 h-8" />,
    features: ["30+ שקופיות", "עיצוב נקי ומקצועי", "גרפים וטבלאות מוכנים", "התאמה לעברית ואנגלית"],
    featuresEn: ["30+ slides", "Clean professional design", "Ready-made charts and tables", "Hebrew and English compatible"],
  },
  {
    id: 2,
    title: "מדריך כתיבת הצעת מחקר",
    titleEn: "Research Proposal Writing Guide",
    description: "מדריך מקיף בפורמט PDF עם דוגמאות, טיפים ותבניות לכתיבת הצעת מחקר מנצחת.",
    descriptionEn: "Comprehensive PDF guide with examples, tips, and templates for writing a winning research proposal.",
    price: "₪149",
    priceEn: "$40",
    category: "מדריכים",
    categoryEn: "Guides",
    icon: <BookOpen className="w-8 h-8" />,
    features: ["50+ עמודים", "דוגמאות מהשטח", "רשימות תיוג", "תבניות מוכנות"],
    featuresEn: ["50+ pages", "Real-world examples", "Checklists", "Ready templates"],
  },
  {
    id: 3,
    title: "מדריך לניהול מחקר",
    titleEn: "Research Management Guide",
    description: "מדריך מקיף לניהול תהליך המחקר מא' ועד ת' — כולל סקירת כלים דיגיטליים, טיפים לארגון זמן ולינקים לתבניות.",
    descriptionEn: "Comprehensive guide for managing the research process from start to finish — including digital tools overview, time management tips, and template links.",
    price: "₪129",
    priceEn: "$35",
    category: "מדריכים",
    categoryEn: "Guides",
    icon: <FolderKanban className="w-8 h-8" />,
    features: ["ניהול זמן ומשימות", "סקירת כלים דיגיטליים", "לינקים לתבניות", "טיפים מניסיון"],
    featuresEn: ["Time & task management", "Digital tools overview", "Links to templates", "Experience-based tips"],
  },
  {
    id: 4,
    title: "תבנית Notion לניהול מחקר",
    titleEn: "Notion Research Management Template",
    description: "סביבת עבודה מוכנה ב-Notion לניהול כל שלבי המחקר: משימות, ספרות, כתיבה ועוד.",
    descriptionEn: "Ready-made Notion workspace for managing all research stages: tasks, literature, writing, and more.",
    price: "₪99",
    priceEn: "$27",
    category: "תבניות",
    categoryEn: "Templates",
    icon: <Layout className="w-8 h-8" />,
    features: ["מעקב משימות", "ניהול ספרות", "יומן מחקר", "לוח זמנים"],
    featuresEn: ["Task tracking", "Literature management", "Research journal", "Timeline"],
  },
  {
    id: 5,
    title: "תבנית Excalidraw למיפוי מחקר",
    titleEn: "Excalidraw Research Mapping Template",
    description: "תבניות ויזואליות למיפוי קונספטואלי, תכנון מחקר ובניית מודלים תיאורטיים.",
    descriptionEn: "Visual templates for conceptual mapping, research planning, and building theoretical models.",
    price: "₪59",
    priceEn: "$16",
    category: "תבניות",
    categoryEn: "Templates",
    icon: <FileText className="w-8 h-8" />,
    features: ["10 תבניות", "מפות קונספט", "תרשימי זרימה", "מודלים תיאורטיים"],
    featuresEn: ["10 templates", "Concept maps", "Flowcharts", "Theoretical models"],
  },
  {
    id: 6,
    title: "מדריך לשימוש ב-Zotero",
    titleEn: "Zotero Usage Guide",
    description: "מדריך מעשי לניהול ספרות מחקרית עם Zotero — כולל טיפים לארגון, תיוג וציטוט אוטומטי.",
    descriptionEn: "Practical guide for managing research literature with Zotero — including tips for organization, tagging, and automatic citations.",
    price: "₪69",
    priceEn: "$19",
    category: "מדריכים",
    categoryEn: "Guides",
    icon: <Wrench className="w-8 h-8" />,
    features: ["הגדרה והתקנה", "ארגון מאמרים", "ציטוט אוטומטי", "טיפים מתקדמים"],
    featuresEn: ["Setup & installation", "Article organization", "Auto-citation", "Advanced tips"],
  },
  {
    id: 7,
    title: "מדריך לכתיבה אקדמית באנגלית",
    titleEn: "Academic Writing in English Guide",
    description: "מדריך ממוקד לכתיבה מדעית באנגלית — ביטויים, מבנים ודוגמאות לכתיבה אפקטיבית.",
    descriptionEn: "Focused guide for scientific writing in English — phrases, structures, and examples for effective writing.",
    price: "₪89",
    priceEn: "$24",
    category: "מדריכים",
    categoryEn: "Guides",
    icon: <Lightbulb className="w-8 h-8" />,
    features: ["ביטויים נפוצים", "מבנה פסקאות", "דוגמאות מתורגמות", "רשימת שגיאות נפוצות"],
    featuresEn: ["Common phrases", "Paragraph structure", "Translated examples", "Common mistakes list"],
  },
  {
    id: 8,
    title: "מדריך להתמודדות עם חסימת כותב",
    titleEn: "Writer's Block Handling Guide",
    description: "מדריך מעשי להתגברות על חסימת כותב — כולל טכניקות, תרגילים ודרכים לחזור לזרימה.",
    descriptionEn: "Practical guide for overcoming writer's block — including techniques, exercises, and ways to get back into flow.",
    price: "₪59",
    priceEn: "$16",
    category: "מדריכים",
    categoryEn: "Guides",
    icon: <Lightbulb className="w-8 h-8" />,
    features: ["טכניקות מעשיות", "תרגילי כתיבה", "רשימות בדיקה", "טיפים להרגלים"],
    featuresEn: ["Practical techniques", "Writing exercises", "Checklists", "Habit tips"],
  },
  {
    id: 9,
    title: "תבנית לתכנון ניסויים",
    titleEn: "Experiment Planning Template",
    description: "תבנית מובנית לתכנון ותיעוד ניסויים מחקריים בצורה מסודרת ושיטתית.",
    descriptionEn: "Structured template for planning and documenting research experiments in an organized and systematic way.",
    price: "₪69",
    priceEn: "$19",
    category: "תבניות",
    categoryEn: "Templates",
    icon: <FileText className="w-8 h-8" />,
    features: ["תכנון שלבי הניסוי", "רשימת בקרות", "תיעוד תוצאות", "ניתוח סטיות"],
    featuresEn: ["Experiment phase planning", "Control checklist", "Results documentation", "Deviation analysis"],
  },
  {
    id: 10,
    title: "מדריך לכתיבת תקציר אפקטיבי",
    titleEn: "Effective Abstract Writing Guide",
    description: "מדריך ממוקד לכתיבת תקצירים למאמרים, כנסים והצעות מחקר — עם דוגמאות ותבניות.",
    descriptionEn: "Focused guide for writing abstracts for papers, conferences, and research proposals — with examples and templates.",
    price: "₪49",
    priceEn: "$14",
    category: "מדריכים",
    categoryEn: "Guides",
    icon: <BookOpen className="w-8 h-8" />,
    features: ["מבנה תקציר מנצח", "דוגמאות לפי תחום", "טעויות נפוצות", "תבניות מוכנות"],
    featuresEn: ["Winning abstract structure", "Field-specific examples", "Common mistakes", "Ready templates"],
  },
  {
    id: 11,
    title: "חבילת הסטודנט המתקדם",
    titleEn: "Advanced Student Bundle",
    description: "חבילה משתלמת הכוללת את כל התבניות והמדריכים במחיר מיוחד.",
    descriptionEn: "Value bundle including all templates and guides at a special price.",
    price: "₪399",
    priceEn: "$110",
    category: "חבילות",
    categoryEn: "Bundles",
    icon: <FileText className="w-8 h-8" />,
    features: ["כל המוצרים", "עדכונים חינם", "תמיכה אישית", "בונוסים נוספים"],
    featuresEn: ["All products", "Free updates", "Personal support", "Extra bonuses"],
    comingSoon: true,
  },
];

const Store = () => {
  const { t, isRTL, language } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-section-alt">
          <div className="container-narrow mx-auto text-start" dir={isRTL ? "rtl" : "ltr"}>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t("חנות")}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{t("כלים, תבניות ומדריכים שיעזרו להתקדם במסע האקדמי. כל המוצרים נבנו מתוך ניסיון אישי של שנים באקדמיה.")}</p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {storeItems.map((item, index) => (
                <Card
                  key={item.id}
                  className="flex flex-col animate-fade-up relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.comingSoon && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="secondary">{t("בקרוב")}</Badge>
                    </div>
                  )}
                  <CardHeader className="text-start" dir={isRTL ? "rtl" : "ltr"}>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline">{t(item.category, item.categoryEn)}</Badge>
                      <div className="text-accent-blue">{item.icon}</div>
                    </div>
                    <CardTitle className="text-xl">{t(item.title, item.titleEn)}</CardTitle>
                    <CardDescription>{t(item.description, item.descriptionEn)}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 text-start" dir={isRTL ? "rtl" : "ltr"}>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {(language === "he" ? item.features : item.featuresEn).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 justify-start">
                          <span>{feature}</span>
                          <span className="text-accent-blue">✓</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t pt-4">
                    <Button
                      disabled={item.comingSoon}
                      className="gap-2"
                    >
                      {item.comingSoon ? t("בקרוב") : t("לרכישה")}
                      {!item.comingSoon && <ExternalLink className="w-4 h-4" />}
                    </Button>
                    <span className="text-2xl font-bold text-accent">{item.price}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-section-alt">
          <div className="container-narrow mx-auto text-center" dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("צריכים משהו מותאם אישית?")}</h2>
            <p className="text-muted-foreground mb-6">{t("אשמח ליצור עבורכם תבניות או מדריכים מותאמים לצרכים הספציפיים.")}</p>
            <Button asChild size="lg">
              <a href="mailto:amitkugler@gmail.com">{t("צרו קשר")}</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Store;
