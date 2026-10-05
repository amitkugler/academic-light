import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppButton = ({ label }: { label?: string }) => {
  const { t } = useLanguage();
  return (
    <Button asChild size="lg" className="h-auto min-h-12 max-w-full whitespace-normal bg-whatsapp hover:bg-whatsapp text-white font-semibold gap-3 px-5 py-3">
      <a href="https://wa.me/972502056585" target="_blank" rel="noopener noreferrer">
        <MessageCircle aria-hidden="true" className="w-5 h-5 shrink-0" />
        <span className="text-start">
          <span className="block">{label ?? t("אפשר לדבר על המחקר שלך")}</span>
          <span className="block mt-1 text-xs font-normal">{t("ללא התחייבות להמשך")}</span>
        </span>
      </a>
    </Button>
  );
};
export default WhatsAppButton;
