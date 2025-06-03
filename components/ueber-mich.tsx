import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import AboutSection from './AboutSection';
import CallToAction from './CallToAction';

const UeberMich = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Über mich - KleinDev | Full-Stack Web Developer</title>
        <meta name="description" content="Erfahren Sie mehr über mich als Full-Stack Web Developer. Meine Expertise in React, Next.js und moderne Web-Technologien." />
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