import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import blogResearchProposal from "@/assets/blog/research-proposal-new.jpg";
import blogWritersBlock from "@/assets/blog/writers-block-new.jpg";
import blogTimeManagement from "@/assets/blog/time-management-new.jpg";
import blogChoosingSupervisor from "@/assets/blog/choosing-supervisor-new.jpg";
import blogEmotionalWellbeing from "@/assets/blog/emotional-wellbeing-new.jpg";
import blogStatisticalAnalysis from "@/assets/blog/statistical-analysis-new.jpg";
import blogHandlingFeedback from "@/assets/blog/handling-feedback-new.jpg";
import blogStayingMotivated from "@/assets/blog/staying-motivated-new.jpg";

const blogImages: Record<number, string> = {
  1: blogResearchProposal,
  2: blogWritersBlock,
  3: blogTimeManagement,
  4: blogChoosingSupervisor,
  5: blogEmotionalWellbeing,
  6: blogStatisticalAnalysis,
  7: blogHandlingFeedback,
  8: blogStayingMotivated,
};

const Magazine = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-section-alt">
          <div className="container-narrow mx-auto text-start">
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t("מגזין")}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{t("מאמרים ותכנים מעשיים על כתיבה אקדמית, ניהול מחקר והתמודדות עם אתגרים בדרך - בגובה העיניים. בואו ללמוד איך לעבוד חכם יותר, לכתוב ברור יותר - ולהרגיש בטוחים יותר בתהליך.")}</p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {blogPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/magazine/${post.slug}`}
                  className="group animate-fade-up block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <article className="h-full bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-colors">
                    <div className="relative overflow-hidden">
                      <span className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground text-sm px-3 py-1 rounded">
                        {t(post.category, post.categoryEn)}
                      </span>
                      <img
                        src={blogImages[post.id] || post.image}
                        alt={t(post.title, post.titleEn)}
                        loading="lazy"
                        width={1280}
                        height={800}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-start">
                      <h2 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {t(post.title, post.titleEn)}
                      </h2>
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {t(post.excerpt, post.excerptEn)}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Magazine;
