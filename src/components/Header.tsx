import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = language === "he"
    ? [
        { label: "איך זה עובד", href: "/#how" },
        { label: "עליי", href: "/#about" },
        { label: "שאלות", href: "/#faq" },
        { label: "מגזין", href: "/magazine" },
      ]
    : [
        { label: "How it works", href: "/#how" },
        { label: "About", href: "/#about" },
        { label: "FAQ", href: "/#faq" },
        { label: "Magazine", href: "/magazine" },
      ];

  const toggleLanguage = () => setLanguage(language === "he" ? "en" : "he");

  const languageButton = (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t("Switch to English", "Switch to Hebrew")}
      className="press flex h-9 items-center gap-1.5 rounded-full px-3 text-sm font-medium text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
    >
      <Globe className="h-4 w-4" aria-hidden="true" />
      {language === "he" ? "EN" : "עב"}
    </button>
  );

  return (
    <header className="fixed inset-x-0 z-50 px-3 md:px-6" style={{ top: "max(0.75rem, env(safe-area-inset-top))" }}>
      <div className="glass mx-auto max-w-5xl rounded-full">
        <div className="flex h-14 items-center justify-between gap-3 ps-5 pe-2">
          <Link to="/" className="min-w-0 whitespace-nowrap text-[0.95rem] font-semibold tracking-tight text-foreground">
            {language === "he" ? (
              <>
                ד"ר עמית קוגלר
                <span className="hidden lg:inline font-normal text-muted-foreground"> · להאיר את התהליך האקדמי</span>
              </>
            ) : (
              <>
                Dr. Amit Kugler
                <span className="hidden lg:inline font-normal text-muted-foreground"> · Lighting the Academic Process</span>
              </>
            )}
          </Link>

          <nav className="hidden md:flex shrink-0 items-center gap-1 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="press rounded-full px-3 py-2 font-medium text-foreground/75 transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            {languageButton}
            <Link
              to="/#contact"
              className="press ms-1 rounded-full bg-foreground px-4 py-2 font-semibold text-background hover:bg-foreground/85"
            >
              {t("יצירת קשר", "Contact")}
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-1 md:hidden">
            {languageButton}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t("פתיחה וסגירה של התפריט", "Toggle navigation menu")}
              aria-expanded={isMenuOpen}
              className="press flex h-10 w-10 items-center justify-center rounded-full hover:bg-foreground/5"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="glass mx-auto mt-2 max-w-5xl rounded-[1.75rem] p-2 md:hidden"
          style={{ animation: "menuIn 450ms var(--ease-spring) both", transformOrigin: "top" }}
        >
          {[...navItems, { label: t("יצירת קשר", "Contact"), href: "/#contact" }].map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="press block rounded-2xl px-4 py-3 text-lg font-medium text-foreground hover:bg-foreground/5"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
