import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articles, getArticleBySlug } from "@/lib/articles";
import CTABanner from "@/components/CTABanner";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: PageProps<"/ratgeber/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    openGraph: article.image
      ? { images: [{ url: article.image, alt: article.title }] }
      : undefined,
  };
}

export default async function ArticlePage(props: PageProps<"/ratgeber/[slug]">) {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "sterbeportal.de",
      url: "https://www.sterbeportal.de",
    },
    publisher: {
      "@type": "Organization",
      name: "sterbeportal.de",
      url: "https://www.sterbeportal.de",
    },
    ...(article.image && { image: `https://www.sterbeportal.de${article.image}` }),
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-ink/50">
        <Link href="/" className="hover:text-ink transition-colors">Startseite</Link>
        <span>/</span>
        <Link href="/ratgeber" className="hover:text-ink transition-colors">Ratgeber</Link>
        <span>/</span>
        <span className="text-ink/80 truncate">{article.title}</span>
      </nav>

      {/* Article header */}
      <header className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            {article.category}
          </span>
          <span className="text-xs text-ink/40">·</span>
          <time className="text-xs text-ink/40">{article.date}</time>
        </div>
        <h1 className="text-3xl font-bold text-brand leading-tight">{article.title}</h1>
        <p className="text-lg text-ink/70 leading-relaxed">{article.description}</p>
      </header>

      {/* Hero image */}
      {article.image && (
        <div className="relative h-64 rounded-2xl overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      <hr className="border-accent/20" />

      {/* Article content — trusted HTML from lib/articles.ts */}
      <div
        className="article-prose"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <hr className="border-accent/20" />

      <Link href="/ratgeber" className="inline-block text-sm text-cta hover:underline">
        ← Zurück zum Ratgeber
      </Link>

      <CTABanner />
    </div>
  );
}
