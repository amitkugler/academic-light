export interface Region { country: string; continent: string }
let regionRequest: Promise<Region | null> | undefined;

// Share one location request between language and pricing for this page session.
export function detectRegion(): Promise<Region | null> {
  if (!regionRequest) {
    regionRequest = fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(4000) })
      .then(async response => {
        if (!response.ok) return null;
        const data = await response.json();
        return typeof data.country_code === "string" && typeof data.continent_code === "string"
          ? { country: data.country_code, continent: data.continent_code } : null;
      })
      .catch(() => null);
  }
  return regionRequest;
}
