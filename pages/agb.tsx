// pages/agb.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AGB = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Allgemeine Geschäftsbedingungen (AGB) - Klein Digital Solutions</title>
        <meta name="description" content="Allgemeine Geschäftsbedingungen von Klein Digital Solutions für Webentwicklungsdienstleistungen und digitale Lösungen." />
      </Head>

      <Header />

      <main className="flex-grow py-20 px-4 container mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <section className="prose lg:prose-lg max-w-none text-gray-700">
          <p>Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) regeln die vertraglichen Beziehungen zwischen Klein Digital Solutions (nachfolgend „Dienstleister“) und ihren Kunden (nachfolgend „Kunde“) für alle über die Website oder auf direktem Wege angebotenen Dienstleistungen im Bereich der Webentwicklung und digitalen Lösungen.</p>
          <p>Abweichende oder ergänzende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Dienstleister stimmt ihrer Geltung ausdrücklich und schriftlich zu. Diese AGB gelten auch dann, wenn der Dienstleister in Kenntnis entgegenstehender oder von diesen AGB abweichender Bedingungen des Kunden seine Leistungen vorbehaltlos erbringt.</p>

          <h2>1. Vertragsgegenstand und Leistungsumfang</h2>
          <p>Der Dienstleister erbringt Leistungen im Bereich der Full-Stack Webentwicklung, Frontend- und Backend-Entwicklung, Konzeption, Designumsetzung, E-Commerce-Lösungen, Performance-Optimierung, SEO-Beratung sowie weiterer digitaler Lösungen (nachfolgend „Leistungen“).</p>
          <p>Der genaue Leistungsumfang wird in individuellen Angeboten, Projektbeschreibungen oder Lasten-/Pflichtenheften detailliert festgelegt und durch schriftliche Auftragsbestätigung des Kunden verbindlich. Hierbei können Technologien wie React, Next.js, TypeScript, Node.js und Datenbanken zum Einsatz kommen.</p>
          <p>Nicht im Leistungsumfang enthalten sind, sofern nicht explizit vereinbart: Hosting-Dienste, Domain-Registrierung, Lizenzgebühren für Drittsoftware oder -Dienste, fortlaufende Wartung und Pflege nach Projektabschluss, Suchmaschinenmarketing (SEM) oder Content-Erstellung.</p>

          <h2>2. Angebot und Vertragsschluss</h2>
          <p>Angebote des Dienstleisters sind freibleibend und unverbindlich, sofern nicht ausdrücklich anders gekennzeichnet.</p>
          <p>Ein Vertrag kommt erst mit der schriftlichen Auftragsbestätigung des Dienstleisters oder der Erbringung der Leistung zustande. Mündliche Nebenabreden oder Zusicherungen bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung durch den Dienstleister.</p>

          <h2>3. Preise und Zahlungsbedingungen</h2>
          <p>Es gelten die im individuellen Angebot oder Vertrag vereinbarten Preise. Sofern nicht anders angegeben, verstehen sich alle Preise in Euro zzgl. der gesetzlichen Mehrwertsteuer.</p>
          <p>Der Dienstleister ist berechtigt, angemessene Abschlagszahlungen entsprechend dem Fortschritt der Leistungen zu verlangen. Die genauen Zahlungspläne (z.B. Anzahlung, Meilensteinzahlungen, Schlusszahlung) werden im Angebot festgelegt.</p>
          <p>Rechnungen sind innerhalb von [z.B. 14 Tagen] nach Rechnungsdatum ohne Abzug zur Zahlung fällig. Bei Zahlungsverzug ist der Dienstleister berechtigt, Verzugszinsen in Höhe des gesetzlichen Satzes zu verlangen. Die Geltendmachung eines weitergehenden Verzugsschadens bleibt vorbehalten.</p>

          <h2>4. Mitwirkungspflichten des Kunden</h2>
          <p>Der Kunde ist zur umfassenden Mitwirkung bei der Erbringung der Leistungen verpflichtet. Dies umfasst insbesondere die rechtzeitige Bereitstellung aller notwendigen Informationen, Daten, Materialien, Inhalte (Texte, Bilder, Logos), Zugänge (z.B. zu Servern, APIs, Drittanbieter-Diensten) und Freigaben (z.B. Design-Freigaben, Test-Freigaben).</p>
          <p>Der Kunde gewährleistet, dass die von ihm bereitgestellten Inhalte und Materialien frei von Rechten Dritter sind und keine gesetzlichen Bestimmungen oder die Rechte Dritter verletzen. Er stellt den Dienstleister diesbezüglich von allen Ansprüchen Dritter frei.</p>
          <p>Verzögerungen oder Mehraufwände, die durch die Nichteinhaltung der Mitwirkungspflichten des Kunden entstehen, gehen zu Lasten des Kunden und berechtigen den Dienstleister zur Geltendmachung von Mehraufwand oder zur Verschiebung von Terminen.</p>

          <h2>5. Leistungsfristen und Termine</h2>
          <p>Leistungsfristen und Termine sind grundsätzlich unverbindlich, es sei denn, sie wurden ausdrücklich und schriftlich als verbindlich vereinbart.</p>
          <p>Geraten die Parteien unverschuldet in Verzug, verlängern sich die Fristen entsprechend der Dauer der Beeinträchtigung.</p>

          <h2>6. Abnahme</h2>
          <p>Nach Fertigstellung der vereinbarten Leistungen übermittelt der Dienstleister die Leistung zur Abnahme. Der Kunde ist verpflichtet, die übermittelten Leistungen unverzüglich zu prüfen und etwaige Mängel schriftlich mitzuteilen. Die Abnahmefrist beträgt [z.B. 7 Werktage].</p>
          <p>Wird innerhalb der Frist keine Mängelrüge geltend gemacht oder die Leistung ohne Rüge produktiv genutzt, gilt die Leistung als abgenommen.</p>

          <h2>7. Mängelgewährleistung und Haftung</h2>
          <p>Der Dienstleister gewährleistet, dass die erbrachten Leistungen dem vereinbarten Leistungsumfang entsprechen und zum Zeitpunkt der Abnahme frei von Mängeln sind, die den vertragsgemäßen Gebrauch wesentlich beeinträchtigen.</p>
          <p>Die Gewährleistungsfrist beträgt [z.B. 12 Monate] ab Abnahme.</p>
          <p>Die Haftung des Dienstleisters für leichte Fahrlässigkeit ist ausgeschlossen, soweit keine wesentlichen Vertragspflichten (Kardinalpflichten) verletzt werden. Im Falle der Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.</p>
          <p>Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie nach dem Produkthaftungsgesetz bleibt unberührt.</p>

          <h2>8. Nutzungsrechte und Urheberrecht</h2>
          <p>Alle Urheberrechte an den vom Dienstleister erstellten Werken (z.B. Quellcode, Designs, Grafiken, Texte der Website) verbleiben beim Dienstleister, sofern nicht anders vereinbart.</p>
          <p>Nach vollständiger Zahlung der vereinbarten Vergütung räumt der Dienstleister dem Kunden ein einfaches, nicht übertragbares, zeitlich und räumlich unbeschränktes Nutzungsrecht an den vertragsgegenständlichen Leistungen für den im Vertrag vorgesehenen Zweck ein.</p>
          <p>Der Kunde ist nicht berechtigt, die Leistungen oder Teile davon ohne vorherige schriftliche Zustimmung des Dienstleisters an Dritte weiterzugeben oder über den vertraglich vereinbarten Zweck hinaus zu nutzen.</p>

          <h2>9. Datenschutz und Geheimhaltung</h2>
          <p>Informationen zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten finden Sie in unserer separaten Datenschutzerklärung.</p>
          <p>Beide Parteien verpflichten sich, über alle im Rahmen der Zusammenarbeit bekannt werdenden vertraulichen Informationen Stillschweigen zu bewahren.</p>

          <h2>10. Vertragsdauer und Kündigung</h2>
          <p>Die Vertragsdauer wird im jeweiligen individuellen Angebot festgelegt. Verträge können von beiden Parteien nur aus wichtigem Grund außerordentlich gekündigt werden, wenn der wichtige Grund in der Person oder im Verhalten der anderen Partei liegt.</p>
          <p>Bei Beendigung des Vertrages werden die bis dahin erbrachten Leistungen nach Aufwand abgerechnet, sofern keine andere Regelung getroffen wurde.</p>

          <h2>11. Schlussbestimmungen</h2>
          <p>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</p>
          <p>Ausschließlicher Gerichtsstand für alle Streitigkeiten aus und im Zusammenhang mit diesem Vertrag ist [Dein Firmensitz, z.B. Dortmund], sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.</p>
          <p>Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, so wird die Wirksamkeit der übrigen Bestimmungen dadurch nicht berührt. Die unwirksame Bestimmung ist durch eine Regelung zu ersetzen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AGB;