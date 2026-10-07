import { CSSProperties, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollProgress } from "@/hooks/useScrollProgress";

// Words finish lighting up at 80% of the pinned scroll, leaving a beat to read the full sentence
const pinnedProgress = (rect: DOMRect, vh: number) => (-rect.top / (rect.height - vh)) * 1.25;

const Balance = () => {
  const { t, isRTL } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  useScrollProgress(ref, pinnedProgress);

  const statement = t(
    "בין הגן, העבודה וארוחת הערב, התזה מחכה. לא חסר לך כישרון. חסרים לך בהירות, סדר, ומישהו לחשוב איתו בקול.",
    "Between daycare pickup, the day job and dinner, the thesis waits. You don't lack talent. You lack clarity, structure, and someone to think out loud with.",
  );
  const words = statement.split(" ");

  return (
    <section ref={ref} id="balance" className="relative h-[220vh] bg-ink text-white">
      <div className="sticky top-0 flex h-[100svh] items-center">
        <div className="shell" dir={isRTL ? "rtl" : "ltr"}>
          <p className="eyebrow mb-6 text-glow">{t("אפשר להתקדם אחרת", "A different way forward")}</p>
          <p className="display-lg max-w-5xl text-start" style={{ "--n": words.length } as CSSProperties}>
            {words.map((word, i) => (
              <span key={i} className="word" style={{ "--i": i } as CSSProperties}>
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Balance;
