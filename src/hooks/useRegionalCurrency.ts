import { useEffect, useState } from "react";
import { detectRegion } from "@/lib/region";

export type Currency = "ILS" | "EUR" | "USD";
export const sessionPrices: Record<Currency, number> = { ILS: 450, EUR: 130, USD: 150 };

export const currencyForLocation = (country: string, continent: string): Currency =>
  country === "IL" ? "ILS" : continent === "EU" ? "EUR" : "USD";

export function useRegionalCurrency() {
  const [currency, updateCurrency] = useState<Currency>("ILS");
  useEffect(() => {
    let cancelled = false;
    detectRegion().then(region => {
      if (region && !cancelled) {
        updateCurrency(currencyForLocation(region.country, region.continent));
      }
    });
    return () => { cancelled = true; };
  }, []);
  return { currency };
}
