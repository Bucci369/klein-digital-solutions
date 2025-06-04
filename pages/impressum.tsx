// pages/datenschutz.tsx

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DatenschutzPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Datenschutzerklärung | Klein Digital Solutions</title>
        <meta
          name="description"
          content="Datenschutzerklärung für Klein Digital Solutions."
        />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. 
              Nachfolgend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
            </p>

            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
              Klein Digital Solutions<br />
              Özgür Azap<br />
              Wittbräuckerstraße 109<br />
              44287 Dortmund<br />
              Deutschland<br />
              E-Mail: info@kleindigitalsolutions.de
            </p>

            <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
              Beim Besuch der Website werden automatisch folgende Daten an den Server
              der Website gesendet und temporär gespeichert: IP-Adresse, Datum und Uhrzeit des Zugriffs,
              Browsertyp und Version, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners
              sowie weitere ähnliche Daten. Diese Daten sind nicht bestimmten Personen zuordenbar
              und werden nicht mit anderen Datenquellen zusammengeführt.
            </p>

            <h2>3. Hosting und Datenverarbeitung</h2>
            <p>
              Diese Website wird bei Vercel (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet.
              Beim Besuch der Website können Daten wie Ihre IP-Adresse an Vercel übertragen werden.
              Weitere Informationen zum Datenschutz bei Vercel finden Sie unter&nbsp;
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                https://vercel.com/legal/privacy-policy
              </a>.
            </p>

            <h2>4. Verwendung von Google Fonts (lokale Einbindung)</h2>
            <p>
              Um Ihre Daten zu schützen, binden wir Google Fonts lokal auf unserem Server ein. 
              Dadurch wird keine Verbindung zu Google-Servern hergestellt und es werden keine Daten an Google übermittelt.
              Diese Maßnahme dient dem Schutz Ihrer Privatsphäre und der Einhaltung der DSGVO.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Unsere Website verwendet keine Cookies, die personenbezogene Daten speichern oder verfolgen.
            </p>

            <h2>6. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung
              Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit.
              Außerdem können Sie der Verarbeitung jederzeit widersprechen und eine erteilte Einwilligung widerrufen.
              Wenden Sie sich hierzu bitte an die oben genannte Kontaktadresse.
            </p>

            <h2>7. Keine Verkaufstätigkeit</h2>
            <p>
              Diese Website dient nur der Präsentation eigener Arbeiten und Projekte.
              Es findet kein Verkauf von Waren oder Dienstleistungen über diese Website statt.
            </p>

            <h2>8. Änderungen der Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen,
              um sie an rechtliche Anforderungen oder Änderungen der Website anzupassen.
              Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>

            <p>Stand: 4. Juni 2025</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DatenschutzPage;
