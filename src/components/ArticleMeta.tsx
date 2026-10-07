import { Clock, UserRound } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { BlogPost } from "@/data/blogPosts";

export function readingMinutes(html: string): number {
  const text = html.replace(/<[^>]*>/g, " ").replace(/&(?:#\d+|#x[\da-f]+|\w+);/gi, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function ArticleMeta({ post, className = "" }: { post: BlogPost; className?: string }) {
  const { t } = useLanguage();
  const minutes = readingMinutes(t(post.fullContent, post.fullContentEn));
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground ${className}`}>
      <span className="inline-flex items-center gap-1.5">
        <UserRound className="h-4 w-4 shrink-0" aria-hidden="true" />
        {t('ד״ר עמית קוגלר', "Dr. Amit Kugler")}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
        {t(`כ־${minutes} דקות קריאה`, `About ${minutes} min read`)}
      </span>
    </div>
  );
}
