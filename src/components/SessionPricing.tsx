import { useLanguage } from "@/contexts/LanguageContext";
import { Currency, sessionPrices, useRegionalCurrency } from "@/hooks/useRegionalCurrency";

export default function SessionPricing() {
  const { t, language } = useLanguage();
  const { currency, setCurrency } = useRegionalCurrency();
  const price = new Intl.NumberFormat(language === "he" ? "he-IL" : "en-US", {
    style: "currency", currency, minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(sessionPrices[currency]);
  return (
    <div className="space-y-3">
      <p>{t("פגישת ליווי בת שעה עולה", "A one-hour session costs")} <bdi className="font-semibold text-foreground">{price}</bdi>.</p>
      <div className="flex flex-wrap items-center gap-3">
        <label htmlFor="session-currency">{t("מטבע להצגת המחיר", "Pricing currency")}</label>
        <select id="session-currency" value={currency} onChange={event => setCurrency(event.target.value as Currency)}
          className="rounded-md border border-input bg-background px-3 py-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <option value="ILS">{t("שקל (ILS)", "Israeli shekel (ILS)")}</option>
          <option value="EUR">{t("יורו (EUR)", "Euro (EUR)")}</option>
          <option value="USD">{t("דולר (USD)", "US dollar (USD)")}</option>
        </select>
      </div>
      <p className="text-sm">{t("המטבע נבחר לפי המיקום המשוער ואפשר לשנות אותו כאן. אלה מחירים קבועים, ולא המרה לפי שער חליפין.", "The currency is selected using your approximate location and can be changed here. These are fixed prices, not exchange-rate conversions.")}</p>
      <p>{t("בין הפגישות ניתן לפנות בשאלות נקודתיות - ללא תשלום נוסף. לרוב, השקעה בליווי בשלב מוקדם חוסכת זמן, מאמץ ועלויות בהמשך.", "Between sessions, you can ask focused questions at no extra charge. Investing in support early on often saves time, effort and costs later.")}</p>
    </div>
  );
}
