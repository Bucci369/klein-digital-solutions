import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import AboutSection from './AboutSection';
import CallToAction from './CallToAction';

const UeberMich = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Über uns - Klein Digital Solutions | Full-Stack Web Developer</title>
        {/* Geänderte Beschreibung hier: */}
        <meta name="description" content="Erfahren Sie, wie Klein Digital Solutions als Ihr Partner für Full-Stack Web Development moderne, leistungsstarke Web-Anwendungen mit React, Next.js und TypeScript realisiert." />
      </Head>

      <Header />

      <main className="flex-grow mt-20">
        <AboutSection />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default UeberMich;