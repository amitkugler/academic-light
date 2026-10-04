import heroImage from "@/assets/hero-academic-light.jpg";

// Original text (kept for reference):
// Title: "אני כאן ללוות ולתמוך / את המסע האישי שלך / במחקר ובכתיבה אקדמית"
// Subtitle: "יחד נעשה סדר בבלגן, נבין מה תוקע ומתסכל אותך בדרך, ונחזור למקום ודאי שיודע מה עלייך לעשות כדי לסיים את התואר!"

const Hero = () => {
  return (
    <section className="min-h-screen pt-16 relative overflow-hidden bg-hero-bg">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
        {/* Image - Left Side (on desktop) */}
        <div className="lg:w-1/2 order-2 lg:order-1 h-64 md:h-80 lg:h-auto">
          <img
            src={heroImage}
            alt="מנורת שולחן מאירה ספרים פתוחים ומחברות על שולחן לימוד חמים"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content - Right Side */}
        <div className="lg:w-1/2 order-1 lg:order-2 flex items-center justify-center lg:justify-start px-6 md:px-12 lg:px-16 py-12 lg:py-0">
          <div className="text-right max-w-xl animate-fade-up" dir="rtl">
            <h1 className="font-normal leading-relaxed">
              <span className="block mb-2 text-2xl md:text-3xl font-medium text-foreground">
                יחד
              </span>
              <span className="block text-[clamp(1.25rem,4.8vw,2rem)] lg:text-[clamp(1.25rem,2.4vw,2rem)] font-medium text-foreground leading-relaxed">
                נבנה תהליך נעים וממוקד יותר
              </span>
              <span className="block mt-2 text-[clamp(0.875rem,3.6vw,1.375rem)] lg:text-[clamp(0.875rem,1.65vw,1.375rem)] text-muted-foreground leading-relaxed">
                במחקר, בכתיבה ובחיים האקדמיים
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
