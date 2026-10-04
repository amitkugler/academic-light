import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Introduction = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto text-right" dir="rtl">
        <div className="space-y-8">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              אפשר להתקדם אחרת
              <br />
              <span className="text-accent">עם יותר בהירות, סדר וביטחון</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              לאקדמיה יש שפה, מבנה וכללים משלה, וכשהכול מתקיים במקביל — הצעות, קריאה, ניסויים, ניתוח וכתיבה — ליווי מתאים עוזר לעשות סדר, להתמקד ולהתקדם בביטחון. מניסיוני בדוקטורט למדתי שתמיכה והכוונה נכונות הופכות את התהליך ליעיל, רגוע וברור יותר.
            </p>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-primary-foreground font-semibold gap-2">
              <a href="https://wa.me/972502056585" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                בול מה שחיפשתי - אפשר לדבר?
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
