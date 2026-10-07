import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} {t('ד"ר עמית קוגלר. כל הזכויות שמורות.')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a
            href="mailto:amitkugler@gmail.com"
            className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            amitkugler@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/amitkugler/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
          >
            <Linkedin className="w-4 h-4" aria-hidden="true" />
            <bdi>amitkugler</bdi>
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
