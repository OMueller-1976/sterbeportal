import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand text-white/80">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Themen
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/bestattungsvorsorge" className="hover:text-white transition-colors">Bestattungsvorsorge</Link></li>
              <li><Link href="/sterbegeld" className="hover:text-white transition-colors">Sterbegeld</Link></li>
              <li><Link href="/trauerbegleitung" className="hover:text-white transition-colors">Trauerbegleitung</Link></li>
              <li><Link href="/checkliste-sterbefall" className="hover:text-white transition-colors">Checkliste Sterbefall</Link></li>
              <li><Link href="/ratgeber" className="hover:text-white transition-colors">Ratgeber</Link></li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutzerklärung</Link></li>
            </ul>
          </div>

          {/* Über uns */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Über uns
            </h3>
            <p className="text-sm leading-relaxed">
              sterbeportal.de informiert unabhängig über Vorsorge, Bestattung
              und Trauer – für Menschen, die sich und ihre Liebsten auf den
              Ernstfall vorbereiten möchten.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-white/40 text-center border-t border-white/10 pt-4 pb-2">
          Die Inhalte auf dieser Website dienen der allgemeinen Information und ersetzen keine Rechtsberatung.
        </p>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© 2026 sterbeportal.de – Alle Rechte vorbehalten.</p>
          <a
            href="https://eritaj.de"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors"
          >
            Featured by ERITAJ
          </a>
        </div>
      </div>
    </footer>
  );
}
