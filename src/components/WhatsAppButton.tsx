import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const WhatsAppButton = ({ label, className }: { label?: string; className?: string }) => {
  const { t } = useLanguage();
  return (
    <a
      href="https://wa.me/972502056585"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "press inline-flex max-w-full items-center gap-3 rounded-full bg-whatsapp py-3 ps-4 pe-6 text-white shadow-[0_10px_30px_-10px_hsl(var(--whatsapp)/0.7)] hover:brightness-110 active:brightness-95",
        className,
      )}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
        <MessageCircle aria-hidden="true" className="h-5 w-5" />
      </span>
      <span className="text-start leading-tight">
        <span className="block font-semibold">{label ?? t("אפשר לדבר על המחקר שלך")}</span>
        <span className="mt-0.5 block text-xs text-white/85">{t("ללא התחייבות להמשך")}</span>
      </span>
    </a>
  );
};
export default WhatsAppButton;
