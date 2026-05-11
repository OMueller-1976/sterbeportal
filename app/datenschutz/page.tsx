import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Sterbeportal.de gemäß DSGVO. Informationen zu Hosting, Cookies und Ihren Rechten.",
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-brand">Datenschutzerklärung</h1>
      <p className="text-ink/70 leading-relaxed">
        Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese
        Datenschutzerklärung informiert Sie darüber, welche Daten beim Besuch
        von sterbeportal.de erhoben werden, wie sie verwendet werden und
        welche Rechte Sie haben.
      </p>

      <section className="space-y-3 text-ink/80">
        <h2 className="font-semibold text-brand text-lg">1. Verantwortliche Stelle</h2>
        <p className="leading-relaxed">
          Verantwortlich im Sinne der DSGVO ist:<br />
          Oliver Müller<br />
          [Adresse bitte im Impressum ergänzen]<br />
          E-Mail:{" "}
          <a href="mailto:info@sterbeportal.de" className="text-cta hover:underline">
            info@sterbeportal.de
          </a>
        </p>
      </section>

      <section className="space-y-3 text-ink/80">
        <h2 className="font-semibold text-brand text-lg">2. Hosting</h2>
        <p className="leading-relaxed">
          Diese Website wird gehostet von{" "}
          <strong>Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco,
          CA 94104, USA. Vercel ist unter dem EU-US Data Privacy Framework
          zertifiziert.
        </p>
        <p className="leading-relaxed">
          Beim Aufruf dieser Website werden automatisch technische Zugriffsdaten
          durch Vercel erfasst und in Server-Logs gespeichert. Dazu gehören:
          IP-Adresse (anonymisiert), aufgerufene URL, Datum und Uhrzeit des
          Zugriffs, übertragene Datenmenge, HTTP-Statuscode und
          Referrer-URL. Diese Daten werden ausschließlich zur Sicherstellung
          des technischen Betriebs verarbeitet und nach kurzer Zeit automatisch
          gelöscht.
        </p>
        <p className="leading-relaxed">
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
          am sicheren und stabilen Betrieb der Website).
        </p>
        <p className="leading-relaxed">
          Datenschutzerklärung von Vercel:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cta hover:underline"
          >
            vercel.com/legal/privacy-policy
          </a>
        </p>
      </section>

      <section className="space-y-3 text-ink/80">
        <h2 className="font-semibold text-brand text-lg">3. Google Tag Manager</h2>
        <p className="leading-relaxed">
          Diese Website verwendet den <strong>Google Tag Manager</strong> (Google Ireland
          Limited, Gordon House, Barrow Street, Dublin 4, Irland). Der Tag
          Manager selbst verarbeitet keine personenbezogenen Daten und setzt
          keine Cookies. Er dient ausschließlich der Verwaltung anderer
          Skripte und Tags. Sobald über den Tag Manager Dienste aktiviert
          werden, die personenbezogene Daten verarbeiten, werden Sie gesondert
          informiert.
        </p>
        <p className="leading-relaxed">
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </section>

      <section className="space-y-3 text-ink/80">
        <h2 className="font-semibold text-brand text-lg">4. Keine Tracking-Tools oder Analytics</h2>
        <p className="leading-relaxed">
          Auf sterbeportal.de werden derzeit <strong>keine Analyse- oder
          Tracking-Dienste</strong> wie Google Analytics, Matomo oder vergleichbare
          Tools eingesetzt, die das Nutzerverhalten aufzeichnen. Es werden keine
          Nutzungsprofile erstellt.
        </p>
      </section>

      <section className="space-y-3 text-ink/80">
        <h2 className="font-semibold text-brand text-lg">5. Cookies</h2>
        <p className="leading-relaxed">
          Diese Website verwendet ausschließlich technisch notwendige Cookies,
          die für den Betrieb der Website erforderlich sind (z. B.
          Session-Cookies). Diese Cookies enthalten keine personenbezogenen
          Daten und werden nach Beendigung der Browsersitzung gelöscht. Eine
          Einwilligung ist hierfür nicht erforderlich (Art. 6 Abs. 1 lit. f
          DSGVO).
        </p>
      </section>

      <section className="space-y-3 text-ink/80">
        <h2 className="font-semibold text-brand text-lg">6. Externe Links</h2>
        <p className="leading-relaxed">
          Diese Website enthält Links zu externen Websites — insbesondere zu{" "}
          <a
            href="https://eritaj.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cta hover:underline"
          >
            eritaj.de
          </a>
          . Für die Datenschutzpraktiken dieser externen Anbieter sind wir
          nicht verantwortlich. Bitte lesen Sie deren jeweilige
          Datenschutzerklärung.
        </p>
      </section>

      <section className="space-y-3 text-ink/80">
        <h2 className="font-semibold text-brand text-lg">7. Ihre Rechte</h2>
        <p className="leading-relaxed">Sie haben nach der DSGVO folgende Rechte:</p>
        <ul className="space-y-2 leading-relaxed">
          {[
            ["Auskunft (Art. 15 DSGVO)", "Sie können Auskunft über die zu Ihrer Person gespeicherten Daten verlangen."],
            ["Berichtigung (Art. 16 DSGVO)", "Sie können die Korrektur unrichtiger Daten verlangen."],
            ["Löschung (Art. 17 DSGVO)", "Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzliche Aufbewahrungspflicht besteht."],
            ["Einschränkung der Verarbeitung (Art. 18 DSGVO)", "Sie können die Einschränkung der Datenverarbeitung verlangen."],
            ["Widerspruch (Art. 21 DSGVO)", "Sie können der Verarbeitung Ihrer Daten auf Basis berechtigter Interessen widersprechen."],
            ["Beschwerde", "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren."],
          ].map(([titel, text]) => (
            <li key={titel as string} className="flex gap-3">
              <span className="text-cta font-bold shrink-0">▸</span>
              <span><strong>{titel}:</strong> {text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3 text-ink/80">
        <h2 className="font-semibold text-brand text-lg">8. Kontakt für Datenschutzanfragen</h2>
        <p className="leading-relaxed">
          Für Anfragen zum Datenschutz wenden Sie sich bitte an:<br />
          <a href="mailto:info@sterbeportal.de" className="text-cta hover:underline">
            info@sterbeportal.de
          </a>
        </p>
        <p className="text-sm text-ink/60">Stand: Mai 2026</p>
      </section>
    </div>
  );
}
