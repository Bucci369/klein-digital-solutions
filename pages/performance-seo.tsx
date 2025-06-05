// pages/performance-seo.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PerformanceSEOPage() {
  return (
    <>
      <Head>
        <title>Performance & SEO | Klein Digital Solutions</title>
        <meta
          name="description"
          content="Optimierung von Ladezeiten, Performance und SEO für bessere Sichtbarkeit und Nutzererlebnis."
        />
      </Head>

      <Header />

      <main className="max-w-5xl mx-auto px-6 py-20 sm:py-24 md:py-28">
        <h1 className="text-5xl font-extrabold mb-8 text-gray-900 dark:text-gray-100">
          Performance & SEO
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
          Schnelle Ladezeiten und gute Sichtbarkeit bei Google sind essenziell für den Erfolg deiner Website. Wir verbessern die Performance deiner Webprojekte und optimieren sie für Suchmaschinen – so erreichst du mehr Nutzer und bietest ein hervorragendes Nutzererlebnis.
        </p>

        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
          Dabei nutzen wir neueste Techniken und KI-gestützte Analyse-Tools, um Ladezeiten zu reduzieren, technische SEO zu verbessern und Content gezielt zu optimieren.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Unsere Leistungen im Bereich Performance & SEO
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg max-w-3xl mb-8">
          <li>Optimierung von Ladezeiten und Core Web Vitals</li>
          <li>Technische SEO-Analysen & Fehlerbehebung</li>
          <li>Content-Optimierung & Keyword-Strategien</li>
          <li>Monitoring und Reporting mit KI-Tools</li>
          <li>Mobile Performance & Accessibility</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          KI im Performance- & SEO-Management
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
          KI ermöglicht uns, große Datenmengen auszuwerten, Schwachstellen präzise zu identifizieren und Empfehlungen zu geben. So wird dein Webprojekt nicht nur schnell, sondern auch langfristig sichtbar und erfolgreich.
        </p>
        
      </main>

      <Footer />
    </>
  );
}
