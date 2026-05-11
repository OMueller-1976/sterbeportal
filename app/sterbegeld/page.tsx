import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Sterbegeldversicherung 2026 — Sinnvoll oder nicht?",
  description:
    "Sterbegeldversicherung verständlich erklärt: Was sie leistet, was sie kostet, für wen sie sich lohnt — und wann ein Vorsorgevertrag die bessere Wahl ist.",
};

const faq = [
  {
    q: "Wann wird das Sterbegeld ausgezahlt?",
    a: "Die meisten Versicherer zahlen innerhalb weniger Werktage nach Vorlage der Sterbeurkunde aus. Es empfiehlt sich, die genauen Fristen im Vertrag zu prüfen.",
  },
  {
    q: "Gibt es eine Wartezeit?",
    a: "Ja. Bei vielen Anbietern gilt eine Wartezeit von 24 bis 48 Monaten. Stirbt die versicherte Person innerhalb dieser Zeit, wird häufig nur die Prämienrückerstattung gezahlt. Ausnahmen gelten bei Unfalltod.",
  },
  {
    q: "Kann ich die Versicherungssumme erhöhen?",
    a: "Das hängt vom Anbieter ab. Manche bieten eine Dynamik an, andere erlauben Zusatzleistungen. Bei einer Erhöhung können erneut Gesundheitsfragen gestellt werden.",
  },
  {
    q: "Was passiert, wenn ich die Beiträge nicht mehr zahlen kann?",
    a: "Sie können den Vertrag kündigen oder beitragsfrei stellen. Bei Kündigung erhalten Sie meist einen reduzierten Rückkaufswert. Bei Beitragsfreistellung sinkt die Versicherungssumme.",
  },
  {
    q: "Ist Sterbegeld steuerpflichtig?",
    a: "Die Auszahlung ist in der Regel einkommensteuerfrei. Im Rahmen der Erbschaftsteuer kann sie jedoch relevant sein, wenn der Gesamtnachlass die Freibeträge übersteigt.",
  },
];

export default function SterbegeldPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">

      <div className="relative h-52 rounded-2xl overflow-hidden">
        <Image
          src="/images/sterbegeld-beratung.png"
          alt="Paar bespricht Sterbegeldversicherung am Laptop"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Ratgeber</p>
        <h1 className="text-3xl font-bold text-brand leading-tight">
          Sterbegeldversicherung 2026 — Sinnvoll oder nicht?
        </h1>
        <p className="text-lg text-ink/70 leading-relaxed">
          Eine Bestattung kostet in Deutschland im Schnitt 6.000 bis 12.000 Euro.
          Die Sterbegeldversicherung verspricht, diese Kosten abzufangen.
          Ob sie sich wirklich lohnt, hängt von Ihrer persönlichen Situation ab.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-brand">Was ist Sterbegeld?</h2>
        <p className="text-ink/80 leading-relaxed">
          Ursprünglich war Sterbegeld eine gesetzliche Leistung der
          Krankenkassen. Seit 2004 gibt es diesen Zuschuss nicht mehr — die
          Kosten einer Bestattung trägt seitdem vollständig die Familie oder
          der Nachlass. Private Sterbegeldversicherungen füllen diese Lücke:
          Sie zahlen beim Tod der versicherten Person einen vertraglich
          vereinbarten Betrag aus, der zur Finanzierung der Bestattung
          verwendet werden kann.
        </p>
        <p className="text-ink/80 leading-relaxed">
          Typische Versicherungssummen liegen zwischen 3.000 und 15.000 Euro.
          Die monatlichen Beiträge richten sich nach Eintrittsalter,
          Gesundheitszustand und gewünschter Summe.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-brand">
          Sterbegeldversicherung vs. Bestattungsvorsorgevertrag
        </h2>
        <p className="text-ink/80 leading-relaxed">
          Beide Instrumente dienen der finanziellen Absicherung der Bestattung
          — funktionieren aber grundlegend anders:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-accent/20 rounded-xl p-5 space-y-3">
            <h3 className="font-semibold text-brand">Sterbegeldversicherung</h3>
            <ul className="text-sm text-ink/70 space-y-2">
              <li className="flex gap-2"><span className="text-green-600">✓</span> Auszahlung flexibel verwendbar</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Kein bestimmter Bestatter nötig</li>
              <li className="flex gap-2"><span className="text-red-400">✗</span> Monatliche Beiträge auf Dauer</li>
              <li className="flex gap-2"><span className="text-red-400">✗</span> Wartezeiten bei Vertragsabschluss</li>
              <li className="flex gap-2"><span className="text-red-400">✗</span> Summe deckt gestiegene Kosten evtl. nicht</li>
            </ul>
          </div>
          <div className="bg-white border border-accent/20 rounded-xl p-5 space-y-3">
            <h3 className="font-semibold text-brand">Bestattungsvorsorgevertrag</h3>
            <ul className="text-sm text-ink/70 space-y-2">
              <li className="flex gap-2"><span className="text-green-600">✓</span> Leistungen exakt definiert</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Treuhandkonto — insolvenzgesichert</li>
              <li className="flex gap-2"><span className="text-green-600">✓</span> Einmalzahlung möglich</li>
              <li className="flex gap-2"><span className="text-red-400">✗</span> Bindung an ein Bestattungsunternehmen</li>
              <li className="flex gap-2"><span className="text-red-400">✗</span> Umzug kann problematisch sein</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-brand">Kosten & Leistungen im Überblick</h2>
        <p className="text-ink/80 leading-relaxed">
          Beispiel: Eine 60-jährige Person ohne Vorerkrankungen, die eine
          Versicherungssumme von 8.000 Euro absichern möchte, zahlt bei vielen
          Anbietern zwischen 60 und 110 Euro pro Monat. Bis zum Eintritt des
          Versicherungsfalls können so insgesamt deutlich mehr als die
          Versicherungssumme eingezahlt worden sein.
        </p>
        <p className="text-ink/80 leading-relaxed">
          Alternativ können viele Menschen denselben Betrag auf einem separaten
          Tagesgeldkonto ansparen und die Summe testamentarisch zweckbinden.
          Diese Lösung ist kostengünstiger, erfordert aber Selbstdisziplin und
          Transparenz gegenüber Erben.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-brand">Für wen lohnt sich die Sterbegeldversicherung?</h2>
        <p className="text-ink/80 leading-relaxed">
          Eine Sterbegeldversicherung kann sinnvoll sein, wenn:
        </p>
        <ul className="space-y-2 text-ink/80">
          <li className="flex gap-3"><span className="text-cta font-bold shrink-0">▸</span> Sie keine Ersparnisse haben, die für eine Bestattung ausreichen würden.</li>
          <li className="flex gap-3"><span className="text-cta font-bold shrink-0">▸</span> Sie keinen bestimmten Bestatter bevorzugen und maximale Flexibilität wollen.</li>
          <li className="flex gap-3"><span className="text-cta font-bold shrink-0">▸</span> Ihre Angehörigen finanziell nicht in der Lage wären, die Bestattungskosten kurzfristig vorzustrecken.</li>
          <li className="flex gap-3"><span className="text-cta font-bold shrink-0">▸</span> Sie jung sind und die Beiträge noch niedrig liegen.</li>
        </ul>
        <p className="text-ink/80 leading-relaxed">
          Für Menschen mit Ersparnissen oder für jene, die konkrete
          Bestattungswünsche haben, ist ein Vorsorgevertrag mit Treuhandkonto
          oft die bessere Wahl.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-brand">Worauf beim Abschluss achten?</h2>
        <ul className="space-y-2 text-ink/80">
          <li className="flex gap-3"><span className="text-cta font-bold shrink-0">▸</span><span><strong>Wartezeiten prüfen:</strong> Viele Verträge leisten erst nach 2–4 Jahren voll — lesen Sie das Kleingedruckte.</span></li>
          <li className="flex gap-3"><span className="text-cta font-bold shrink-0">▸</span><span><strong>Gesamtbeitrag berechnen:</strong> Summieren Sie alle Beiträge über die erwartete Laufzeit und vergleichen Sie mit der Versicherungssumme.</span></li>
          <li className="flex gap-3"><span className="text-cta font-bold shrink-0">▸</span><span><strong>Begünstigte benennen:</strong> Tragen Sie namentlich ein, wer die Auszahlung erhalten soll.</span></li>
          <li className="flex gap-3"><span className="text-cta font-bold shrink-0">▸</span><span><strong>Anbieter vergleichen:</strong> Nutzen Sie unabhängige Vergleichsportale — Preise und Konditionen unterscheiden sich erheblich.</span></li>
          <li className="flex gap-3"><span className="text-cta font-bold shrink-0">▸</span><span><strong>Keine Kopplung mit Bestattungsvertrag:</strong> Manche Anbieter verknüpfen Versicherung und Bestattersvertrag. Das schränkt Ihre Flexibilität ein.</span></li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-brand">Häufige Fragen zur Sterbegeldversicherung</h2>
        <div className="space-y-3">
          {faq.map(({ q, a }) => (
            <div key={q} className="bg-white border border-accent/20 rounded-xl p-5">
              <p className="font-semibold text-brand mb-2">{q}</p>
              <p className="text-sm text-ink/70 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
