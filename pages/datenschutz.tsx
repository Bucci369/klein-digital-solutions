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
          <p>[Dein Name / Firmenname, z.B. Klein Digital Solutions]</p>
          <p>[Deine vollständige Adresse, z.B. Musterstraße 1, 12345 Musterstadt, Deutschland]</p>
          <p>[Deine E-Mail-Adresse, z.B. info@kleindigitalsolutions.de]</p>
          <p>[Deine Telefonnummer (optional)]</p>

          <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
          <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          <p>Wenn Sie diese Website nutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck dies geschieht.</p>
          <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

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
          <p>Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website &ndash; hierzu müssen die Server-Log-Files erfasst werden. Eine Speicherdauer von [z.&nbsp;B. 7 Tagen] ist üblich, danach werden die Daten automatisch gelöscht.</p>

          <h3>3.2. Cookies</h3>
          <p>Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät abgelegt werden und die Ihr Browser speichert. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
          <ul>
            <li>**Technisch notwendige Cookies:** Diese Cookies sind für den Betrieb der Website unerlässlich und ermöglichen grundlegende Funktionen wie die Seitennavigation, den Zugang zu geschützten Bereichen der Website oder die Speicherung von Produkteinstellungen während einer Sitzung. Ohne diese Cookies kann die Website nicht korrekt funktionieren.
                <ul>
                    <li>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb einer funktionsfähigen Website).</li>
                    <li>Beispiele: Session-Cookies, Consent-Cookie f&uuml;r Ihre Zustimmung.</li>
                </ul>
            </li>
            <li>**Nicht notwendige Cookies (Analyse, Marketing, Komfort):** F&uuml;r diese Cookies ist Ihre aktive Einwilligung erforderlich. Dies k&ouml;nnen sein:
                <ul>
                    <li>**Analyse-Cookies:** Erm&ouml;glichen uns, das Nutzerverhalten auf unserer Website zu analysieren, um die Performance und das Angebot zu verbessern (z.&nbsp;B. Google Analytics, Matomo).</li>
                    <li>**Marketing-Cookies:** Werden verwendet, um personalisierte Werbung anzuzeigen, die f&uuml;r Sie relevanter ist (z.&nbsp;B. Google Ads, Facebook Pixel).</li>
                    <li>**Funktionale Cookies:** Verbessern den Komfort und die Funktionalit&auml;t der Website (z.&nbsp;B. Speichern von Spracheinstellungen, Merken von Login-Daten).</li>
                </ul>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung).
                Wir holen Ihre Einwilligung &uuml;ber unseren Cookie-Consent-Banner ein.
            </li>
          </ul>
          <p>Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder generell ausschlie&szlig;en sowie das automatische L&ouml;schen der Cookies beim Schlie&szlig;en des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.</p>
          <p>Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.&nbsp;B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage genannt wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.&nbsp;B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.</p>

          <h3>3.3. Kontaktformular / E-Mail Kontakt</h3>
          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail-Adresse, Telefonnummer etc.) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.</p>
          <p>Ihre an uns per Kontaktanfrage übermittelten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.</p>

          <h3>3.4. Externe Dienste und Inhalte (Beispiele, anpassen!)</h3>
          <p>Wir binden auf unserer Website Dienste und Inhalte Dritter ein, um z.&nbsp;B. Videos abzuspielen oder Social-Media-Funktionen anzubieten. Dies setzt immer voraus, dass die Drittanbieter die IP-Adresse der Nutzer wahrnehmen, da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden k&ouml;nnten. Die IP-Adresse ist damit f&uuml;r die Darstellung dieser Inhalte erforderlich.</p>
          
          <h4>Google Analytics (optional, nur wenn genutzt!)</h4>
          <p>Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4, Irland.</p>
          <p>Google Analytics verwendet sog. &bdquo;Cookies&ldquo;. Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen &uuml;ber Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA &uuml;bertragen und dort gespeichert.</p>
          <p>Die Speicherung von Google Analytics-Cookies und die Nutzung dieses Analyse-Tools erfolgen auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</p>
          <ul>
            <li>**IP-Anonymisierung:** Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europ&auml;ischen Union oder in anderen Vertragsstaaten des Abkommens &uuml;ber den Europ&auml;ischen Wirtschaftsraum vor der &Uuml;bermittlung in die USA gek&uuml;rzt. Nur in Ausnahmef&auml;llen wird die volle IP-Adresse an einen Server von Google in den USA &uuml;bertragen und dort gek&uuml;rzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports &uuml;ber die Websiteaktivit&auml;ten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegen&uuml;ber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser &uuml;bermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengef&uuml;hrt.</li>
            <li>**Widerspruch gegen Datenerfassung:** Sie k&ouml;nnen die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht s&auml;mtliche Funktionen dieser Website vollumf&auml;nglich werden nutzen k&ouml;nnen. Sie k&ouml;nnen dar&uuml;ber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verf&uuml;gbare Browser-Plugin herunterladen und installieren: [Link zum Google Analytics Opt-out Browser Add-on: tools.google.com/dlpage/gaoptout].</li>
            <li>**Auftragsverarbeitung:** Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbeh&ouml;rden bei der Nutzung von Google Analytics vollst&auml;ndig um.</li>
          </ul>

          <h4>Social Media Plugins (z.&nbsp;B. Facebook, Instagram, LinkedIn - nur wenn genutzt!)</h4>
          <p>Auf unserer Website k&ouml;nnen Social Media Plugins von [z.&nbsp;B. Facebook Inc., Instagram LLC, LinkedIn Corporation] eingebunden sein. Die Plugins sind an den jeweiligen Logos der Anbieter erkennbar.</p>
          <p>Beim Besuch unserer Seiten wird &uuml;ber das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Server des Social-Media-Dienstanbieters hergestellt. Der Social-Media-Dienst erh&auml;lt dadurch die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie einen Social-Media-Button anklicken, w&auml;hrend Sie in Ihrem Social-Media-Konto eingeloggt sind, k&ouml;nnen Sie die Inhalte unserer Seiten auf Ihrem Profil verlinken. Dadurch kann der Social-Media-Dienst den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der &uuml;bermittelten Daten sowie deren Nutzung durch den Social-Media-Dienst erhalten.</p>
          <p>Die Nutzung dieser Plugins erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</p>
          <ul>
            <li>F&uuml;r weitere Informationen zur Datenerhebung und -nutzung durch die jeweiligen Anbieter sowie Ihre diesbez&uuml;glichen Rechte und Schutzm&ouml;glichkeiten entnehmen Sie bitte den Datenschutzhinweisen des jeweiligen Anbieters.</li>
          </ul>

          <h2>4. Ihre Rechte als betroffene Person</h2>
          <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und gegebenenfalls ein Recht auf Berichtigung, Sperrung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
          <ul>
            <li>**Recht auf Auskunft (Art. 15 DSGVO):** Sie haben das Recht, eine Best&auml;tigung dar&uuml;ber zu verlangen, ob Sie betreffende personenbezogene Daten verarbeitet werden; ist dies der Fall, so haben Sie ein Recht auf Auskunft &uuml;ber diese personenbezogenen Daten.</li>
            <li>**Recht auf Berichtigung (Art. 16 DSGVO):** Sie haben das Recht, unverz&uuml;glich die Berichtigung unrichtiger oder die Vervollst&auml;ndigung unvollst&auml;ndiger personenbezogener Daten zu verlangen.</li>
            <li>**Recht auf L&ouml;schung (&bdquo;Recht auf Vergessenwerden&ldquo;) (Art. 17 DSGVO):** Sie haben das Recht, zu verlangen, dass Sie betreffende personenbezogene Daten unverz&uuml;glich gel&ouml;scht werden.</li>
            <li>**Recht auf Einschr&auml;nkung der Verarbeitung (Art. 18 DSGVO):** Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung zu verlangen.</li>
            <li>**Recht auf Daten&uuml;bertragbarkeit (Art. 20 DSGVO):** Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, g&auml;ngigen und maschinenlesbaren Format zu erhalten.</li>
            <li>**Recht auf Widerspruch (Art. 21 DSGVO):** Sie haben das Recht, aus Gr&uuml;nden, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen.</li>
            <li>**Recht auf Widerruf der datenschutzrechtlichen Einwilligung (Art. 7 Abs. 3 DSGVO):** Sie haben das Recht, Ihre Einwilligung jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtm&auml;&szlig;igkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht ber&uuml;hrt.</li>
            <li>**Recht auf Beschwerde bei einer Aufsichtsbeh&ouml;rde (Art. 77 DSGVO):** Im Falle datenschutzrechtlicher Verst&ouml;&szlig;e steht dem Betroffenen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu. Zust&auml;ndige Aufsichtsbeh&ouml;rde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat.</li>
          </ul>

          <h2>5. &Auml;nderungen dieser Datenschutzerkl&auml;rung</h2>
          <p>Wir behalten uns vor, diese Datenschutzerkl&auml;rung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um &Auml;nderungen unserer Leistungen in der Datenschutzerkl&auml;rung umzusetzen, z.&nbsp;B. bei der Einf&uuml;hrung neuer Services. F&uuml;r Ihren erneuten Besuch gilt dann die neue Datenschutzerkl&auml;rung.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;