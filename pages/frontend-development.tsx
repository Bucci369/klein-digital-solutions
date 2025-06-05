// pages/frontend-development.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FrontendDevelopmentPage() {
  return (
    <>
      <Head>
        <title>Frontend Development | Klein Digital Solutions</title>
        <meta
          name="description"
          content="Modernes, performantes Frontend mit Fokus auf UX, Accessibility und KI-gestützter Entwicklung."
        />
      </Head>

      <Header />

      <main className="max-w-5xl mx-auto px-6 py-20 sm:py-24 md:py-28">
        <h1 className="text-5xl font-extrabold mb-8 text-gray-900 dark:text-gray-100">
          Frontend Development
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
          Das Frontend ist das Gesicht deines digitalen Angebots. Wir entwickeln intuitive, responsive und barrierefreie Benutzeroberflächen, die sowohl optisch überzeugen als auch technisch glänzen.
        </p>

        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
          Mit modernen Frameworks wie React und Next.js schaffen wir schlanke, wartbare Frontends, die optimal performen – auf allen Endgeräten und in allen Browsern.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Unsere Frontend-Leistungen
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg max-w-3xl mb-8">
          <li>Responsive & barrierefreie Web-Oberflächen</li>
          <li>UI/UX Design und Prototyping</li>
          <li>State Management & komponentenbasiertes Design</li>
          <li>Animationsintegration mit Framer Motion</li>
          <li>KI-gestützte Optimierung und Testing</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Warum KI im Frontend?
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
          KI hilft bei der Analyse von Nutzerverhalten, automatisiert Testläufe und unterstützt die Design-Optimierung. So schaffen wir Benutzeroberflächen, die nachhaltig begeistern und effizient funktionieren.
        </p>
        
      </main>

      <Footer />
    </>
  );
}
