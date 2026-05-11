import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Sterbeportal.de — Vorsorge, Bestattung & Abschied gut geregelt",
  description:
    "Alles rund um Bestattungsvorsorge, Sterbegeld und die ersten Schritte nach einem Todesfall. Kostenlose Ratgeber und Checklisten.",
};

const ctas = [
  {
    href: "/bestattungsvorsorge",
    icon: "📋",
    label: "Bestattungsvorsorge",
    text: "Jetzt planen, später entlasten",
  },
  {
    href: "/sterbegeld",
    icon: "💶",
    label: "Sterbegeld",
    text: "Kosten absichern & verstehen",
  },
  {
    href: "/checkliste-sterbefall",
    icon: "✅",
    label: "Checkliste Sterbefall",
    text: "Was jetzt zu erledigen ist",
  },
];

const features = [
  {
    href: "/bestattungsvorsorge",
    icon: "📋",
    title: "Bestattungsvorsorge",
    text: "Wer Wünsche und Finanzierung seiner Bestattung zu Lebzeiten regelt, nimmt Angehörigen im schlimmsten Moment eine immense Last. Wir erklären, wie ein Vorsorgevertrag funktioniert, was er kostet und worauf Sie achten sollten.",
  },
  {
    href: "/sterbegeld",
    icon: "💶",
    title: "Sterbegeld",
    text: "Eine Bestattung kostet in Deutschland durchschnittlich 6.000 bis 12.000 Euro. Eine Sterbegeldversicherung oder ein Treuhandkonto sorgen dafür, dass diese Kosten nicht ungeplant auf Ihre Familie zukommen.",
  },
  {
    href: "/checkliste-sterbefall",
    icon: "✅",
    title: "Checkliste Sterbefall",
    text: "Nach einem Todesfall gibt es viele Aufgaben – von der Totenschein-Ausstellung bis zur Nachlassabwicklung. Unsere strukturierte Checkliste führt Sie Schritt für Schritt durch alle notwendigen Erledigungen.",
  },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">

      {/* Hero */}
      <section className="text-center space-y-6 pt-6">
        <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-2">
          <Image
            src="/images/hero-vorsorge-senioren.png"
            alt="Älteres Paar im Sonnenuntergang — Vorsorge für den Ernstfall"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-brand/30" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-brand leading-tight">
          Alles regeln, bevor es andere müssen.
        </h1>
        <p className="text-lg text-ink/70 max-w-2xl mx-auto leading-relaxed">
          Sterbeportal.de begleitet Sie einfühlsam durch die wichtigsten Fragen
          rund um Bestattungsvorsorge, Sterbegeld und den ersten Schritten nach
          einem Todesfall — kostenlos, unabhängig und verständlich erklärt.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-4">
          {ctas.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="flex flex-col items-center gap-2 p-6 bg-white border border-accent/20 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all text-center"
            >
              <span className="text-3xl">{c.icon}</span>
              <span className="font-semibold text-brand text-sm">{c.label}</span>
              <span className="text-xs text-ink/60">{c.text}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Feature-Blöcke */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-brand">Unsere Themen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.href} className="bg-white rounded-2xl border border-accent/20 p-7 space-y-3">
              <span className="text-3xl">{f.icon}</span>
              <h3 className="font-semibold text-brand text-lg">{f.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{f.text}</p>
              <Link
                href={f.href}
                className="inline-block text-sm font-medium text-cta hover:underline"
              >
                Mehr erfahren →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Zitat */}
      <section className="text-center py-10 border-y border-accent/20">
        <blockquote className="text-xl md:text-2xl font-light text-brand/80 italic max-w-2xl mx-auto leading-relaxed">
          „Wer vorsorgt, schenkt seinen Liebsten Klarheit in einer schweren Zeit."
        </blockquote>
      </section>

      {/* Letzte Artikel */}
      <section className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold text-brand">Aktuelle Ratgeber</h2>
          <Link href="/ratgeber" className="text-sm text-cta hover:underline">
            Alle Artikel →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
