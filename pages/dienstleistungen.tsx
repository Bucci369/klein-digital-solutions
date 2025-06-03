import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceDetailSection from '../components/ServiceDetailSection';
import CallToAction from '../components/CallToAction';

const Dienstleistungen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Unsere Dienstleistungen - Klein Digital Solutions</title>
        <meta name="description" content="Unsere Expertise: Excel & Datenverarbeitung, Website-Erstellung, Digitale Automatisierung, IT-Beratung. Maßgeschneiderte digitale Lösungen für Ihr Unternehmen." />
      </Head>

      <Header />

      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Unsere Expertise für Ihren digitalen Erfolg</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Maßgeschneiderte Lösungen, die Ihre Prozesse optimieren und Ihr Unternehmen voranbringen.
            </p>
          </div>
        </section>

        <ServiceDetailSection
          id="excel"
          title="Excel & Datenverarbeitung"
          description="Verwandeln Sie komplexe Daten in klare Erkenntnisse und automatisierte Prozesse. Wir entwickeln maßgeschneiderte Excel-Lösungen, die Ihre Arbeitsabläufe vereinfachen, Fehler minimieren und Ihnen wertvolle Zeit sparen. Ob Datenanalyse, Dashboard-Erstellung oder VBA-Programmierung – wir machen Ihre Daten zu Ihrem stärksten Asset."
          features={[
            'Automatisierung von Berichten und Prozessen',
            'Entwicklung komplexer Excel-Tools und Dashboards',
            'Datenbereinigung, -analyse und -visualisierung',
            'Individualschulungen für effizientes Arbeiten mit Excel',
          ]}
          imageSrc="/images/excel-data.jpg"
          imageAlt="Grafik zur Datenverarbeitung in Excel"
          isImageLeft={false}
        />

        <ServiceDetailSection
          id="website"
          title="Website-Erstellung"
          description="Ihre digitale Visitenkarte im Web – wir designen und entwickeln moderne, responsive und suchmaschinenfreundliche Websites, die nicht nur großartig aussehen, sondern auch konvertieren. Von der Konzeption über das Design bis zur Implementierung mit modernsten Technologien wie Next.js und Tailwind CSS schaffen wir eine starke Online-Präsenz für Ihr Unternehmen."
          features={[
            'Konzeption und UI/UX-Design',
            'Entwicklung mit Next.js, React und Tailwind CSS',
            'Mobile Responsivität und Performance-Optimierung',
            'SEO-freundliche Implementierung',
          ]}
          imageSrc="/images/website-creation.jpg"
          imageAlt="Moderne Website auf Laptop und Smartphone"
          isImageLeft={true}
        />

        <ServiceDetailSection
          id="automatisierung"
          title="Digitale Automatisierung"
          description="Befreien Sie sich von repetitiven Aufgaben und steigern Sie Ihre Effizienz drastisch. Wir analysieren Ihre Geschäftsprozesse und implementieren maßgeschneiderte Automatisierungslösungen, die Ihre Workflows optimieren. Von der Datenextraktion bis zur Erstellung automatischer Berichte – wir machen Ihr Unternehmen smarter."
          features={[
            'Automatisierung von Office-Prozessen (z.B. mit VBA/Power Automate)',
            'Einrichtung von API-Integrationen',
            'Entwicklung von Bots für repetitive Aufgaben',
            'Beratung und Implementierung von Workflow-Automatisierung',
          ]}
          imageSrc="/images/automation.jpg"
          imageAlt="Roboterhand automatisiert Prozesse"
          isImageLeft={false}
        />

        <ServiceDetailSection
          id="it-beratung"
          title="IT-Beratung"
          description="Navigieren Sie sicher durch die digitale Landschaft. Unsere IT-Beratung bietet strategische Unterstützung und maßgeschneiderte Empfehlungen für Ihre technologischen Herausforderungen. Ob Systemoptimierung, Software-Auswahl oder Cybersicherheit – wir sind Ihr Partner für eine zukunftssichere IT-Infrastruktur."
          features={[
            'Strategische IT-Planung und -Optimierung',
            'Beratung bei Hard- und Softwareauswahl',
            'Sicherheitskonzepte und -audits',
            'Cloud-Strategien und Migration',
          ]}
          imageSrc="/images/it-consulting.jpg"
          imageAlt="IT-Spezialisten analysieren Daten"
          isImageLeft={true}
        />

        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Dienstleistungen;