import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = language === "he" 
    ? [
        { label: "בית", href: "/" },
        { label: "מגזין", href: "/magazine" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "Magazine", href: "/magazine" },
      ];

  const toggleLanguage = () => {
    const newLang = language === "he" ? "en" : "he";
    setLanguage(newLang);

  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-lg font-bold text-foreground" dir={language === "he" ? "rtl" : "ltr"}>
            {language === "he" ? (
              <>
                ד"ר עמית קוגלר.{" "}
                <span className="font-normal text-muted-foreground hidden sm:inline">
                  להאיר את התהליך האקדמי
                </span>
              </>
            ) : (
              <>
                Dr. Amit Kugler{" "}
                <span className="font-normal text-muted-foreground hidden sm:inline">
                  Lighting the Academic Process
                </span>
              </>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              aria-label={t("Switch to English", "Switch to Hebrew")}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              {language === "he" ? "EN" : "עב"}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              aria-label={t("Switch to English", "Switch to Hebrew")}
              className="flex items-center gap-1"
            >
              <Globe className="h-4 w-4" />
              {language === "he" ? "EN" : "עב"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t("פתיחה וסגירה של התפריט", "Toggle navigation menu")}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block py-3 text-foreground hover:text-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
