import amitProfile from "@/assets/amit-kugler-profile.jpg";

const About = () => {
  return (
    <section className="px-4 md:px-8 pt-8 md:pt-10 pb-16 md:pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-right order-2 lg:order-1 animate-fade-up" dir="rtl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="text-accent">ליווי נכון מאיר את התהליך</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">הי! אני ד"ר עמית קוגלר, ומכיר מקרוב את התהליך האקדמי הארוך לאחר שהשלמתי שלושה תארים בתחום מדעי החיים.</strong>
              </p>
              <p>
                עברתי בעצמי את התהליך האקדמי המלא — תואר ראשון ושני בהצטיינות, ודוקטורט באוניברסיטה בחו"ל (אופסלה שבשוודיה), במהלכו זכיתי בגרנט תחרותי יוקרתי, הובלתי פעילות מחקרית רחבה בשיתוף חוקרים בינלאומיים ופרסמתי מאמרים בכתבי עת מובילים.
              </p>
              <p>
                היום אני מלווה חוקרים וחוקרות בתארים מתקדמים — בשלבי המחקר, הכתיבה והצגת העבודה — מתוך אמונה שכל אחד ואחת ראויים לליווי, הכוונה ותמיכה מקצועית, בין אם מדובר בתואר שני או בדוקטורט.
              </p>
              <p>
                ביחד נעצור רגע, נבחן את מה שעשית עד כה, ונבין מה מקשה על ההתקדמות. משם נבנה ליווי מדויק — שמשלב ניסיון מקצועי רב עם הקשבה והתאמה אישית לצרכים שלך.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <img src={amitProfile} alt="ד״ר עמית קוגלר" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
