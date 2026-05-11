import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Checkliste Sterbefall — Was ist nach dem Tod zu erledigen?",
  description:
    "Übersichtliche Checkliste nach einem Todesfall: Von der Totenschein-Ausstellung bis zur Nachlassabwicklung — mit Zeitangaben und konkreten Hinweisen.",
};

const phasen = [
  {
    zeitraum: "Sofort — innerhalb von 1–3 Tagen",
    farbe: "border-l-brand",
    aufgaben: [
      {
        titel: "Arzt verständigen & Totenschein ausstellen lassen",
        text: "Ohne ärztlich festgestellten Tod kann keine Bestattung stattfinden. Stirbt jemand zu Hause, rufen Sie sofort einen Arzt. Im Krankenhaus oder Pflegeheim übernimmt das Pflegepersonal diesen Schritt.",
      },
      {
        titel: "Bestattungsunternehmen beauftragen",
        text: "Ein Bestatter kümmert sich um Überführung, Aufbewahrung und Organisation. Sie können das Bestattungsunternehmen auch erst nach einigen Stunden kontaktieren — Sie müssen keine Entscheidungen im Schock treffen.",
      },
      {
        titel: "Engste Familie & Freunde informieren",
        text: "Rufen Sie diejenigen an, die dem Verstorbenen am nächsten standen. Alles weitere kann Schritt für Schritt erfolgen.",
      },
      {
        titel: "Sterbeurkunde beim Standesamt beantragen",
        text: "Die Sterbeurkunde muss innerhalb von drei Werktagen beim zuständigen Standesamt beantragt werden. Mitzubringen: Totenschein, Personalausweis des Verstorbenen, Geburtsurkunde, ggf. Heiratsurkunde.",
      },
      {
        titel: "Testament sichern",
        text: "Falls ein Testament vorhanden ist, muss es umgehend beim zuständigen Nachlassgericht abgeliefert werden — das ist gesetzlich vorgeschrieben.",
      },
    ],
  },
  {
    zeitraum: "Erste Woche",
    farbe: "border-l-accent",
    aufgaben: [
      {
        titel: "Bestattung organisieren & beauftragen",
        text: "Legen Sie gemeinsam mit dem Bestatter Art, Ort und Ablauf der Bestattung fest. Fordern Sie ein schriftliches Angebot an.",
      },
      {
        titel: "Arbeitgeber des Verstorbenen benachrichtigen",
        text: "Informieren Sie so früh wie möglich den Arbeitgeber. Gehaltszahlungen, Urlaubsansprüche und Arbeitsmittel müssen geregelt werden.",
      },
      {
        titel: "Krankenversicherung informieren",
        text: "Die Krankenkasse muss über den Tod informiert werden. Die Mitgliedschaft endet mit dem Todestag. Mitversicherte Angehörige müssen sich neu versichern.",
      },
      {
        titel: "Rentenversicherung & Deutsche Rentenversicherung",
        text: "Laufende Rentenzahlungen müssen gestoppt werden. Stattdessen kann ein Antrag auf Witwen-/Witwerrente oder Waisenrente gestellt werden.",
      },
      {
        titel: "Pflegeversicherung kündigen",
        text: "Falls der Verstorbene Leistungen der Pflegeversicherung bezogen hat, muss diese informiert werden. Überzahlungen sind zurückzuerstatten.",
      },
    ],
  },
  {
    zeitraum: "Erste 6 Wochen",
    farbe: "border-l-cta",
    aufgaben: [
      {
        titel: "Nachlassgericht: Testament eröffnen lassen",
        text: "Das Nachlassgericht eröffnet das Testament offiziell und informiert die Erben. Als Erbe erhalten Sie eine beglaubigte Abschrift.",
      },
      {
        titel: "Erbschein beantragen (falls erforderlich)",
        text: "Wenn kein Testament existiert oder es für bestimmte Behörden nicht ausreicht, brauchen Sie einen Erbschein. Dieser wird beim Nachlassgericht beantragt.",
      },
      {
        titel: "Banken & Kreditinstitute informieren",
        text: "Mit Sterbeurkunde und Erbnachweis (Testament oder Erbschein) können Sie Konten, Depots und Schließfächer abklären. Laufende Daueraufträge und Lastschriften prüfen.",
      },
      {
        titel: "Versicherungen kündigen oder ummelden",
        text: "Haftpflicht, KFZ, Hausrat, Lebensversicherung — prüfen Sie alle Verträge. Manche enden automatisch, andere müssen aktiv gekündigt werden.",
      },
      {
        titel: "Mietvertrag kündigen oder übernehmen",
        text: "Erben treten in laufende Mietverträge ein. Die Kündigung kann mit einer Frist von einem Monat zum Ende des übernächsten Kalendermonats erfolgen.",
      },
      {
        titel: "Abonnements & Mitgliedschaften kündigen",
        text: "Zeitungen, Vereine, Streaming-Dienste, Mobilfunkvertrag — alles mit Sterbeurkunde kündigen. Auch Bibliotheksausweise und Kundenkarten.",
      },
      {
        titel: "Digitalen Nachlass regeln",
        text: "E-Mail-Konten, Social-Media-Profile, Cloud-Dienste: Bei den meisten Anbietern können Angehörige mit Sterbeurkunde die Schließung oder Memorialisierung beantragen.",
      },
    ],
  },
  {
    zeitraum: "3 bis 6 Monate",
    farbe: "border-l-accent",
    aufgaben: [
      {
        titel: "Erbschaftsteuererklärung prüfen",
        text: "Das Finanzamt wird in der Regel vom Nachlassgericht informiert. Überschreitet der Nachlass die Freibeträge (Ehegatte: 500.000 €; Kind: 400.000 €), muss Erbschaftsteuer gezahlt werden.",
      },
      {
        titel: "Einkommensteuererklärung des Verstorbenen",
        text: "Erben müssen die Steuererklärung des Verstorbenen für das Todesjahr abgeben. Steuerberater können hierbei helfen.",
      },
      {
        titel: "Laufende Verträge kündigen",
        text: "Prüfen Sie alle Verträge mit Laufzeiten: Fitness-Studio, Zeitungsabonnements, Softwarelizenzen, Telefonverträge. Kündigen Sie fristgerecht.",
      },
      {
        titel: "Fahrzeuge ummelden oder abmelden",
        text: "Fahrzeuge gehen in den Nachlass über. Sie müssen umgemeldet oder abgemeldet werden. Die KFZ-Versicherung separat kündigen oder anpassen.",
      },
    ],
  },
];

export default function ChecklisteSterbefall() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Checkliste</p>
        <h1 className="text-3xl font-bold text-brand leading-tight">
          Checkliste Sterbefall — Was ist nach dem Tod zu erledigen?
        </h1>
        <p className="text-lg text-ink/70 leading-relaxed">
          Ein Todesfall bringt viele Aufgaben mit sich — oft in einem Moment,
          in dem Trauer und Erschöpfung überwiegen. Diese Checkliste hilft
          Ihnen, strukturiert vorzugehen und nichts Wichtiges zu vergessen.
        </p>
        <p className="text-sm text-ink/60 bg-white border border-accent/20 rounded-xl px-4 py-3">
          <strong>Hinweis:</strong> Diese Checkliste ist ein allgemeiner Leitfaden. Im Einzelfall
          können abweichende Fristen oder Zuständigkeiten gelten. Bei
          rechtlichen Fragen wenden Sie sich an einen Anwalt oder das
          zuständige Nachlassgericht.
        </p>
      </header>

      <div className="space-y-10">
        {phasen.map((phase) => (
          <section key={phase.zeitraum}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-brand" />
              <h2 className="text-lg font-semibold text-brand">{phase.zeitraum}</h2>
            </div>
            <div className="space-y-3">
              {phase.aufgaben.map((aufgabe) => (
                <div
                  key={aufgabe.titel}
                  className={`bg-white border border-accent/20 border-l-4 ${phase.farbe} rounded-xl p-5`}
                >
                  <div className="flex gap-3 items-start">
                    <div className="mt-0.5 shrink-0 w-5 h-5 rounded border-2 border-accent/40 flex items-center justify-center">
                      <span className="text-xs text-accent/60">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-brand text-sm mb-1">{aufgabe.titel}</p>
                      <p className="text-sm text-ink/70 leading-relaxed">{aufgabe.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <CTABanner />
    </div>
  );
}
