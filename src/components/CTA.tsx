import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const { t, isRTL } = useLanguage();
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto text-center" dir={isRTL ? "rtl" : "ltr"}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-up">{t("מפסיקים להיות מתוסכלים")}<br />
          <span className="text-accent">{t("בואו נעשה את זה יחד!")}</span>
        </h2>
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Button
            asChild
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-primary-foreground font-semibold gap-2 mt-6"
          >
            <a
              href="https://wa.me/972502056585"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />{t("דברו איתי ב-WhatsApp")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
