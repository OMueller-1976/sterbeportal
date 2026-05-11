import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Sterbeportal.de — Angaben gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-brand">Impressum</h1>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800">
        <strong>Hinweis:</strong> Adresse und weitere Pflichtangaben bitte manuell ergänzen.
      </div>

      <section className="space-y-3 text-ink/80">
        <h2 className="font-semibold text-brand text-lg">Angaben gemäß § 5 TMG</h2>
        <address className="not-italic leading-relaxed">
          Oliver Müller<br />
          [Straße und Hausnummer bitte ergänzen]<br />
          [PLZ und Ort bitte ergänzen]<br />
          Deutschland
        </address>
      </section>

      <section className="space-y-3 text-ink/80">
        <h2 className="font-semibold text-brand text-lg">Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a href="mailto:info@sterbeportal.de" className="text-cta hover:underline">
            info@sterbeportal.de
          </a>
        </p>
      </section>

      <section className="space-y-3 text-ink/80">
        <h2 className="font-semibold text-brand text-lg">Inhaltlich Verantwortlicher</h2>
        <p>
          Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV:<br />
          Oliver Müller, [Adresse wie oben]
        </p>
      </section>

      <section className="space-y-3 text-ink/80">
        <h2 className="font-semibold text-brand text-lg">Hinweis auf verbundene Dienste</h2>
        <p>
          Diese Website verweist auf das Angebot{" "}
          <a
            href="https://eritaj.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cta hover:underline"
          >
            eritaj.de
          </a>
          , eine externe Plattform zur digitalen Vorsorge (Testament,
          Vorsorgevollmacht). Zwischen sterbeportal.de und eritaj.de besteht
          eine redaktionelle Partnerschaft. Für die Inhalte von eritaj.de ist
          deren Betreiber verantwortlich.
        </p>
      </section>

      <section className="space-y-3 text-ink/80">
        <h2 className="font-semibold text-brand text-lg">Haftungsausschluss</h2>
        <p className="leading-relaxed">
          Diese Website ist ein kostenloses Informationsangebot und{" "}
          <strong>ersetzt keine Rechts-, Steuer- oder medizinische Beratung</strong>.
          Alle Inhalte wurden sorgfältig recherchiert und werden regelmäßig
          aktualisiert. Dennoch können wir keine Gewähr für Aktualität,
          Richtigkeit und Vollständigkeit übernehmen.
        </p>
        <p className="leading-relaxed">
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
      </section>

      <section className="space-y-3 text-ink/80">
        <h2 className="font-semibold text-brand text-lg">Urheberrecht</h2>
        <p className="leading-relaxed">
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>
      </section>
    </div>
  );
}
