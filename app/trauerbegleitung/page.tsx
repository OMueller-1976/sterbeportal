import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Trauerbegleitung — Erste Schritte nach einem Todesfall",
  description:
    "Was tun nach dem Tod eines Angehörigen? Erste Schritte, professionelle Trauerbegleitung, Anlaufstellen in Deutschland und wie Sie sich selbst helfen können.",
};

const hotlines = [
  { name: "Telefonseelsorge", tel: "0800 111 0 111", info: "Kostenlos, 24/7, anonym" },
  { name: "Telefonseelsorge (2. Leitung)", tel: "0800 111 0 222", info: "Kostenlos, 24/7, anonym" },
  { name: "Trauertelefon der Caritas", tel: "0800 111 0 222", info: "Regionale Dienste verfügbar" },
  { name: "Hospiz- und Palliativtelefon", tel: "030 2309870", info: "Beratung für Trauernde & Angehörige" },
];

export default function TrauerbegleitungPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">

      <div className="relative h-52 rounded-2xl overflow-hidden">
        <Image
          src="/images/trauerbegleitung-erinnerungen.png"
          alt="Hände halten Erinnerungsfotos — Trauerbegleitung und Abschied"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Ratgeber</p>
        <h1 className="text-3xl font-bold text-brand leading-tight">
          Trauerbegleitung — Erste Schritte nach einem Todesfall
        </h1>
        <p className="text-lg text-ink/70 leading-relaxed">
          Der Tod eines nahestehenden Menschen gehört zu den einschneidendsten
          Erlebnissen im Leben. Trauer ist keine Krankheit — sie ist eine
          zutiefst menschliche Antwort auf Verlust. Und manchmal braucht sie
          Begleitung.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-brand">Die ersten 24 Stunden nach dem Tod</h2>
        <p className="text-ink/80 leading-relaxed">
          Wenn ein Mensch stirbt, stehen Angehörige oft unter Schock. Trotz
          der Erschütterung müssen in den ersten Stunden wichtige Schritte
          unternommen werden.
        </p>
        <p className="text-ink/80 leading-relaxed">
          Stirbt jemand zu Hause, muss zunächst ein Arzt gerufen werden, der den
          Tod feststellt und den Totenschein ausstellt. Ohne dieses Dokument
          kann keine Bestattung erfolgen. Stirbt jemand im Krankenhaus oder
          Pflegeheim, übernimmt das dortige Personal diese Schritte.
        </p>
        <p className="text-ink/80 leading-relaxed">
          Unmittelbar danach können Sie ein Bestattungsunternehmen
          kontaktieren. Es übernimmt die Überführung und berät Sie zu allen
          weiteren Schritten. Sie müssen in diesen Stunden keine endgültigen
          Entscheidungen treffen — nehmen Sie sich die Zeit, die Sie brauchen.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-brand">Wen muss ich benachrichtigen?</h2>
        <p className="text-ink/80 leading-relaxed">
          In den ersten Tagen nach dem Tod gibt es eine Reihe von Stellen,
          die informiert werden müssen. In ungefährer Reihenfolge der Dringlichkeit:
        </p>
        <ul className="space-y-2 text-ink/80">
          {[
            "Engste Familie und Freunde – persönlich oder telefonisch",
            "Bestattungsunternehmen – für Überführung und Organisation",
            "Standesamt – für die Sterbeurkunde (innerhalb von 3 Werktagen)",
            "Arbeitgeber des Verstorbenen",
            "Kranken- und Rentenversicherung",
            "Lebens- oder Unfallversicherung",
            "Bank – für Kontosperrung und Vollmachtsklärung",
            "Vermieter – falls zutreffend",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-cta font-bold shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-ink/80 leading-relaxed">
          Eine ausführliche Auflistung mit Zeitangaben finden Sie in unserer{" "}
          <a href="/checkliste-sterbefall" className="text-cta hover:underline">
            Checkliste Sterbefall
          </a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-brand">Professionelle Trauerbegleitung finden</h2>
        <p className="text-ink/80 leading-relaxed">
          Nicht jeder verarbeitet Trauer auf dieselbe Weise. Manche Menschen
          brauchen Stille, andere Gespräche. Professionelle Trauerbegleitung
          bietet einen geschützten Rahmen, um Gefühle zu benennen, Abschied zu
          verarbeiten und wieder in den Alltag zu finden.
        </p>
        <p className="text-ink/80 leading-relaxed">
          Trauerbegleiter sind keine Therapeuten — sie hören zu, begleiten und
          unterstützen, ohne zu bewerten. Eine psychotherapeutische Behandlung
          ist dann sinnvoll, wenn die Trauer anhält, sich in Depression
          verwandelt oder das alltägliche Leben dauerhaft beeinträchtigt.
        </p>
        <div className="space-y-3">
          {[
            ["Hospizdienste", "In fast jeder größeren Stadt gibt es ehrenamtliche Hospizdienste, die nicht nur Sterbende, sondern auch Trauernde begleiten. Suchen Sie nach dem Deutschen Hospiz- und PalliativVerband (DHPV)."],
            ["Caritas und Diakonie", "Beide Wohlfahrtsverbände bieten Trauergruppen und Einzelbegleitung an — unabhängig von Religion oder Konfession."],
            ["Psychologische Beratungsstellen", "Viele kommunale oder kirchliche Beratungsstellen haben Erfahrung mit Trauernden. Oft kostenlos oder kostengünstig, mit kurzen Wartezeiten."],
            ["Kassenärztliche Psychotherapie", "Bei anhaltender Trauer oder Anzeichen einer Anpassungsstörung ist eine psychotherapeutische Behandlung auf Kassenkosten möglich."],
          ].map(([title, text]) => (
            <div key={title as string} className="bg-white border border-accent/20 rounded-xl p-5">
              <p className="font-semibold text-brand mb-1">{title}</p>
              <p className="text-sm text-ink/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-brand">Trauerbegleitung für Kinder</h2>
        <p className="text-ink/80 leading-relaxed">
          Kinder trauern anders als Erwachsene — und sie sollten nicht von
          Trauer ausgeschlossen werden. Kinder verstehen mehr, als wir oft
          denken. Ehrlichkeit in kindgerechter Sprache ist wichtiger als
          Schutz vor der Wahrheit.
        </p>
        <p className="text-ink/80 leading-relaxed">
          Für Kinder, die einen Elternteil, ein Geschwister oder eine enge
          Bezugsperson verloren haben, gibt es spezialisierte Angebote:
        </p>
        <ul className="space-y-2 text-ink/80">
          <li className="flex gap-3"><span className="text-cta font-bold shrink-0">▸</span>
            <span><strong>Verwaiste Eltern e. V.</strong> – Unterstützung für Eltern nach dem Verlust eines Kindes, mit Gruppen auch für Geschwisterkinder</span>
          </li>
          <li className="flex gap-3"><span className="text-cta font-bold shrink-0">▸</span>
            <span><strong>Trauergruppen für Kinder</strong> – werden von vielen Hospizdiensten und Kinderhospizen angeboten</span>
          </li>
          <li className="flex gap-3"><span className="text-cta font-bold shrink-0">▸</span>
            <span><strong>Schulsozialarbeit</strong> – Lehrerinnen und Schulberatungskräfte können eine erste Anlaufstelle sein</span>
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-brand">Kostenlose Anlaufstellen & Hotlines</h2>
        <p className="text-ink/80 leading-relaxed">
          Sie müssen nicht allein durch die Trauer. Diese Anlaufstellen sind
          kostenlos und anonym erreichbar:
        </p>
        <div className="space-y-3">
          {hotlines.map(({ name, tel, info }) => (
            <div
              key={name}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white border border-accent/20 rounded-xl px-5 py-4 gap-1"
            >
              <div>
                <p className="font-semibold text-brand text-sm">{name}</p>
                <p className="text-xs text-ink/60">{info}</p>
              </div>
              <a
                href={`tel:${tel.replace(/\s/g, "")}`}
                className="text-cta font-semibold text-sm hover:underline"
              >
                {tel}
              </a>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
