export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string; // HTML string, rendered via dangerouslySetInnerHTML
  date: string;
  category: string;
  image?: string;
}

export const articles: Article[] = [
  {
    slug: "bestattungskosten-deutschland-2026",
    title: "Bestattungskosten in Deutschland 2026 — Was kostet eine Beerdigung?",
    description:
      "Erdbestattung, Feuerbestattung, Seebestattung oder Baumbestattung — wir zeigen realistische Kosten, erklären die Unterschiede und geben Spartipps.",
    date: "2026-04-01",
    category: "Kosten & Finanzen",
    image: "/images/bestattungskosten-ratgeber.png",
    content: `
<p>Eine Bestattung gehört zu den größten ungeplanten Ausgaben, die auf Angehörige zukommen können. Wer die Kosten kennt, kann rechtzeitig vorsorgen — und seine Familie schützen. Dieser Artikel gibt einen realistischen Überblick über die Bestattungskosten in Deutschland im Jahr 2026.</p>

<h2>Überblick: Was kostet eine Bestattung?</h2>
<p>Die Gesamtkosten einer Bestattung setzen sich aus mehreren Bestandteilen zusammen: Bestatterleistungen, Friedhofsgebühren, Grabmal, Trauerfeier und behördliche Gebühren. Je nach Bestattungsart und Region können die Gesamtkosten erheblich variieren.</p>
<div class="info-box"><strong>Durchschnitt Deutschland 2026:</strong> Eine Erdbestattung kostet zwischen 6.000 und 12.000 Euro, eine Feuerbestattung zwischen 3.000 und 8.000 Euro. In Großstädten wie München oder Hamburg liegen die Kosten oft deutlich über dem Bundesdurchschnitt.</div>

<h2>Erdbestattung — traditionell und aufwendig</h2>
<p>Die Erdbestattung ist nach wie vor die häufigste Bestattungsform in Deutschland. Der Sarg wird in einem Erdgrab auf einem Friedhof beigesetzt. Die Nutzungsrechte am Grab kosten je nach Gemeinde und Lage zwischen 500 und 5.000 Euro für 20 bis 30 Jahre.</p>
<p>Hinzu kommen: Sarg (500–5.000 €), Bestatterleistungen (1.500–4.000 €), Trauerfeier, Blumen und Grabstein (500–5.000 €). Die Grabpflege verursacht laufende Kosten von 200 bis 800 Euro pro Jahr.</p>

<h2>Feuerbestattung — günstig und flexibel</h2>
<p>Die Feuerbestattung (Kremierung) ist in Deutschland die günstigere Alternative. Die Kremierung selbst kostet zwischen 400 und 800 Euro. Die Urne kann auf einem Friedhof, in einem Kolumbarium, auf See oder in der Natur beigesetzt werden.</p>
<ul>
  <li><strong>Urnengrab auf Friedhof:</strong> 2.000–5.000 € Gesamtkosten</li>
  <li><strong>Kolumbarium (Urnenwand):</strong> 2.500–6.000 €, keine Grabpflegepflicht</li>
  <li><strong>Seebestattung:</strong> 1.500–4.000 €, naturverbunden und wartungsfrei</li>
  <li><strong>Baumbestattung:</strong> 1.500–3.500 €, z. B. FriedWald oder RuheForst</li>
</ul>

<h2>Seebestattung — Würde auf dem Wasser</h2>
<p>Bei einer Seebestattung wird die Asche des Verstorbenen in einer biologisch abbaubaren Urne auf See versenkt. Angehörige können auf dem Schiff dabei sein. Besonders beliebt in Norddeutschland. Die Kosten liegen meist zwischen 1.500 und 4.000 Euro — ohne Grabanlagepflege.</p>

<h2>Baumbestattung — Natur als letzter Ruheplatz</h2>
<p>Immer mehr Menschen wählen eine Baumbestattung: Die Asche wird am Fuß eines Baumes im Wald beigesetzt. Anbieter wie FriedWald oder RuheForst betreiben zertifizierte Bestattungswälder in ganz Deutschland. Kosten: ca. 1.500 bis 3.500 Euro einmalig, keine Folgekosten.</p>

<h2>Anonyme Bestattung — günstig, aber ohne Trauerort</h2>
<p>Eine anonyme Bestattung ist die kostengünstigste Option: Die Urne wird ohne Namensschild auf einer Gemeinschaftsfläche beigesetzt. Kosten: 800 bis 2.500 Euro. Der Nachteil: Angehörige haben keinen persönlichen Ort zum Trauern.</p>

<h2>Spartipps: So können Sie Kosten senken</h2>
<ul>
  <li><strong>Angebote vergleichen:</strong> Bestatterpreise können für dieselbe Leistung um 50 % variieren. Holen Sie mindestens drei Angebote ein.</li>
  <li><strong>Bestattungsvorsorge:</strong> Wer zu Lebzeiten einen Vorsorgevertrag abschließt, sichert heutige Preise für die Zukunft.</li>
  <li><strong>Einfacherer Sarg:</strong> Ein einfacher Holzsarg erfüllt alle gesetzlichen Anforderungen — der Preisunterschied zu aufwendigen Modellen kann 2.000 Euro betragen.</li>
  <li><strong>Friedhofswahl:</strong> Kommunale Friedhöfe sind oft günstiger als kirchliche. Gebühren für Grabstellen variieren stark.</li>
  <li><strong>Bestattungshilfe prüfen:</strong> Wer Sozialhilfe bezieht oder dessen Nachlass nicht ausreicht, kann beim Sozialamt Bestattungshilfe nach § 74 SGB XII beantragen.</li>
</ul>

<h2>Fazit</h2>
<p>Eine würdige Bestattung muss nicht teuer sein — aber sie kostet. Wer rechtzeitig vorsorgt, schützt seine Familie vor einer unerwarteten finanziellen Belastung in einer ohnehin schweren Zeit. Ein Bestattungsvorsorgevertrag oder eine zweckgebundene Rücklage sind die sichersten Wege.</p>
`,
  },
  {
    slug: "vorsorgevollmacht-was-ist-das",
    title: "Vorsorgevollmacht einfach erklärt — Wer entscheidet, wenn ich es nicht kann?",
    description:
      "Was ist eine Vorsorgevollmacht, wann gilt sie und was regelt sie? Wir erklären den Unterschied zur Betreuungsverfügung und warum sie jeder haben sollte.",
    date: "2026-04-05",
    category: "Vorsorge & Recht",
    image: "/images/vorsorgevollmacht-ratgeber.png",
    content: `
<p>Ein Unfall, eine schwere Krankheit, Demenz — es gibt viele Situationen, in denen wir plötzlich nicht mehr in der Lage sind, eigene Entscheidungen zu treffen. Ohne eine Vorsorgevollmacht entscheidet dann das Gericht, wer diese Aufgabe übernimmt. Das muss nicht Ihrer Familie sein.</p>

<h2>Was ist eine Vorsorgevollmacht?</h2>
<p>Eine Vorsorgevollmacht ist ein rechtliches Dokument, mit dem Sie einer Person Ihres Vertrauens die Befugnis erteilen, in Ihrem Namen zu handeln — für den Fall, dass Sie selbst dazu nicht mehr in der Lage sind. Die bevollmächtigte Person kann dann Entscheidungen in Ihrem Sinne treffen, ohne dass ein Gericht eingeschaltet werden muss.</p>
<div class="info-box"><strong>Wichtig:</strong> Eine Vorsorgevollmacht gilt nur für lebende Personen. Sie verliert ihre Wirkung mit dem Tod. Für die Zeit nach dem Tod brauchen Sie ein Testament.</div>

<h2>Was kann die Vorsorgevollmacht regeln?</h2>
<p>Sie können den Umfang der Vollmacht selbst bestimmen. Typischerweise umfasst sie:</p>
<ul>
  <li><strong>Gesundheitssorge:</strong> Einwilligung in oder Ablehnung von medizinischen Behandlungen, Operationen und Medikamenten</li>
  <li><strong>Aufenthaltsbestimmung:</strong> Entscheidung über Krankenhausaufenthalte, Pflegeheimunterbringung</li>
  <li><strong>Vermögenssorge:</strong> Verwaltung von Bankkonten, Immobilien, Verträgen</li>
  <li><strong>Behördenangelegenheiten:</strong> Kommunikation mit Ämtern, Versicherungen, Behörden</li>
  <li><strong>Post und Telekommunikation:</strong> Öffnen von Post, Verwaltung digitaler Accounts</li>
</ul>

<h2>Wann gilt die Vorsorgevollmacht?</h2>
<p>Sie können festlegen, ob die Vollmacht sofort gilt (auch wenn Sie noch geschäftsfähig sind) oder erst dann wirksam wird, wenn Sie nachweislich nicht mehr entscheidungsfähig sind. Die zweite Variante bietet mehr Sicherheit, erfordert aber oft ein ärztliches Attest zur Aktivierung.</p>
<p>Wichtig: Die Vollmacht gilt nicht automatisch für alle Bereiche. Was nicht ausdrücklich geregelt ist, fällt nicht unter die Vollmacht. Formulieren Sie daher möglichst umfassend und präzise.</p>

<h2>Unterschied zur Betreuungsverfügung</h2>
<p>Eine <strong>Betreuungsverfügung</strong> ist kein Ersatz für die Vorsorgevollmacht. Sie empfiehlt dem Gericht lediglich eine bestimmte Person als Betreuer — das Gericht muss sich aber nicht daran halten. Ein rechtlich bestellter Betreuer benötigt zudem für viele Entscheidungen die Genehmigung des Betreuungsgerichts. Das kostet Zeit und Geld.</p>
<p>Die <strong>Vorsorgevollmacht</strong> hingegen umgeht das Gericht vollständig: Ihre bevollmächtigte Person kann sofort handeln, ohne auf gerichtliche Genehmigungen zu warten.</p>

<h2>Formvorschriften: Was ist zu beachten?</h2>
<p>Eine Vorsorgevollmacht muss schriftlich verfasst und eigenhändig unterschrieben werden. Sie benötigt keine notarielle Beglaubigung — es empfiehlt sich aber, die Echtheit der Unterschrift notariell bestätigen zu lassen, besonders bei Immobilienvermögen. Beim Bundesnotariar können Vollmachten im zentralen Vorsorgeregister hinterlegt werden (Gebühr: 15,50 Euro).</p>

<h2>Wen sollte ich bevollmächtigen?</h2>
<p>Wählen Sie eine Person, der Sie uneingeschränkt vertrauen und die in der Lage ist, verantwortungsvolle Entscheidungen zu treffen. Das kann ein Familienmitglied, ein enger Freund oder ein Anwalt sein. Benennen Sie auch eine Ersatzperson für den Fall, dass die erste Person ausfällt.</p>

<h2>Fazit: Jetzt handeln</h2>
<p>Eine Vorsorgevollmacht ist kein Dokument für alte Menschen — sie ist für jeden relevant, ab dem 18. Lebensjahr. Im Ernstfall schützt sie Ihre Familie vor monatelangen Gerichtsverfahren und stellt sicher, dass Entscheidungen in Ihrem Sinne getroffen werden.</p>
`,
  },
  {
    slug: "digitaler-nachlass-was-passiert",
    title: "Digitaler Nachlass — Was passiert mit meinen Online-Konten nach dem Tod?",
    description:
      "E-Mail, Social Media, Online-Banking, Streaming-Dienste: Was passiert mit digitalen Konten nach dem Tod? Und was können Erben tun?",
    date: "2026-04-10",
    category: "Nachlass & Erbrecht",
    image: "/images/digitaler-nachlass-ratgeber.png",
    content: `
<p>Wir hinterlassen heute nicht nur materielle Gegenstände, sondern auch ein umfangreiches digitales Erbe: E-Mail-Konten, Social-Media-Profile, Cloud-Speicher, Online-Banking, Abonnements. Viele Menschen denken kaum daran — aber der digitale Nachlass kann für Angehörige zu einem echten Problem werden.</p>

<h2>Was zählt zum digitalen Nachlass?</h2>
<p>Zum digitalen Nachlass gehören alle Online-Konten und digitalen Vermögenswerte einer verstorbenen Person:</p>
<ul>
  <li>E-Mail-Konten (Gmail, GMX, Outlook etc.)</li>
  <li>Social-Media-Profile (Facebook, Instagram, LinkedIn, X)</li>
  <li>Online-Banking und PayPal</li>
  <li>Cloud-Dienste (iCloud, Google Drive, Dropbox)</li>
  <li>Streaming-Abonnements (Netflix, Spotify, Amazon Prime)</li>
  <li>Online-Shops und Marktplätze (Amazon, eBay)</li>
  <li>Kryptowährungen und digitale Investments</li>
  <li>Domain-Namen und Websites</li>
</ul>

<h2>Erben Angehörige digitale Konten?</h2>
<p>Grundsätzlich ja — das Erbe umfasst auch digitale Vermögenswerte. Der Bundesgerichtshof entschied 2018 (Az. III ZR 183/17), dass E-Mail-Konten und digitale Profile vererbbar sind. Das bedeutet: Erben haben Anspruch auf Zugang zu diesen Konten, sofern sie den Anbietern gegenüber ihren Erbenstatus nachweisen können.</p>
<p>In der Praxis ist das jedoch schwierig, da viele Anbieter eigene Richtlinien haben und der Zugang häufig an eine Zwei-Faktor-Authentifizierung gebunden ist.</p>

<h2>Plattform für Plattform — was Anbieter ermöglichen</h2>
<h3>Facebook & Instagram (Meta)</h3>
<p>Angehörige können das Profil in den „Gedenkzustand" versetzen lassen. Ein zuvor benannter „Nachlasskontakt" erhält eingeschränkte Verwaltungsrechte. Eine vollständige Löschung ist auf Antrag mit Sterbeurkunde möglich.</p>

<h3>Google (Gmail, YouTube, Drive)</h3>
<p>Google bietet den „Inaktivitätsmanager", mit dem Sie zu Lebzeiten festlegen können, was mit Ihrem Konto nach einer bestimmten Inaktivitätszeit passiert. Ohne Vorkonfiguration müssen Angehörige ein Formular ausfüllen und Belege einreichen.</p>

<h3>Apple (iCloud)</h3>
<p>Apple ermöglicht seit iOS 15.2 die Benennung eines „Nachlassbeauftragten", der nach dem Tod Zugang erhält. Ohne vorherige Benennung ist der Zugang extrem schwierig.</p>

<h3>Online-Banking</h3>
<p>Bankkonten gehen automatisch in den Nachlass über. Mit Sterbeurkunde und Erbnachweis (Testament oder Erbschein) können Erben auf Konten zugreifen. Wichtig: Laufende Abbuchungen prüfen und stoppen.</p>

<h3>Kryptowährungen</h3>
<p>Ohne privaten Schlüssel oder Seed-Phrase ist Kryptovermögen für immer verloren. Keine Behörde und kein Anbieter kann diesen Verlust rückgängig machen. Die sichere Übergabe des Schlüssels ist entscheidend.</p>

<h2>So regeln Sie Ihren digitalen Nachlass</h2>
<ul>
  <li><strong>Digitales Inventar erstellen:</strong> Listen Sie alle wichtigen Konten mit Login-Daten auf und bewahren Sie die Liste sicher auf (z. B. in einem verschlüsselten Passwortmanager).</li>
  <li><strong>Nachlassbeauftragten benennen:</strong> Bei Google, Apple und Facebook können Sie zu Lebzeiten eine Vertrauensperson benennen.</li>
  <li><strong>Vorsorgevollmacht ergänzen:</strong> Nehmen Sie digitale Konten ausdrücklich in die Vorsorgevollmacht auf.</li>
  <li><strong>Testament ergänzen:</strong> Halten Sie im Testament fest, was mit digitalen Konten und Kryptovermögen geschehen soll.</li>
  <li><strong>Abonnements überprüfen:</strong> Listen Sie alle laufenden Abos auf, damit Erben sie zeitnah kündigen können.</li>
</ul>

<h2>Fazit</h2>
<p>Der digitale Nachlass ist ein oft unterschätztes Thema. Wer heute ein digitales Inventar anlegt und Vorsorgemaßnahmen trifft, erspart seinen Angehörigen viel Aufwand — und verhindert, dass digitale Erinnerungen und Werte unwiederbringlich verloren gehen.</p>
`,
  },
  {
    slug: "hospiz-palliativversorgung",
    title: "Hospiz & Palliativversorgung in Deutschland — Ein Überblick",
    description:
      "Was ist der Unterschied zwischen Hospiz und Palliativversorgung? Wer hat Anspruch darauf, wie kommt man an einen Platz und was kostet es?",
    date: "2026-04-15",
    category: "Pflege & Begleitung",
    image: "/images/hospiz-palliativ-ratgeber.png",
    content: `
<p>Wenn eine Heilung nicht mehr möglich ist, rückt die Lebensqualität in den Mittelpunkt. Hospiz- und Palliativversorgung bieten schwerkranken Menschen und ihren Familien professionelle Begleitung — medizinisch, pflegerisch und menschlich. Viele wissen nicht, dass diese Leistungen in Deutschland weitgehend von der Krankenversicherung getragen werden.</p>

<h2>Was ist Palliativversorgung?</h2>
<p>Palliativversorgung (von lateinisch „pallium" — Mantel, Hülle) zielt darauf ab, schwerkranke Menschen so zu begleiten, dass Schmerzen und belastende Symptome gelindert werden — ohne auf Heilung abzuzielen. Sie kann ambulant (zu Hause), stationär (im Krankenhaus oder Pflegeheim) oder in einem Hospiz stattfinden.</p>
<p>In Deutschland haben Versicherte mit einer nicht heilbaren, weit fortgeschrittenen Erkrankung Anspruch auf <strong>Spezialisierte Ambulante Palliativversorgung (SAPV)</strong> — eine intensive Betreuung zu Hause durch speziell ausgebildete Teams (§ 37b SGB V).</p>

<h2>Was ist ein Hospiz?</h2>
<p>Ein stationäres Hospiz ist ein Ort, an dem Menschen ihre letzte Lebensphase in würdevoller Atmosphäre verbringen — mit intensiver pflegerischer, medizinischer und psychosozialer Begleitung. Im Gegensatz zum Krankenhaus steht hier nicht die Behandlung, sondern die Lebensqualität im Vordergrund.</p>
<div class="info-box"><strong>Unterschied auf einen Blick:</strong> Palliativstationen behandeln Symptome und entlassen Patienten danach. Hospize begleiten Menschen bis zum Tod. Beide Angebote ergänzen sich.</div>

<h2>Ambulante Hospizarbeit</h2>
<p>Ambulante Hospizdienste kommen zu Menschen nach Hause oder in Pflegeheime. Ehrenamtliche Helferinnen und Helfer — oft selbst Trauernde — begleiten Sterbende und ihre Familien, hören zu und entlasten. Diese Begleitung ist kostenlos und wird von Krankenkassen gefördert (§ 39a SGB V).</p>
<p>In Deutschland gibt es über 1.500 ambulante Hospizdienste. Über den <strong>Deutschen Hospiz- und PalliativVerband (DHPV)</strong> finden Sie Angebote in Ihrer Region.</p>

<h2>Wer hat Anspruch auf einen Hospizplatz?</h2>
<p>Ein stationärer Hospizplatz steht Menschen zu, deren Lebenserwartung begrenzt ist und die keiner Krankenhausbehandlung mehr bedürfen. Die Aufnahme erfolgt auf ärztliche Empfehlung. Es gibt keine Altersbeschränkung — Kinderhospize begleiten auch Kinder und Jugendliche.</p>
<p>Die Wartezeiten variieren je nach Region und Jahreszeit erheblich. Melden Sie sich frühzeitig an — ein Platz ist nicht garantiert.</p>

<h2>Was kostet Hospiz- und Palliativversorgung?</h2>
<p>Die gesetzliche Krankenversicherung übernimmt mindestens 95 % der Kosten für stationäre Hospize (§ 39a SGB V). Der verbleibende Anteil wird von den Hospizen selbst über Spenden und Zuschüsse aufgebracht. Für Patienten entstehen in der Regel keine nennenswerten Eigenkosten.</p>
<p>Die SAPV ist für GKV-Versicherte vollständig kostenfrei. Privat Versicherte sollten die Bedingungen ihrer Police prüfen.</p>

<h2>Wie kommt man an einen Hospizplatz?</h2>
<ol>
  <li>Gespräch mit dem behandelnden Arzt über die Eignung für Hospizversorgung</li>
  <li>Kontaktaufnahme mit dem gewünschten Hospiz direkt oder über den Sozialdienst des Krankenhauses</li>
  <li>Formloser Aufnahmeantrag beim Hospiz</li>
  <li>Hospiz prüft freie Kapazitäten und Eignung</li>
  <li>Bei Aufnahme: Ärztliche Einweisung und Kostenzusage der Krankenkasse</li>
</ol>

<h2>Anlaufstellen</h2>
<ul>
  <li><strong>Deutscher Hospiz- und PalliativVerband:</strong> dhpv.de</li>
  <li><strong>Deutsche PalliativGesellschaft:</strong> dgpalliativmedizin.de</li>
  <li><strong>Kinderhospizdienst:</strong> kinderhospiz.de</li>
  <li><strong>Hospizhilfe-Telefon:</strong> 030 2309870</li>
</ul>

<h2>Fazit</h2>
<p>Hospiz- und Palliativversorgung ist kein Aufgeben — es ist die Entscheidung für ein würdevolles Ende. Wer diese Angebote früh kennt, kann sie rechtzeitig einplanen. Sprechen Sie mit Ihrem Arzt oder einem Hospizdienst in Ihrer Nähe.</p>
`,
  },
  {
    slug: "sterbefall-melden-behoerden",
    title: "Sterbefall melden — Welche Behörden müssen informiert werden?",
    description:
      "Nach einem Todesfall müssen viele Behörden informiert werden. Wir erklären Fristen, Zuständigkeiten und was Sie bei Standesamt, Finanzamt und Rentenversicherung beachten müssen.",
    date: "2026-04-20",
    category: "Bürokratie & Fristen",
    image: "/images/sterbefall-behoerden-ratgeber.png",
    content: `
<p>Nach dem Tod eines Angehörigen beginnt neben der Trauer eine Reihe bürokratischer Aufgaben. Verschiedene Behörden und Institutionen müssen innerhalb bestimmter Fristen informiert werden. Wer den Überblick behält, vermeidet Probleme und unnötige Kosten.</p>

<h2>Schritt 1: Totenschein — die Grundlage für alles</h2>
<p>Der erste Schritt ist immer die ärztliche Feststellung des Todes und die Ausstellung des Totenscheins. Ohne dieses Dokument kann weder die Sterbeurkunde beantragt noch die Bestattung organisiert werden. Der Arzt, der den Tod festgestellt hat, stellt den Totenschein aus — bei einem Todesfall in der Wohnung ist das in der Regel der Hausarzt oder der ärztliche Bereitschaftsdienst.</p>

<h2>Schritt 2: Standesamt — Sterbeurkunde beantragen</h2>
<p>Die Sterbeurkunde muss <strong>innerhalb von drei Werktagen</strong> beim zuständigen Standesamt (Ort des Todes) beantragt werden. Mitbringen:</p>
<ul>
  <li>Totenschein (Original)</li>
  <li>Personalausweis oder Reisepass des Verstorbenen</li>
  <li>Geburtsurkunde des Verstorbenen</li>
  <li>Heiratsurkunde oder Scheidungsurteil (falls zutreffend)</li>
  <li>Personalausweis der anzeigepflichtigen Person</li>
</ul>
<p>Lassen Sie mehrere beglaubigte Abschriften der Sterbeurkunde ausstellen — Sie werden sie für Banken, Versicherungen und Behörden benötigen. Kosten: ca. 10–15 Euro pro Abschrift.</p>

<h2>Schritt 3: Rentenversicherung</h2>
<p>Bezieht der Verstorbene eine gesetzliche Rente, muss die <strong>Deutsche Rentenversicherung</strong> sofort informiert werden. Überzahlungen müssen zurückerstattet werden. Gleichzeitig können Angehörige prüfen, ob Anspruch auf <strong>Witwen-/Witwerrente oder Waisenrente</strong> besteht.</p>
<div class="info-box"><strong>Frist:</strong> Rentenüberzahlungen nach dem Todestag müssen zurückgezahlt werden. Informieren Sie die Rentenkasse schnellstmöglich, um unnötige Rückforderungen zu vermeiden.</div>

<h2>Schritt 4: Krankenversicherung</h2>
<p>Die Mitgliedschaft in der gesetzlichen Krankenversicherung endet automatisch mit dem Tod. Informieren Sie die Krankenkasse mit der Sterbeurkunde. Wichtig: Familienversicherte Angehörige müssen sich innerhalb von drei Monaten neu versichern.</p>
<p>Falls der Verstorbene Leistungen der <strong>Pflegeversicherung</strong> (Pflegegrad 1–5) bezogen hat, muss auch die Pflegekasse informiert werden. Geldleistungen (Pflegegeld) enden mit dem Todestag.</p>

<h2>Schritt 5: Finanzamt</h2>
<p>Das Finanzamt wird in der Regel automatisch durch das Nachlassgericht informiert. Erben sind verpflichtet, eine <strong>Erbschaftsteuererklärung</strong> abzugeben, wenn der Nachlass die persönlichen Freibeträge übersteigt:</p>
<ul>
  <li>Ehegatte/eingetragener Lebenspartner: 500.000 €</li>
  <li>Kinder und Stiefkinder: 400.000 €</li>
  <li>Enkel: 200.000 €</li>
  <li>Geschwister, Nichten, Neffen: 20.000 €</li>
</ul>
<p>Außerdem muss die <strong>Einkommensteuererklärung</strong> des Verstorbenen für das Todesjahr durch die Erben abgegeben werden.</p>

<h2>Schritt 6: Arbeitgeber</h2>
<p>Der Arbeitgeber des Verstorbenen muss so früh wie möglich informiert werden. Klären Sie: ausstehende Gehaltszahlungen, Urlaubsansprüche, betriebliche Altersvorsorge und die Rückgabe von Arbeitsmitteln (Laptop, Dienstfahrzeug etc.).</p>

<h2>Schritt 7: Nachlassgericht</h2>
<p>Wenn ein Testament vorhanden ist, muss dieses <strong>unverzüglich</strong> beim zuständigen Nachlassgericht (Amtsgericht am letzten Wohnsitz des Verstorbenen) abgeliefert werden. Das Gericht eröffnet das Testament und informiert alle Erben. Liegt kein Testament vor, gilt die gesetzliche Erbfolge.</p>

<h2>Weitere Institutionen</h2>
<ul>
  <li><strong>Banken:</strong> Konten sperren lassen, Vollmachten klären, Daueraufträge stoppen</li>
  <li><strong>Versicherungen:</strong> Lebens-, Unfall-, Haftpflichtversicherung kündigen oder ummelden</li>
  <li><strong>Vermieter:</strong> Mietvertrag kündigen oder ummelden</li>
  <li><strong>KFZ-Zulassungsstelle:</strong> Fahrzeuge ummelden oder abmelden</li>
  <li><strong>Ausländerbehörde:</strong> Bei nicht-deutschen Staatsangehörigen zuständig</li>
</ul>

<h2>Fazit</h2>
<p>Die bürokratischen Aufgaben nach einem Todesfall wirken überwältigend. Mit unserer <a href="/checkliste-sterbefall">vollständigen Checkliste</a> behalten Sie den Überblick und verpassen keine wichtige Frist.</p>
`,
  },
  {
    slug: "patientenverfuegung-richtig-erstellen",
    title: "Patientenverfügung richtig erstellen — So legst du deinen letzten Willen fest",
    description:
      "Was regelt eine Patientenverfügung, welche Formvorschriften gelten und wie setzen Sie sie rechtssicher auf? Wir erklären alles Wichtige.",
    date: "2026-04-25",
    category: "Vorsorge & Recht",
    image: "/images/patientenverfuegung-ratgeber.png",
    content: `
<p>Stellen Sie sich vor, Sie liegen im Krankenhaus und können nicht mehr sprechen oder entscheiden. Wer bestimmt dann, ob Sie beatmet werden, eine Operation bekommen oder lebenserhaltende Maßnahmen erhalten? Ohne eine Patientenverfügung entscheiden Ärzte und — im Streitfall — Gerichte. Mit einer Patientenverfügung entscheiden Sie.</p>

<h2>Was ist eine Patientenverfügung?</h2>
<p>Eine Patientenverfügung ist ein schriftliches Dokument, in dem Sie festlegen, welche medizinischen Maßnahmen Sie in bestimmten Situationen wünschen oder ablehnen — für den Fall, dass Sie selbst nicht mehr entscheidungsfähig sind. Sie ist rechtsverbindlich (§ 1827 BGB) und muss von Ärzten und Pflegepersonal beachtet werden.</p>
<div class="info-box"><strong>Abgrenzung:</strong> Die Patientenverfügung regelt medizinische Behandlungen. Die Vorsorgevollmacht regelt, wer in Ihrem Namen entscheidet. Beide Dokumente ergänzen sich — idealerweise haben Sie beides.</div>

<h2>Was kann eine Patientenverfügung regeln?</h2>
<p>Sie können in der Patientenverfügung festlegen, ob und welche der folgenden Maßnahmen Sie wünschen oder ablehnen:</p>
<ul>
  <li>Künstliche Beatmung und Wiederbelebung</li>
  <li>Künstliche Ernährung und Flüssigkeitszufuhr</li>
  <li>Dialyse (Nierenersatztherapie)</li>
  <li>Intensivmedizinische Maßnahmen</li>
  <li>Schmerztherapie und Palliativversorgung</li>
  <li>Organspende (kann hier erwähnt, aber auch separat geregelt werden)</li>
</ul>
<p>Sie können auch festlegen, in welchen Situationen diese Regelungen gelten sollen — zum Beispiel: bei irreversiblem Hirnversagen, bei schwerem Schlaganfall mit dauerhafter Bewusstlosigkeit oder im Endstadium einer unheilbaren Krankheit.</p>

<h2>Formvorschriften: Was ist zwingend erforderlich?</h2>
<p>Eine Patientenverfügung ist rechtlich bindend, wenn:</p>
<ul>
  <li>sie <strong>schriftlich</strong> verfasst ist</li>
  <li>sie <strong>eigenhändig unterschrieben</strong> ist (Vor- und Nachname, Datum)</li>
  <li>die verfassende Person <strong>volljährig und einwilligungsfähig</strong> war</li>
</ul>
<p>Eine notarielle Beglaubigung ist nicht vorgeschrieben, kann aber sinnvoll sein, um die Echtheit der Unterschrift zu belegen. Auch eine regelmäßige Aktualisierung (z. B. jährliche Unterschrift) stärkt die Gültigkeit.</p>

<h2>Wie konkret muss die Patientenverfügung sein?</h2>
<p>Je konkreter, desto besser. Allgemeine Formulierungen wie „Ich möchte nicht künstlich am Leben erhalten werden" reichen in der Praxis oft nicht aus, weil Ärzte sie unterschiedlich interpretieren. Der Bundesgerichtshof hat 2016 klargestellt: Die Patientenverfügung muss auf bestimmte Krankheitssituationen und konkrete Maßnahmen Bezug nehmen.</p>
<p>Empfehlung: Nutzen Sie ärztlich geprüfte Musterformulare als Grundlage und passen Sie diese an Ihre Situation an.</p>

<h2>Wo aufbewahren?</h2>
<p>Bewahren Sie die Patientenverfügung an einem Ort auf, der im Notfall schnell zugänglich ist:</p>
<ul>
  <li>Bei sich zu Hause (mit sichtbarem Hinweis im Portemonnaie)</li>
  <li>Beim bevollmächtigten Vertreter (aus der Vorsorgevollmacht)</li>
  <li>Beim Hausarzt</li>
  <li>Im Zentralen Vorsorgeregister der Bundesnotarkammer</li>
</ul>

<h2>Muss ich einen Arzt konsultieren?</h2>
<p>Rechtlich nicht — aber dringend empfohlen. Ein Arztgespräch hilft Ihnen zu verstehen, was bestimmte Maßnahmen in der Praxis bedeuten, und sicherzustellen, dass Ihre Verfügung medizinisch eindeutig formuliert ist.</p>

<h2>Fazit</h2>
<p>Eine Patientenverfügung ist ein Geschenk an Ihre Familie: Sie nimmt ihnen die Last, in einer extremen Situation für Sie entscheiden zu müssen. Erstellen Sie sie, solange Sie gesund sind — und aktualisieren Sie sie regelmäßig.</p>
`,
  },
  {
    slug: "erbschaft-ausschlagen",
    title: "Erbschaft ausschlagen — Wann macht das Sinn und wie geht das?",
    description:
      "Sechs Wochen Zeit, eine Entscheidung: Wann sollte man eine Erbschaft ausschlagen, wie funktioniert das beim Nachlassgericht und welche steuerlichen Aspekte gibt es?",
    date: "2026-05-01",
    category: "Nachlass & Erbrecht",
    image: "/images/erbschaft-ausschlagen-ratgeber.png",
    content: `
<p>Eine Erbschaft anzunehmen klingt verlockend — aber manchmal ist das Ausschlagen die klügere Entscheidung. Wenn der Nachlass mehr Schulden als Vermögen enthält, können Erben durch Ausschlagung ihre eigenen Ersparnisse schützen. Was viele nicht wissen: Dafür gilt eine strikte Frist von sechs Wochen.</p>

<h2>Wann ist die Ausschlagung sinnvoll?</h2>
<p>Die häufigsten Gründe für eine Erbschaftsausschlagung sind:</p>
<ul>
  <li><strong>Überschuldeter Nachlass:</strong> Der Verstorbene hatte mehr Schulden als Vermögen. Als Erbe haften Sie grundsätzlich auch für diese Schulden — mit Ihrem gesamten Privatvermögen.</li>
  <li><strong>Unbekannte Verbindlichkeiten:</strong> Sie wissen nicht, welche Schulden der Verstorbene hatte (z. B. laufende Kredite, Steuerschulden).</li>
  <li><strong>Steuerliche Gründe:</strong> In seltenen Fällen kann die Ausschlagung zugunsten einer anderen Person erbschaftsteuerlich günstiger sein.</li>
  <li><strong>Familienstrategien:</strong> Ausschlagung zugunsten der Kinder, um den Nachlass direkt zu diesen „durchzuleiten".</li>
</ul>

<h2>Die 6-Wochen-Frist — das Wichtigste</h2>
<p>Die Frist zur Erbschaftsausschlagung beträgt <strong>sechs Wochen</strong> ab dem Zeitpunkt, an dem der Erbe von dem Erbfall und dem Grund seiner Berufung (Testament, gesetzliche Erbfolge) Kenntnis erlangt hat (§ 1944 BGB). Bei Erben im Ausland verlängert sich die Frist auf sechs Monate.</p>
<div class="info-box"><strong>Achtung:</strong> Wer die Frist versäumt, gilt als Erbe — ohne Ausnahme. Eine nachträgliche Ausschlagung ist nur in engen Grenzen möglich (z. B. bei arglistiger Täuschung über den Nachlass).</div>

<h2>Wie läuft die Ausschlagung ab?</h2>
<p>Die Ausschlagung einer Erbschaft muss beim <strong>Nachlassgericht</strong> (Amtsgericht am letzten Wohnsitz des Verstorbenen) erklärt werden — persönlich oder notariell beurkundet. Eine formlose schriftliche Erklärung genügt nicht.</p>
<ol>
  <li>Termin beim Nachlassgericht oder Notar vereinbaren</li>
  <li>Personalausweis und Sterbeurkunde mitbringen</li>
  <li>Ausschlagungserklärung zu Protokoll geben oder notariell beurkunden lassen</li>
  <li>Kosten: ca. 30–100 € Gerichtsgebühren, je nach Nachlasswert</li>
</ol>

<h2>Was passiert nach der Ausschlagung?</h2>
<p>Schlägt ein Erbe aus, fällt der Erbanteil dem nächsten in der Erbfolge zu — in der Regel den Kindern des Ausschlagenden. Diese können wiederum ausschlagen. Es ist also möglich, den Nachlass durch eine „Ausschlagungskette" vollständig auf andere Personen umzuleiten.</p>
<p>Wenn alle gesetzlichen Erben ausschlagen, fällt der Nachlass an den Staat (sogenannte Erbschaft des Fiskus nach § 1936 BGB). Der Staat haftet jedoch nur mit dem vorhandenen Nachlass — nicht darüber hinaus.</p>

<h2>Nachlassinsolvenz als Alternative</h2>
<p>Wer bereits Erbe geworden ist (weil die Frist abgelaufen ist), aber die Schulden übersteigen das Vermögen, kann beim Insolvenzgericht <strong>Nachlassinsolvenz</strong> beantragen. Damit wird die Haftung auf den Nachlass begrenzt — das eigene Vermögen bleibt geschützt. Der Antrag muss unverzüglich gestellt werden.</p>

<h2>Steuerliche Aspekte</h2>
<p>Die Ausschlagung ist keine Schenkung und löst daher keine Schenkungsteuer aus. Wer jedoch ausschlägt und dafür eine Abfindung erhält, muss diese versteuern. Strategische Ausschlagungen zugunsten von Kindern, die einen höheren Freibetrag haben, können erbschaftsteuerlich sinnvoll sein — das sollte ein Steuerberater prüfen.</p>

<h2>Fazit</h2>
<p>Bevor Sie eine Erbschaft annehmen oder ausschlagen, sollten Sie sich einen Überblick über den Nachlass verschaffen. Bei unklarer Vermögenslage: Holen Sie sich rechtliche Beratung — und handeln Sie innerhalb der Sechs-Wochen-Frist.</p>
`,
  },
  {
    slug: "grabpflege-grabgestaltung",
    title: "Grabpflege & Grabgestaltung — Rechte, Pflichten und Ideen",
    description:
      "Nutzungsrecht, Pflegepflicht, Kosten und kreative Gestaltungsideen: Alles, was Sie über die Pflege und Gestaltung eines Grabes wissen müssen.",
    date: "2026-05-05",
    category: "Bestattung & Abschied",
    image: "/images/grabpflege-ratgeber.png",
    content: `
<p>Ein gepflegtes Grab ist für viele Angehörige ein Ausdruck von Respekt und Liebe — aber auch eine Verpflichtung, die mit Zeit und Kosten verbunden ist. Wer seine Rechte und Pflichten kennt, kann das Grab langfristig und ohne böse Überraschungen würdevoll gestalten.</p>

<h2>Das Nutzungsrecht am Grab</h2>
<p>Wer ein Grab anlegt, erwirbt kein Eigentumsrecht, sondern ein <strong>Nutzungsrecht</strong> (auch: Grabnutzungsrecht) an der Grabstätte. Dieses wird für eine bestimmte Laufzeit — in der Regel 20 bis 30 Jahre — erworben und kann verlängert werden.</p>
<p>Das Nutzungsrecht erlischt, wenn es nicht rechtzeitig verlängert wird. Das Grab kann dann nach einer Schutzfrist vom Friedhof eingeebnet und neu vergeben werden. Eine rechtzeitige Verlängerung ist daher wichtig.</p>
<div class="info-box"><strong>Tipp:</strong> Notieren Sie das Ablaufdatum des Nutzungsrechts. Viele Friedhofsverwaltungen informieren nicht automatisch vor Ablauf.</div>

<h2>Pflegepflicht — wer ist verantwortlich?</h2>
<p>Als Nutzungsrechtsinhaber sind Sie verpflichtet, das Grab entsprechend der Friedhofssatzung zu pflegen. Die genauen Anforderungen variieren je nach Friedhof. Vernachlässigte Gräber können — nach vorheriger Aufforderung — vom Friedhof auf Kosten des Nutzungsrechtsinhabers gepflegt werden.</p>
<p>Wenn Sie das Grab nicht selbst pflegen können (z. B. wegen Entfernung oder Alter), haben Sie folgende Möglichkeiten:</p>
<ul>
  <li><strong>Friedhofsgärtnerei:</strong> Viele Friedhöfe bieten Dauergrabpflege zu Pauschalpreisen an (50–300 € pro Jahr).</li>
  <li><strong>Private Gärtnereien:</strong> Lokale Gärtnereien übernehmen Grabpflege oft günstiger.</li>
  <li><strong>Treuhandgrabpflege:</strong> Ein Betrag wird treuhänderisch angelegt und für die laufende Pflege verwendet.</li>
  <li><strong>Wartungsarme Grabformen:</strong> Rasengräber, Urnengemeinschaftsfelder oder Waldbestattungen erfordern keine Grabpflege.</li>
</ul>

<h2>Kosten der Grabpflege</h2>
<p>Die laufenden Kosten für ein gepflegtes Erdgrab setzen sich zusammen aus:</p>
<ul>
  <li>Pflanzenmaterial (Frühjahrs- und Herbstbepflanzung): 100–400 € pro Jahr</li>
  <li>Gärtnerleistungen (wenn beauftragt): 100–400 € pro Jahr</li>
  <li>Friedhofsgebühren (Grabpflegepauschale): 0–150 € pro Jahr</li>
  <li>Grablichter, Kerzen, Dekoration: nach individuellem Wunsch</li>
</ul>

<h2>Grabgestaltung: Was ist erlaubt?</h2>
<p>Die Gestaltung von Gräbern ist durch die Friedhofssatzung der jeweiligen Gemeinde geregelt. Typische Vorgaben:</p>
<ul>
  <li>Maximale Größe und Höhe des Grabmals</li>
  <li>Materialvorgaben für Grabsteine (z. B. keine Natursteine aus Kinderarbeit)</li>
  <li>Erlaubte Pflanzenarten</li>
  <li>Vorschriften für Grabschmuck (Plastikblumen oft verboten)</li>
</ul>
<p>Informieren Sie sich bei der Friedhofsverwaltung, bevor Sie größere Veränderungen vornehmen.</p>

<h2>Gestaltungsideen für ein persönliches Grab</h2>
<p>Ein Grab muss nicht pflegeintensiv sein, um schön zu wirken. Einige Ideen:</p>
<ul>
  <li><strong>Bodendecker und Stauden:</strong> Pflegeleicht, ganzjährig attraktiv, winterhart</li>
  <li><strong>Kiesbett mit einzelnen Setzlingen:</strong> Reduziert Pflegeaufwand erheblich</li>
  <li><strong>Personalisierter Grabstein:</strong> Mit Foto (in Porzellan oder Laser-Gravur), Zitat oder Symbol</li>
  <li><strong>Grablaterne statt Kerze:</strong> Langlebiger und wetterfester</li>
  <li><strong>Saisonale Bepflanzung:</strong> Frühjahrszwiebeln, Sommer- und Herbstblumen im Wechsel</li>
</ul>

<h2>Das ewige Ruherecht</h2>
<p>In einigen Bundesländern und auf bestimmten Friedhöfen gibt es das sogenannte <strong>ewige Ruherecht</strong> — eine Grabstelle, die dauerhaft erhalten bleibt und nicht neu belegt wird. Diese Option ist teurer, gibt aber Angehörigen die Gewissheit, dass das Grab dauerhaft bestehen bleibt. Infos gibt es direkt bei der Friedhofsverwaltung.</p>

<h2>Fazit</h2>
<p>Grabpflege ist eine der liebevollsten Aufgaben, die Angehörige für Verstorbene übernehmen können. Mit der richtigen Planung — pflegeleichte Bepflanzung, klare Zuständigkeiten und rechtzeitige Verlängerung des Nutzungsrechts — bleibt das Grab ein würdiger Ort der Erinnerung.</p>
`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
