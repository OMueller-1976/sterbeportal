import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | sterbeportal.de",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "Angaben gemäß § 5 TMG",
    content: (
      <address className="not-italic text-sm leading-7 text-ink/80">
        <p className="font-semibold text-brand">OneTitel – Digital &amp; Business Solutions</p>
        <p>Oliver M. Müller</p>
        <p>Am Bruchborn 6</p>
        <p>54570 Kirchweiler</p>
        <p>Deutschland</p>
      </address>
    ),
  },
  {
    title: "Kontakt",
    content: (
      <div className="text-sm leading-7 text-ink/80">
        <p>
          E-Mail:{" "}
          <a href="mailto:support@eritaj.de" className="text-cta hover:underline">
            support@eritaj.de
          </a>
        </p>
        <p>
          Website:{" "}
          <a href="https://www.sterbeportal.de" className="text-cta hover:underline">
            www.sterbeportal.de
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Umsatzsteuer",
    content: (
      <div className="text-sm leading-7 text-ink/80">
        <p>USt-IdNr. gemäß § 27a UStG: DE326064654</p>
        <p>Steuernummer: 224/5211/4129</p>
      </div>
    ),
  },
  {
    title: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
    content: (
      <address className="not-italic text-sm leading-7 text-ink/80">
        <p>Oliver M. Müller</p>
        <p>Am Bruchborn 6, 54570 Kirchweiler, Deutschland</p>
      </address>
    ),
  },
  {
    title: "Haftungshinweis",
    content: (
      <p className="text-sm leading-7 text-ink/80">
        sterbeportal.de ist kein Rechtsberatungsdienst. Alle Inhalte dienen der allgemeinen
        Information und ersetzen keine rechtliche, steuerliche oder medizinische Beratung.
      </p>
    ),
  },
  {
    title: "Online-Streitbeilegung",
    content: (
      <div className="text-sm leading-7 text-ink/80 space-y-2">
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cta hover:underline"
          >
            https://ec.europa.eu/consumers/odr
          </a>
        </p>
        <p>
          Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    ),
  },
];

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold text-brand">Impressum</h1>
      </header>

      <div className="space-y-4">
        {sections.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-accent/20 bg-white px-6 py-5"
          >
            <h2 className="mb-3 text-base font-semibold text-brand">{s.title}</h2>
            {s.content}
          </div>
        ))}
      </div>
    </div>
  );
}
