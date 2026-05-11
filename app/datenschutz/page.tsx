import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | sterbeportal.de",
  description:
    "Datenschutzerklärung von sterbeportal.de — Informationen zu Google Analytics, Tracking-Links, Geo-Daten, Cookies und Datenverarbeitung gemäß DSGVO.",
  robots: { index: false, follow: false },
};

const sections: { title: string; content: React.ReactNode }[] = [
  {
    title: "1. Verantwortlicher",
    content: (
      <div className="text-sm leading-7 text-ink/80">
        <p>Verantwortlicher im Sinne der DSGVO ist:</p>
        <p className="mt-2 font-semibold text-brand">
          OneTitel – Digital &amp; Business Solutions / Oliver M. Müller
        </p>
        <p>Am Bruchborn 6, 54570 Kirchweiler, Deutschland</p>
        <p>
          E-Mail:{" "}
          <a href="mailto:support@eritaj.de" className="text-cta hover:underline">
            support@eritaj.de
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "2. Erhebung und Verarbeitung personenbezogener Daten",
    content: (
      <div className="text-sm leading-7 text-ink/80 space-y-2">
        <p>
          sterbeportal.de ist ein kostenfreies Informationsangebot ohne Nutzerregistrierung oder
          Zahlungsfunktion. Es werden ausschließlich technische Zugriffsdaten erhoben, die beim
          Besuch der Website automatisch anfallen:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>IP-Adresse (anonymisiert)</li>
          <li>Aufgerufene URLs, Datum und Uhrzeit des Zugriffs</li>
          <li>Browser- und Geräteinformationen</li>
          <li>Referrer (Herkunftsseite)</li>
        </ul>
        <p>
          Rechtsgrundlagen: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren
          und stabilen Betrieb der Website).
        </p>
      </div>
    ),
  },
  {
    title: "3. Verwendung von Vercel",
    content: (
      <div className="text-sm leading-7 text-ink/80 space-y-2">
        <p>
          sterbeportal.de wird über Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723,
          USA) gehostet. Vercel verarbeitet Serveranfragen und stellt die technische
          Infrastruktur bereit. Datenübertragungen in die USA erfolgen auf Basis der
          EU-Standardvertragsklauseln (Art. 46 DSGVO).
        </p>
        <p>
          Weitere Informationen:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cta hover:underline"
          >
            vercel.com/legal/privacy-policy
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "4. Google Analytics 4",
    content: (
      <div className="text-sm leading-7 text-ink/80 space-y-2">
        <p>
          Diese Website nutzt Google Analytics 4 (Google Ireland Limited, Gordon House, Barrow
          Street, Dublin 4, Irland). Google Analytics verwendet Cookies und ähnliche
          Technologien, um das Nutzerverhalten zu analysieren.
        </p>
        <p>Dabei werden folgende Daten verarbeitet:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Seitenaufrufe und Verweildauer</li>
          <li>Geräte- und Browserinformationen</li>
          <li>Ungefährer Standort (Land/Region — keine exakten GPS-Koordinaten)</li>
          <li>Referrer (woher Besucher kommen)</li>
          <li>Klick- und Interaktionsdaten</li>
        </ul>
        <p>
          IP-Adressen werden vor der Übertragung anonymisiert (IP-Anonymisierung aktiviert).
          Eine direkte Personenidentifikation ist nicht möglich. Datenübertragungen in die USA
          erfolgen auf Basis der EU-Standardvertragsklauseln (Art. 46 DSGVO) sowie des
          EU-US Data Privacy Framework.
        </p>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          Websiteanalyse und Optimierung). Sie können der Erfassung widersprechen:{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cta hover:underline"
          >
            tools.google.com/dlpage/gaoptout
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "5. Google Tag Manager",
    content: (
      <div className="text-sm leading-7 text-ink/80 space-y-2">
        <p>
          Diese Website verwendet Google Tag Manager (Google Ireland Limited, Gordon House,
          Barrow Street, Dublin 4, Irland). Google Tag Manager ist ein Tag-Management-System
          das es ermöglicht, verschiedene Tracking-Tags zentral zu verwalten. Google Tag Manager
          selbst erhebt keine personenbezogenen Daten, kann jedoch andere Tags auslösen.
          Aktuell sind keine Analyse- oder Tracking-Tags aktiv.
        </p>
        <p>
          Weitere Informationen:{" "}
          <a
            href="https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cta hover:underline"
          >
            Google Tag Manager Nutzungsrichtlinien
          </a>
        </p>
        <p>GTM-ID: GTM-PQQX4DVT</p>
      </div>
    ),
  },
  {
    title: "6. Tracking-Links und UTM-Parameter",
    content: (
      <div className="text-sm leading-7 text-ink/80 space-y-2">
        <p>
          sterbeportal.de verwendet in Verlinkungen und Marketing-Materialien sogenannte
          Tracking-Links mit UTM-Parametern (Urchin Tracking Module). Diese Parameter
          (z. B. utm_source, utm_medium, utm_campaign) werden an die URL angehängt und
          ermöglichen die Analyse der Herkunft von Websitebesuchen.
        </p>
        <p>Dabei werden folgende Daten erfasst:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Kampagnenquelle (z. B. Newsletter, Social Media)</li>
          <li>Kampagnenmedium (z. B. E-Mail, organisch)</li>
          <li>Kampagnenname und -inhalt</li>
          <li>Zeitpunkt des Klicks</li>
        </ul>
        <p>
          Diese Daten werden ausschließlich zur Analyse der Marketingeffektivität genutzt und
          nicht mit personenbezogenen Profilen verknüpft. Rechtsgrundlage: Art. 6 Abs. 1
          lit. f DSGVO.
        </p>
      </div>
    ),
  },
  {
    title: "7. Standortdaten und geografische Auswertung",
    content: (
      <div className="text-sm leading-7 text-ink/80 space-y-2">
        <p>
          sterbeportal.de kann auf Basis der IP-Adresse eine ungefähre geografische Zuordnung
          vornehmen (Land, Region, Stadt). Diese Geo-Daten werden ausschließlich für folgende
          Zwecke verwendet:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Anzeige regionaler Inhalte und Angebote</li>
          <li>Statistische Auswertung der Nutzerherkunft</li>
          <li>Betrugsprävention und Sicherheitsanalyse</li>
        </ul>
        <p>
          Eine exakte Standortbestimmung (GPS) findet nicht statt. IP-Adressen werden nach
          der Geo-Auflösung anonymisiert und nicht dauerhaft gespeichert.
        </p>
      </div>
    ),
  },
  {
    title: "8. Cookies und Einwilligungsverwaltung",
    content: (
      <div className="text-sm leading-7 text-ink/80 space-y-2">
        <p>sterbeportal.de verwendet folgende Cookie-Kategorien:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Technisch notwendig:</strong> Session-Cookies für Sicherheits-Tokens.
            Keine Einwilligung erforderlich.
          </li>
          <li>
            <strong>Analyse &amp; Statistik:</strong> Google Analytics Cookies (_ga, _gid,
            _gat). Speicherdauer: bis zu 2 Jahre. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
          </li>
          <li>
            <strong>Marketing (zukünftig):</strong> Falls zukünftig Remarketing- oder
            Werbe-Cookies eingesetzt werden, erfolgt dies nur nach ausdrücklicher Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO) über ein Cookie-Consent-Banner.
          </li>
        </ul>
        <p>
          Sie können Cookies jederzeit in Ihrem Browser löschen oder deaktivieren. Dies kann
          die Funktionalität der Website einschränken.
        </p>
      </div>
    ),
  },
  {
    title: "9. Ihre Rechte",
    content: (
      <div className="text-sm leading-7 text-ink/80 space-y-2">
        <p>Sie haben folgende Rechte nach DSGVO:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Auskunft</strong> (Art. 15 DSGVO): Welche Daten wir über Sie speichern
          </li>
          <li>
            <strong>Berichtigung</strong> (Art. 16 DSGVO): Korrektur unrichtiger Daten
          </li>
          <li>
            <strong>Löschung</strong> (Art. 17 DSGVO): „Recht auf Vergessenwerden"
          </li>
          <li>
            <strong>Einschränkung</strong> (Art. 18 DSGVO): Einschränkung der Verarbeitung
          </li>
          <li>
            <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO): Export Ihrer Daten
          </li>
          <li>
            <strong>Widerspruch</strong> (Art. 21 DSGVO): Widerspruch gegen die Verarbeitung
          </li>
          <li>
            <strong>Beschwerderecht:</strong> Bei der zuständigen Aufsichtsbehörde — Der
            Landesbeauftragte für den Datenschutz und die Informationsfreiheit
            Rheinland-Pfalz, Hintere Bleiche 34, 55116 Mainz
          </li>
        </ul>
        <p className="mt-2">
          Anfragen richten Sie an:{" "}
          <a href="mailto:support@eritaj.de" className="text-cta hover:underline">
            support@eritaj.de
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "10. Keine Weitergabe zu Werbezwecken",
    content: (
      <p className="text-sm leading-7 text-ink/80">
        Wir verkaufen oder vermieten Ihre personenbezogenen Daten nicht an Dritte. Eine
        Weitergabe erfolgt ausschließlich zur technischen Bereitstellung der Website und nur
        soweit gesetzlich erforderlich.
      </p>
    ),
  },
];

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold text-brand">Datenschutzerklärung</h1>
        <p className="text-sm text-ink/50">Stand: Mai 2026</p>
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
