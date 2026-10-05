import { useLanguage } from "@/contexts/LanguageContext";
import { sessionPrices, useRegionalCurrency } from "@/hooks/useRegionalCurrency";

export default function SessionPricing() {
  const { t, language } = useLanguage();
  const { currency } = useRegionalCurrency();
  const price = new Intl.NumberFormat(language === "he" ? "he-IL" : "en-US", {
    style: "currency", currency, minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(sessionPrices[currency]);
  return (
    <div className="space-y-3">
      <p>{t("פגישת ליווי בת שעה עולה", "A one-hour session costs")} <bdi className="font-semibold text-foreground">{price}</bdi>.</p>
      <p>{t("בין הפגישות ניתן לפנות בשאלות נקודתיות - ללא תשלום נוסף. לרוב, השקעה בליווי בשלב מוקדם חוסכת זמן, מאמץ ועלויות בהמשך.", "Between sessions, you can ask focused questions at no extra charge. Investing in support early on often saves time, effort and costs later.")}</p>
    </div>
  );
}
