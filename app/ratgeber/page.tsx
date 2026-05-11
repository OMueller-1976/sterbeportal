import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Ratgeber Bestattung & Vorsorge",
  description:
    "Fundierte Ratgeber-Artikel zu Bestattungskosten, Vorsorgevollmacht, digitalem Nachlass, Hospiz und mehr — kostenlos und unabhängig.",
};

const categories = Array.from(new Set(articles.map((a) => a.category)));

export default function RatgeberPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Übersicht</p>
        <h1 className="text-3xl font-bold text-brand">Ratgeber Bestattung &amp; Vorsorge</h1>
        <p className="text-lg text-ink/70 max-w-2xl leading-relaxed">
          Fundierte Informationen rund um Vorsorge, Bestattung und Trauer —
          verständlich aufbereitet, kostenlos und unabhängig.
        </p>
      </header>

      {categories.map((cat) => (
        <section key={cat} className="space-y-5">
          <h2 className="text-lg font-semibold text-brand border-b border-accent/20 pb-2">
            {cat}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {articles
              .filter((a) => a.category === cat)
              .map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
