export default function CTABanner() {
  return (
    <section className="bg-accent/20 border border-accent/30 rounded-2xl px-8 py-10 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
        Digitale Vorsorge
      </p>
      <h2 className="text-2xl font-bold text-brand mb-3">
        Vorsorgevollmacht &amp; Testament digital regeln
      </h2>
      <p className="text-ink/70 mb-6 max-w-xl mx-auto">
        Sichern Sie Ihren Willen für den Ernstfall – einfach, unkompliziert und
        von zu Hause aus.
      </p>
      <a
        href="https://eritaj.de"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-cta text-white font-semibold px-7 py-3 rounded-lg hover:opacity-90 transition-opacity"
      >
        Jetzt bei ERITAJ starten →
      </a>
    </section>
  );
}
