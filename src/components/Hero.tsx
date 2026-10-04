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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6">
              מחקר וכתיבה
              <br />
              <span className="text-accent">עם יותר בהירות, סדר וביטחון</span>
              <br />
              <span className="relative inline-block font-bold">
                עם ליווי, תמיכה וכלים מעשיים
                <span className="absolute bottom-0 right-0 w-full h-1 bg-accent-blue rounded-full"></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              יחד נבנה תהליך נעים וממוקד יותר — במחקר, בכתיבה ובחיים האקדמיים.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
