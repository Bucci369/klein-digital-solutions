// pages/web-development.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WebDevelopmentPage() {
  return (
    <>
      <Head>
        <title>Web Development | Klein Digital Solutions</title>
        <meta
          name="description"
          content="Ganzheitliche Webentwicklung von der Idee bis zum Livegang – effizient, modern und KI-gestützt."
        />
      </Head>

      <Header />

      <main className="max-w-5xl mx-auto px-6 py-20 sm:py-24 md:py-28">
        <h1 className="text-5xl font-extrabold mb-8 text-gray-900 dark:text-gray-100">
          Web Development
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
          Von der ersten Idee bis zur fertigen Weblösung begleiten wir dich mit ganzheitlichem Web Development. Egal ob Website, Web-App oder komplexe Plattform – wir sorgen für moderne, skalierbare und performante Ergebnisse.
        </p>

        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
          Unsere Arbeit verbindet aktuelles Know-how in Frontend und Backend mit KI-gestützten Tools, um Entwicklungszeiten zu verkürzen und die Qualität zu steigern. So erhältst du zuverlässige Lösungen, die deine Nutzer begeistern.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Unsere Leistungen im Web Development
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg max-w-3xl mb-8">
          <li>Frontend- und Backend-Entwicklung</li>
          <li>Responsive Webdesign und UX-Optimierung</li>
          <li>API-Integration und Microservices</li>
          <li>CMS- und Headless-Systeme</li>
          <li>Deployment, Hosting & Wartung</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          KI-Einsatz im Entwicklungsprozess
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
          Durch KI-basierte Code-Generierung und automatisierte Tests sorgen wir für höhere Qualität und schnellere Entwicklungszyklen. Dadurch kannst du dich auf dein Kerngeschäft konzentrieren, während wir deine Weblösung bauen.
        </p>
        
      </main>

      <Footer />
    </>
  );
}
