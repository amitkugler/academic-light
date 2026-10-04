import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const { t, isRTL } = useLanguage();
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto text-start" dir={isRTL ? "rtl" : "ltr"}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-up">{t("ליווי אקדמי שמאיר לך את התהליך!")}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>{t("לא פעם ראיתי כיצד אנשים רציניים ומשקיעים עובדים קשה לאורך זמן - אך מתקשים להתקדם בצורה רציפה וברורה. לא בגלל חוסר רצון או מאמץ, אלא בגלל עומס, חוסר סדר והיעדר תמיכה מספקת בתהליך. במצבים כאלה, ליווי מתאים יכול לעשות הבדל גדול.")}</p>

        <div className="bg-section-alt rounded-lg p-8 text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-xl md:text-2xl font-bold mb-4">{t("אני כאן בשבילך –")}<br />
            <span className="text-accent">{t("ועכשיו זה הזמן הכי מתאים!")}</span>
          </h3>
          <Button
            asChild
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-primary-foreground font-semibold gap-2 mt-4"
          >
            <a
              href="https://wa.me/972502056585"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />{t("אשמח שנדבר ב-WhatsApp")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
