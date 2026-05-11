import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/articles";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group bg-white border border-accent/20 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      {/* Image / Placeholder */}
      <div className="relative h-44 bg-brand/10 overflow-hidden">
        {article.image ? (
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl opacity-20">☽</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-accent mb-2">{article.date}</p>
        <h3 className="text-base font-semibold text-brand leading-snug mb-2">
          <Link
            href={`/ratgeber/${article.slug}`}
            className="hover:text-cta transition-colors"
          >
            {article.title}
          </Link>
        </h3>
        <p className="text-sm text-ink/70 mb-4 line-clamp-3">{article.description}</p>
        <Link
          href={`/ratgeber/${article.slug}`}
          className="text-sm font-medium text-cta hover:underline"
        >
          Weiterlesen →
        </Link>
      </div>
    </article>
  );
}
