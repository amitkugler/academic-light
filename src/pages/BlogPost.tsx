import { useLanguage } from "@/contexts/LanguageContext";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Facebook, Linkedin, Mail, Printer, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
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

const BlogPost = () => {
  const { t, isRTL } = useLanguage();
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 section-padding">
          <div className="container-narrow mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">{t("הדף לא נמצא")}</h1>
            <Link to="/magazine" className="text-accent hover:underline">{t("חזרה למגזין")}</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = t(post.title, post.titleEn);

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`,
      email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`,
    };

    if (platform === "print") {
      window.print();
    } else {
      window.open(urls[platform], "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={blogImages[post.id] || post.image}
            alt={t(post.title, post.titleEn)}
            width={1280}
            height={800}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        <article className="section-padding">
          <div className="container-narrow mx-auto">
            {/* Back Link */}
            <Link
              to="/magazine"
              className="flex w-fit items-center gap-2 text-accent hover:underline mb-8"
            >
              <ArrowRight className={isRTL ? "w-4 h-4" : "w-4 h-4 rotate-180"} />{t("חזרה למגזין")}</Link>

            {/* Category */}
            <span className="inline-block bg-accent text-accent-foreground text-sm px-3 py-1 rounded mb-4">
              {t(post.category, post.categoryEn)}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-start">
              {t(post.title, post.titleEn)}
            </h1>

            {/* Share Buttons */}
            <div className="flex flex-wrap gap-2 mb-8 justify-start">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Share2 className="w-4 h-4" />{t("שתפו:")}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("facebook")}
                className="gap-2"
              >
                <Facebook className="w-4 h-4" />
                <span className="hidden sm:inline">Facebook</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("linkedin")}
                className="gap-2"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("whatsapp")}
                className="gap-2 text-whatsapp border-whatsapp hover:bg-whatsapp hover:text-white"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("email")}
                className="gap-2"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Email</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare("print")}
                className="gap-2"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">{t("הדפסה")}</span>
              </Button>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-start">
              <p className="text-xl text-muted-foreground mb-8">{t(post.excerpt, post.excerptEn)}</p>
              <div
                className="text-foreground leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: t(post.fullContent, post.fullContentEn) }}
              />
            </div>

            {/* Share Buttons Bottom */}
            <div className="border-t border-border mt-12 pt-8">
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="flex items-center gap-2 text-muted-foreground w-full text-center justify-center mb-2">
                  <Share2 className="w-4 h-4" />{t("אהבת? שתפו!")}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("facebook")}
                  className="gap-2"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("linkedin")}
                  className="gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("whatsapp")}
                  className="gap-2 text-whatsapp border-whatsapp hover:bg-whatsapp hover:text-white"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare("email")}
                  className="gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
