import { CSSProperties, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/amit-hero.jpg";

const heroProgress = (rect: DOMRect) => -rect.top / rect.height;
const enter = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as CSSProperties;

const Hero = () => {
  const { t, isRTL } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  useScrollProgress(ref, heroProgress);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] overflow-hidden bg-[#e9e9e7]">
      {/* The foggy sky in the photo is the canvas for the headline; Amit stands to the right of the path */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="hero-media h-full w-full object-cover object-[62%_60%] md:object-[50%_62%]"
        />
        <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-[#ecebe9] via-[#ecebe9]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/45 to-transparent" />
      </div>

      <div className="shell hero-copy flex flex-col items-center pt-32 text-center md:pt-36" dir={isRTL ? "rtl" : "ltr"}>
        <p className="hero-enter glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-foreground/85" style={enter(100)}>
          <span className="h-2 w-2 rounded-full bg-glow shadow-[0_0_10px_hsl(var(--glow))]" aria-hidden="true" />
          {t("ליווי אישי לתואר שני, דוקטורט ופוסט־דוקטורט", "Personal mentoring for master's, PhD and postdoc researchers")}
        </p>

        <h1 className="display-xl mt-6 max-w-4xl text-ink">
          <span className="hero-enter block" style={enter(200)}>{t("לסיים את הדוקטורט.", "Finish your PhD.")}</span>
          <span className="hero-enter block pb-2 text-burgundy" style={enter(350)}>{t("בלי לוותר על החיים.", "Keep your life.")}</span>
        </h1>
      </div>

      <div className="shell absolute inset-x-0 bottom-0 pb-16 md:pb-14" dir={isRTL ? "rtl" : "ltr"}>
        <div
          className="hero-enter glass ml-0 mr-auto max-w-md rounded-[1.75rem] p-6 md:p-7"
          style={enter(550)}
        >
          <p className="text-base leading-relaxed text-foreground md:text-lg">
            {t(
              "ליווי לחוקרים וחוקרות שמשלבים מחקר עם עבודה, משפחה וחיים רגילים. פחות עומס, יותר בהירות, ותזה שבאמת מתקדמת.",
              "For researchers balancing a thesis with work, family and everyday life. Less overwhelm, more clarity, and a thesis that actually moves forward.",
            )}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <WhatsAppButton label={t("אפשר לדבר על המחקר שלך", "Let's talk about your research")} />
            <a href="#how" className="press inline-flex items-center gap-1 font-semibold text-foreground/80 hover:text-foreground">
              {t("איך זה עובד", "How it works")}
              <span aria-hidden="true">{isRTL ? "‹" : "›"}</span>
            </a>
          </div>
        </div>
      </div>

      <a href="#balance" aria-label={t("גלילה להמשך", "Scroll down")} className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-white/80 hover:text-white md:block">
        <ChevronDown className="scroll-cue h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;
