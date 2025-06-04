// pages/impressum.tsx

import Head from 'next/head';
import Header from '../components/Header'; // Pfad anpassen, falls nötig
import Footer from '../components/Footer'; // Pfad anpassen, falls nötig

const ImpressumPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Impressum | Klein Digital Solutions</title>
        <meta
          name="description"
          content="Impressum und rechtliche Hinweise für Klein Digital Solutions."
        />
        {/* Optional: Nicht indexieren */}
        {/* <meta name="robots" content="noindex, follow" /> */}
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Impressum
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Klein Digital Solutions<br />
              Özgür Azap<br />
              Wittbräuckerstraße 109<br />
              44287 Dortmund<br />
              Deutschland
            </p>

            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-6">Kontakt</h2>
            <p>
              Telefon: +49 (0) 123 456789<br />
              E-Mail: info@kleindigitalsolutions.de
            </p>

            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-6">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Özgür Azap<br />
              Wittbräuckerstraße 109<br />
              44287 Dortmund
            </p>

            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-6">
              Hinweis zur Website
            </h2>
            <p>
              Diese Website befindet sich im Aufbau und dient ausschließlich der
              Präsentation eigener Arbeiten und Projekte. Es findet kein Verkauf
              von Waren oder Dienstleistungen über diese Website statt. Das Gewerbe ist aktuell noch nicht angemeldet.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-6">
              Hosting und Datenschutz
            </h2>
            <p>
              Diese Website wird bei Vercel (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. 
              Dabei können beim Zugriff auf die Website Daten, einschließlich IP-Adressen, an Vercel übermittelt werden. 
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

            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-6">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-6">
              Verbraucher­streit­beilegung / Universal­schlichtungs­stelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-6">Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mt-6">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors. Downloads und
              Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ImpressumPage;
