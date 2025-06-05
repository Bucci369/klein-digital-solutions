// pages/backend-loesungen.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BackendLoesungenPage() {
  return (
    <>
      <Head>
        <title>Backend-Lösungen | Klein Digital Solutions</title>
        <meta
          name="description"
          content="Robuste und skalierbare APIs & Systeme – KI-gestützt entwickelt."
        />
      </Head>

      <Header />

      <main className="max-w-5xl mx-auto px-6 py-20 sm:py-24 md:py-28">
        <h1 className="text-5xl font-extrabold mb-8 text-gray-900 dark:text-gray-100">
          Backend-Lösungen
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
          Ein leistungsfähiges Backend bildet das Rückgrat jeder erfolgreichen Anwendung. Egal ob Web-App, Mobile-App oder komplexes IoT-System – eine stabile und skalierbare Infrastruktur sorgt dafür, dass deine Dienste zuverlässig und performant laufen.
        </p>

        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
          Wir setzen auf moderne Technologien, kombiniert mit KI-Unterstützung, um Backends zu bauen, die flexibel, sicher und einfach erweiterbar sind. So kannst du dich auf dein Kerngeschäft konzentrieren, während deine Systeme im Hintergrund zuverlässig arbeiten.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Unsere Leistungen
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg max-w-3xl mb-8">
          <li>REST & GraphQL APIs: Schnelle und flexible Schnittstellen für deine Anwendungen</li>
          <li>Auth-Systeme mit JWT & OAuth: Sichere Nutzeranmeldung und Berechtigungen</li>
          <li>Datenbankdesign (SQL/NoSQL): Optimierte Speicherung und Datenmanagement</li>
          <li>Webhook- & 3rd-Party-Integrationen: Nahtlose Anbindung externer Dienste</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Warum KI-gestützt?
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
          KI hilft uns, Code schneller zu schreiben, Fehler früh zu erkennen und komplexe Systeme intelligenter zu gestalten. So liefern wir dir nicht nur funktionale Backends, sondern echte Wettbewerbsvorteile.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Dein Projekt in sicheren Händen
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
          Von der ersten Beratung bis zum Launch begleiten wir dich mit agilem Projektmanagement, regelmäßigen Updates und einem starken Fokus auf Sicherheit und Skalierbarkeit.
        </p>
        
      </main>

      <Footer />
    </>
  );
}
