import { useEffect, useRef, useState } from "react";
import { detectRegion } from "@/lib/region";

export type Currency = "ILS" | "EUR" | "USD";
export const sessionPrices: Record<Currency, number> = { ILS: 550, EUR: 160, USD: 180 };

export const currencyForLocation = (country: string, continent: string): Currency =>
  country === "IL" ? "ILS" : continent === "EU" ? "EUR" : "USD";

export function useRegionalCurrency() {
  const [currency, updateCurrency] = useState<Currency>("ILS");
  const manuallySelected = useRef(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("preferred-currency");
      if (saved === "ILS" || saved === "EUR" || saved === "USD") {
        manuallySelected.current = true;
        updateCurrency(saved);
        return;
      }
    } catch { /* Continue with automatic detection. */ }
    let cancelled = false;
    detectRegion().then(region => {
      if (region && !cancelled && !manuallySelected.current) {
        updateCurrency(currencyForLocation(region.country, region.continent));
      }
    });
    return () => { cancelled = true; };
  }, []);
  const setCurrency = (next: Currency) => {
    manuallySelected.current = true;
    updateCurrency(next);
    try { localStorage.setItem("preferred-currency", next); } catch { /* Session selection still works. */ }
  };
  return { currency, setCurrency };
}
