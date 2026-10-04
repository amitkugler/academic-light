import { useEffect, useState } from "react";

type Language = "he" | "en";

// Hebrew-speaking countries/regions
const HEBREW_COUNTRIES = ["IL"]; // Israel

export const useGeoLanguage = (): Language | null => {
  const [detectedLanguage, setDetectedLanguage] = useState<Language | null>(null);

  useEffect(() => {
    const detectLanguage = async () => {
      try {
        // Check if user has a stored preference
        const storedLang = localStorage.getItem("preferred-language");
        if (storedLang === "he" || storedLang === "en") {
          setDetectedLanguage(storedLang);
          return;
        }

        // Try to detect from browser language first (faster, no API call)
        const browserLang = navigator.language || (navigator as any).userLanguage;
        if (browserLang) {
          if (browserLang.startsWith("he")) {
            setDetectedLanguage("he");
            return;
          }
        }

        // Fallback: Try IP-based geolocation
        const response = await fetch("https://ipapi.co/json/", {
          signal: AbortSignal.timeout(3000), // 3 second timeout
        });
        
        if (response.ok) {
          const data = await response.json();
          const countryCode = data.country_code;
          
          if (HEBREW_COUNTRIES.includes(countryCode)) {
            setDetectedLanguage("he");
          } else {
            setDetectedLanguage("en");
          }
        } else {
          // Default to Hebrew if geolocation fails
          setDetectedLanguage("he");
        }
      } catch (error) {
        // Default to Hebrew on error
        console.log("Geolocation detection failed, defaulting to Hebrew");
        setDetectedLanguage("he");
      }
    };

    detectLanguage();
  }, []);

  return detectedLanguage;
};

export const saveLanguagePreference = (lang: Language) => {
  localStorage.setItem("preferred-language", lang);
};
