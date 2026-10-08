import { useLanguage } from "@/contexts/LanguageContext";
import amitProfile from "@/assets/amit-kugler-profile.jpg";

const About = () => {
  const { t, isRTL } = useLanguage();
  return (
    <section className="px-4 md:px-8 pt-8 md:pt-10 pb-8 md:pb-10 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-start order-2 lg:order-1 animate-fade-up" dir={isRTL ? "rtl" : "ltr"}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="text-accent-blue">{t("ליווי נכון מאיר את התהליך")}</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">{t("הי! אני ד\"ר עמית קוגלר, ומכיר מקרוב את התהליך האקדמי הארוך לאחר שהשלמתי שלושה תארים בתחום מדעי החיים.")}</strong>
              </p>
              <p>{t("עברתי בעצמי את התהליך האקדמי המלא - תואר ראשון ושני בהצטיינות, ודוקטורט באוניברסיטה יוקרתית בחו\"ל (אופסלה שבשוודיה), במהלכו זכיתי בגרנט תחרותי, הובלתי פעילות מחקרית רחבה בשיתוף חוקרים בינלאומיים ופרסמתי מאמרים בכתבי עת מובילים.")}</p>
              <p>{t("היום אני מלווה חוקרים וחוקרות בתארים מתקדמים - בשלבי המחקר, הכתיבה והצגת העבודה - מתוך אמונה שכל אחד ואחת ראויים לליווי, הכוונה ותמיכה מקצועית, בין אם מדובר בתואר שני, בדוקטורט או בפוסט־דוקטורט.")}</p>
              <p>{t("ביחד נעצור רגע, נבחן את מה שעשית עד כה ונגדיר מה חשוב לקדם עכשיו. בפגישה נעבוד על הקושי או המשימה שבחרנו, ונסכם כיוון ברור וצעדים מעשיים להמשך. הליווי משלב ניסיון מקצועי עם הקשבה, בקצב ובהיקף שמתאימים לך.")}</p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <img src={amitProfile} alt={t("ד״ר עמית קוגלר")} className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
