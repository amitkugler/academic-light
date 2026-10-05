import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
import { detectRegion } from "@/lib/region";
import { englishTranslations } from "@/data/translations";

type Language = "he" | "en";
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (he: string, en?: string) => string;
  isRTL: boolean;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, updateLanguage] = useState<Language>(() => {
    try { return localStorage.getItem("preferred-language") === "en" ? "en" : "he"; }
    catch { return "he"; }
  });
  const manuallySelected = useRef(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("preferred-language");
      if (saved === "he" || saved === "en") {
        manuallySelected.current = true;
        return;
      }
    } catch { /* Automatic detection remains available. */ }
    let cancelled = false;
    detectRegion().then(region => {
      if (region && !cancelled && !manuallySelected.current) {
        updateLanguage(region.country === "IL" ? "he" : "en");
      }
    });
    return () => { cancelled = true; };
  }, []);
  const setLanguage = (lang: Language) => {
    manuallySelected.current = true;
    updateLanguage(lang);
    try { localStorage.setItem("preferred-language", lang); } catch { /* Session selection still works. */ }
  };
  const t = (he: string, en?: string) => language === "he" ? he : (en ?? englishTranslations[he] ?? he);
  const isRTL = language === "he";
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "he" ? "rtl" : "ltr";
    const title = language === "he" ? 'ד״ר עמית קוגלר | ליווי והכוונה במחקר ובכתיבה' : "Dr. Amit Kugler | Research and Writing Guidance";
    const description = language === "he" ? "ליווי אקדמי מקצועי לחוקרים וחוקרות בתארים מתקדמים. תמיכה בכתיבת הצעות מחקר, ליווי בכתיבת תזה ודוקטורט, ובניית שאלונים מחקריים." : "Personal academic support for master's, doctoral and postdoctoral researchers, including research proposals, scientific writing, experiment planning and thesis preparation.";
    document.title = title;
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) document.querySelector(selector)?.setAttribute("content", description);
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) document.querySelector(selector)?.setAttribute("content", title);
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", language === "he" ? "he_IL" : "en_US");
    document.querySelector('meta[name="author"]')?.setAttribute("content", language === "he" ? "ד״ר עמית קוגלר" : "Dr. Amit Kugler");
    document.querySelector('meta[name="keywords"]')?.setAttribute("content", language === "he" ? "ליווי אקדמי, כתיבה אקדמית, הצעת מחקר, תזה, דוקטורט, מחקר" : "academic support, academic writing, research proposal, thesis, PhD, research");
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>{children}</LanguageContext.Provider>;
};
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
