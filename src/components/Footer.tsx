import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} ד"ר עמית קוגלר. כל הזכויות שמורות.
          </p>
          <a
            href="mailto:amitkugler@gmail.com"
            className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            amitkugler@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
