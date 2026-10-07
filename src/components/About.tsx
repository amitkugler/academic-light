import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/Reveal";
import amitProfile from "@/assets/amit-kugler-profile.jpg";

const About = () => {
  const { t, isRTL } = useLanguage();

  const credentials = [
    t("3 תארים במדעי החיים", "3 degrees in life sciences"),
    t("דוקטורט באוניברסיטת אופסלה, שוודיה", "PhD, Uppsala University, Sweden"),
    t("זוכה גרנט מחקר תחרותי", "Competitive research grant"),
    t("פרסומים בכתבי עת מובילים", "Published in leading journals"),
  ];

  return (
    <section id="about" className="scroll-mt-24 bg-section-alt py-24 md:py-36">
      <div className="shell grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20" dir={isRTL ? "rtl" : "ltr"}>
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-30px_hsl(30_20%_10%/0.45)]">
            <img src={amitProfile} alt={t("ד״ר עמית קוגלר")} className="aspect-[4/5] w-full object-cover object-[58%_30%]" loading="lazy" />
          </div>
          <div className="glass absolute bottom-5 start-5 end-5 rounded-2xl px-5 py-4 text-start">
            <p className="text-lg font-bold tracking-tight">{t("ד״ר עמית קוגלר")}</p>
            <p className="text-sm font-medium text-foreground/70">{t("מלווה חוקרים וחוקרות בתארים מתקדמים", "Mentor to graduate and postdoctoral researchers")}</p>
          </div>
        </Reveal>

        <Reveal delay={120} className="text-start">
          <p className="eyebrow">{t("עליי", "About")}</p>
          <h2 className="display-md mt-3">{t("ליווי נכון מאיר את התהליך")}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p className="font-medium text-foreground">{t("הי! אני ד\"ר עמית קוגלר, ומכיר מקרוב את התהליך האקדמי הארוך לאחר שהשלמתי שלושה תארים בתחום מדעי החיים.")}</p>
            <p>{t("עברתי בעצמי את התהליך האקדמי המלא - תואר ראשון ושני בהצטיינות, ודוקטורט באוניברסיטה יוקרתית בחו\"ל (אופסלה שבשוודיה), במהלכו זכיתי בגרנט תחרותי, הובלתי פעילות מחקרית רחבה בשיתוף חוקרים בינלאומיים ופרסמתי מאמרים בכתבי עת מובילים.")}</p>
            <p>{t("היום אני מלווה חוקרים וחוקרות בתארים מתקדמים - בשלבי המחקר, הכתיבה והצגת העבודה - מתוך אמונה שכל אחד ואחת ראויים לליווי, הכוונה ותמיכה מקצועית, בין אם מדובר בתואר שני, בדוקטורט או בפוסט־דוקטורט.")}</p>
            <p>{t("ביחד נעצור רגע, נבחן את מה שעשית עד כה ונגדיר מה חשוב לקדם עכשיו. בפגישה נעבוד על הקושי או המשימה שבחרנו, ונסכם כיוון ברור וצעדים מעשיים להמשך. הליווי משלב ניסיון מקצועי עם הקשבה, בקצב ובהיקף שמתאימים לך.")}</p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {credentials.map((item) => (
              <li key={item} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
