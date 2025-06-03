// pages/datenschutz.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Datenschutz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Datenschutzerklärung - Klein Digital Solutions</title>
        <meta name="description" content="Datenschutzerklärung von Klein Digital Solutions. Informationen zum Datenschutz auf unserer Website." />
      </Head>

      <Header />

      <main className="flex-grow py-20 px-4 container mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <section className="prose lg:prose-lg max-w-none text-gray-700">
          <p>Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachfolgend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.</p>

          <h2>1. Verantwortlicher im Sinne der DSGVO</h2>
          <p>Özgür Azap / Klein Digital Solutions</p>
          <p>Wittbräcukerstraße 109, 44287, Dortmund, Deutschland]</p>
          <p>info@kleindigitalsolutions.de</p>

          <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
          <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          <p>Wenn Sie diese Website nutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck dies geschieht.</p>
          <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

          <h2>3. Datenerfassung auf unserer Website</h2>

          <h3>3.1. Server-Log-Dateien</h3>
          <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL (die zuvor besuchte Seite)</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden. Eine Speicherdauer von [z.B. 7 Tagen] ist üblich, danach werden die Daten automatisch gelöscht.</p>

          <h3>3.2. Cookies</h3>
          <p>Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät abgelegt werden und die Ihr Browser speichert. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
          <ul>
            <li>**Technisch notwendige Cookies:** Diese Cookies sind für den Betrieb der Website unerlässlich und ermöglichen grundlegende Funktionen wie die Seitennavigation, den Zugang zu geschützten Bereichen der Website oder die Speicherung von Produkteinstellungen während einer Sitzung. Ohne diese Cookies kann die Website nicht korrekt funktionieren.
                <ul>
                    <li>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb einer funktionsfähigen Website).</li>
                    <li>Beispiele: Session-Cookies, Consent-Cookie für Ihre Zustimmung.</li>
                </ul>
            </li>
            <li>**Nicht notwendige Cookies (Analyse, Marketing, Komfort):** Für diese Cookies ist Ihre aktive Einwilligung erforderlich. Dies können sein:
                <ul>
                    <li>**Analyse-Cookies:** Ermöglichen uns, das Nutzerverhalten auf unserer Website zu analysieren, um die Performance und das Angebot zu verbessern (z.B. Google Analytics, Matomo).</li>
                    <li>**Marketing-Cookies:** Werden verwendet, um personalisierte Werbung anzuzeigen, die für Sie relevanter ist (z.B. Google Ads, Facebook Pixel).</li>
                    <li>**Funktionale Cookies:** Verbessern den Komfort und die Funktionalität der Website (z.B. Speichern von Spracheinstellungen, Merken von Login-Daten).</li>
                </ul>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung).
                Wir holen Ihre Einwilligung über unseren Cookie-Consent-Banner ein.
            </li>
          </ul>
          <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p>
          <p>Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage genannt wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.&nbsp;B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.</p>

          <h3>3.3. Kontaktformular / E-Mail Kontakt</h3>
          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail-Adresse, Telefonnummer etc.) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.</p>
          <p>Ihre an uns per Kontaktanfrage übermittelten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>

          <h3>3.4. Externe Dienste und Inhalte (Beispiele, anpassen!)</h3>
          <p>Wir binden auf unserer Website Dienste und Inhalte Dritter ein, um z.B. Videos abzuspielen oder Social-Media-Funktionen anzubieten. Dies setzt immer voraus, dass die Drittanbieter die IP-Adresse der Nutzer wahrnehmen, da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die Darstellung dieser Inhalte erforderlich.</p>
          
          <h4>Google Analytics (optional, nur wenn genutzt!)</h4>
          <p>Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Irland.</p>
          <p>Google Analytics verwendet sog. "Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.</p>
          <p>Die Speicherung von Google Analytics-Cookies und die Nutzung dieses Analyse-Tools erfolgen auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</p>
          <ul>
            <li>**IP-Anonymisierung:** Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.</li>
            <li>**Widerspruch gegen Datenerfassung:** Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: [Link zum Google Analytics Opt-out Browser Add-on: tools.google.com/dlpage/gaoptout].</li>
            <li>**Auftragsverarbeitung:** Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.</li>
          </ul>

          <h4>Social Media Plugins (z.B. Facebook, Instagram, LinkedIn - nur wenn genutzt!)</h4>
          <p>Auf unserer Website können Social Media Plugins von [z.B. Facebook Inc., Instagram LLC, LinkedIn Corporation] eingebunden sein. Die Plugins sind an den jeweiligen Logos der Anbieter erkennbar.</p>
          <p>Beim Besuch unserer Seiten wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Server des Social-Media-Dienstanbieters hergestellt. Der Social-Media-Dienst erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie einen Social-Media-Button anklicken, während Sie in Ihrem Social-Media-Konto eingeloggt sind, können Sie die Inhalte unserer Seiten auf Ihrem Profil verlinken. Dadurch kann der Social-Media-Dienst den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch den Social-Media-Dienst erhalten.</p>
          <p>Die Nutzung dieser Plugins erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</p>
          <ul>
            <li>Für weitere Informationen zur Datenerhebung und -nutzung durch die jeweiligen Anbieter sowie Ihre diesbezüglichen Rechte und Schutzmöglichkeiten entnehmen Sie bitte den Datenschutzhinweisen des jeweiligen Anbieters.</li>
          </ul>

          <h2>4. Ihre Rechte als betroffene Person</h2>
          <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und gegebenenfalls ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
          <ul>
            <li>**Recht auf Auskunft (Art. 15 DSGVO):** Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene Daten verarbeitet werden; ist dies der Fall, so haben Sie ein Recht auf Auskunft über diese personenbezogenen Daten.</li>
            <li>**Recht auf Berichtigung (Art. 16 DSGVO):** Sie haben das Recht, unverzüglich die Berichtigung unrichtiger oder die Vervollständigung unvollständiger personenbezogener Daten zu verlangen.</li>
            <li>**Recht auf Löschung ("Recht auf Vergessenwerden") (Art. 17 DSGVO):** Sie haben das Recht, zu verlangen, dass Sie betreffende personenbezogene Daten unverzüglich gelöscht werden.</li>
            <li>**Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):** Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen.</li>
            <li>**Recht auf Datenübertragbarkeit (Art. 20 DSGVO):** Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
            <li>**Recht auf Widerspruch (Art. 21 DSGVO):** Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen.</li>
            <li>**Recht auf Widerruf der datenschutzrechtlichen Einwilligung (Art. 7 Abs. 3 DSGVO):** Sie haben das Recht, Ihre Einwilligung jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.</li>
            <li>**Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO):** Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat.</li>
          </ul>

          <h2>5. Änderungen dieser Datenschutzerklärung</h2>
          <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;