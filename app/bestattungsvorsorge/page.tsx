import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Bestattungsvorsorge — Was ist das und wie funktioniert es?",
  description:
    "Bestattungsvorsorge einfach erklärt: Vorsorgevertrag, Sterbegeldversicherung, Kosten und Schritt-für-Schritt-Anleitung für eine würdige Absicherung.",
};

export default function BestattungsvorsorgePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">

      <div className="relative h-52 rounded-2xl overflow-hidden">
        <Image
          src="/images/bestattungsvorsorge-familie.png"
          alt="Großeltern mit Kindern besprechen Bestattungsvorsorge"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Ratgeber</p>
        <h1 className="text-3xl font-bold text-brand leading-tight">
          Bestattungsvorsorge — Was ist das und wie funktioniert es?
        </h1>
        <p className="text-lg text-ink/70 leading-relaxed">
          Wer Wünsche und Kosten der eigenen Bestattung rechtzeitig regelt,
          nimmt seinen Angehörigen in der schwersten Stunde eine immense Last.
          Diese Seite erklärt alle Optionen verständlich und ohne Werbedruck.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-brand">Was ist Bestattungsvorsorge?</h2>
        <p className="text-ink/80 leading-relaxed">
          Bestattungsvorsorge bedeutet, zu Lebzeiten schriftlich festzulegen,
          wie und wo man bestattet werden möchte — und idealerweise auch
          sicherzustellen, dass diese Wünsche finanziert sind. Sie umfasst zwei
          Dimensionen: die <strong>persönliche Verfügung</strong> (was soll
          geschehen?) und die <strong>finanzielle Vorsorge</strong> (wer zahlt
          dafür?).
        </p>
        <p className="text-ink/80 leading-relaxed">
          Ohne Vorsorge entscheiden Angehörige unter Trauer und Zeitdruck über
          Bestattungsart, Sarg, Zeremonie und Kosten. Das kann zu Konflikten,
          finanziellen Engpässen und dem quälenden Gefühl führen, es vielleicht
          nicht richtig gemacht zu haben. Eine frühzeitige Vorsorge schenkt
          allen Beteiligten Klarheit und Frieden.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-brand">
          Bestattungsvorsorgevertrag vs. Sterbegeldversicherung
        </h2>
        <p className="text-ink/80 leading-relaxed">
          Es gibt zwei grundlegend verschiedene Wege, die Bestattung finanziell
          abzusichern:
        </p>
        <div className="space-y-4">
          <div className="bg-white border border-accent/20 rounded-xl p-5 space-y-2">
            <h3 className="font-semibold text-brand">Bestattungsvorsorgevertrag</h3>
            <p className="text-sm text-ink/70 leading-relaxed">
              Sie schließen direkt mit einem Bestattungsunternehmen einen
              Vertrag ab. Darin werden alle Leistungen und Preise verbindlich
              festgelegt. Den vereinbarten Betrag zahlen Sie auf ein
              Treuhandkonto ein — er ist damit zweckgebunden und insolvenzfest.
              Vorteil: Die Leistungen sind genau definiert, Preisschwankungen
              spielen keine Rolle mehr. Nachteil: Sie sind an das gewählte
              Bestattungsunternehmen gebunden.
            </p>
          </div>
          <div className="bg-white border border-accent/20 rounded-xl p-5 space-y-2">
            <h3 className="font-semibold text-brand">Sterbegeldversicherung</h3>
            <p className="text-sm text-ink/70 leading-relaxed">
              Eine private Versicherung zahlt beim Tod einen vereinbarten
              Betrag an die Begünstigten aus. Die Auszahlung kann dann für die
              Bestattung verwendet werden — oder für anderes. Vorteil: Flexibel
              einsetzbar, keine Bindung an einen Anbieter. Nachteil: Monatliche
              Beiträge, im Alter oft teuer, und die Versicherungssumme ist
              nicht an steigende Bestattungskosten angepasst.
            </p>
          </div>
        </div>
        <p className="text-ink/80 leading-relaxed">
          Für die meisten Menschen ist ein Vorsorgevertrag mit Treuhandkonto
          die sicherere und transparentere Lösung — besonders wenn man konkrete
          Wünsche hat.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-brand">Welche Bestattungsart wählen?</h2>
        <p className="text-ink/80 leading-relaxed">
          Deutschland bietet mittlerweile eine Vielzahl würdiger Bestattungsformen:
        </p>
        <ul className="space-y-3 text-ink/80">
          <li className="flex gap-3">
            <span className="text-cta font-bold shrink-0">▸</span>
            <span><strong>Erdbestattung:</strong> Die traditionelle Form — Sarg in einem Grab auf einem Friedhof. Pflegepflicht für Angehörige, aber auch ein fester Ort der Trauer.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-cta font-bold shrink-0">▸</span>
            <span><strong>Feuerbestattung (Urne):</strong> Kostengünstiger und flexibler. Die Urne kann auf einem Friedhof, in einem Kolumbarium oder in der Natur beigesetzt werden.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-cta font-bold shrink-0">▸</span>
            <span><strong>Baumbestattung:</strong> Urne wird am Fuß eines Baumes im Wald beigesetzt — wartungsfreiheit und Naturverbundenheit. Anbieter sind z. B. FriedWald oder RuheForst.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-cta font-bold shrink-0">▸</span>
            <span><strong>Seebestattung:</strong> Urnenbeisetzung auf See — besonders für Menschen mit einer engen Verbindung zum Wasser.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-cta font-bold shrink-0">▸</span>
            <span><strong>Anonyme Bestattung:</strong> Ohne namentlich gekennzeichnetes Grab — kostengünstig, aber ohne Ort der Trauer für Angehörige.</span>
          </li>
        </ul>
        <p className="text-ink/80 leading-relaxed">
          Die Wahl der Bestattungsart ist sehr persönlich. Im Vorsorgevertrag
          können Sie Ihre Präferenz verbindlich festhalten.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-brand">
          Kosten einer Bestattung in Deutschland 2026
        </h2>
        <p className="text-ink/80 leading-relaxed">
          Die Kosten variieren je nach Region, Bestattungsart und gewählten
          Leistungen erheblich. Als grobe Orientierung:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-brand text-white">
                <th className="px-4 py-2 rounded-tl-lg">Bestattungsart</th>
                <th className="px-4 py-2">Kosten (ca.)</th>
                <th className="px-4 py-2 rounded-tr-lg">Grabpflege</th>
              </tr>
            </thead>
            <tbody className="text-ink/80">
              <tr className="bg-white border-b border-accent/10">
                <td className="px-4 py-3">Erdbestattung</td>
                <td className="px-4 py-3">5.000 – 12.000 €</td>
                <td className="px-4 py-3">Erforderlich</td>
              </tr>
              <tr className="bg-bg border-b border-accent/10">
                <td className="px-4 py-3">Feuerbestattung (Urne)</td>
                <td className="px-4 py-3">3.000 – 8.000 €</td>
                <td className="px-4 py-3">Je nach Beisetzungsort</td>
              </tr>
              <tr className="bg-white border-b border-accent/10">
                <td className="px-4 py-3">Baumbestattung</td>
                <td className="px-4 py-3">1.500 – 4.000 €</td>
                <td className="px-4 py-3">Keine</td>
              </tr>
              <tr className="bg-bg border-b border-accent/10">
                <td className="px-4 py-3">Seebestattung</td>
                <td className="px-4 py-3">2.000 – 5.000 €</td>
                <td className="px-4 py-3">Keine</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3">Anonyme Bestattung</td>
                <td className="px-4 py-3">800 – 2.500 €</td>
                <td className="px-4 py-3">Keine</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-ink/60">
          Hinweis: Alle Angaben sind Richtwerte (Stand 2026). Regionale
          Unterschiede können erheblich sein. Holen Sie immer mehrere Angebote ein.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-brand">
          Schritt für Schritt: Bestattungsvorsorge richtig aufsetzen
        </h2>
        <ol className="space-y-4 text-ink/80">
          {[
            ["Wünsche klären", "Überlegen Sie, welche Bestattungsart Sie möchten, ob Sie eine Trauerfeier wünschen, welche Lieder gespielt werden sollen und wen Sie informiert haben möchten."],
            ["Schriftliche Bestattungsverfügung", "Halten Sie Ihre Wünsche in einem formlosen Dokument fest. Bewahren Sie es an einem bekannten Ort auf — oder hinterlegen Sie es bei einem Notar."],
            ["Mehrere Angebote einholen", "Kontaktieren Sie zwei bis drei Bestattungsunternehmen in Ihrer Region und vergleichen Sie Leistungen und Preise."],
            ["Vorsorgevertrag mit Treuhandkonto", "Schließen Sie mit dem gewählten Bestatter einen verbindlichen Vorsorgevertrag ab. Bestehen Sie auf einem zertifizierten Treuhandkonto."],
            ["Angehörige informieren", "Sagen Sie Ihren nächsten Angehörigen, wo der Vorsorgevertrag und die Verfügung aufbewahrt sind."],
            ["Testament & Vorsorgevollmacht ergänzen", "Kombinieren Sie die Bestattungsvorsorge mit einem Testament und einer Vorsorgevollmacht — für eine vollständige Absicherung."],
          ].map(([title, text], i) => (
            <li key={i} className="flex gap-4">
              <span className="shrink-0 w-7 h-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-brand">{title}</p>
                <p className="text-sm leading-relaxed mt-1">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <CTABanner />
    </div>
  );
}
