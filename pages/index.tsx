import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import InteractiveShowcase from '../components/InteractiveShowcase';
import CallToAction from '../components/CallToAction';
import AboutSection from '../components/AboutSection'; // <-- HIER HINZUFÜGEN

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Klein Digital Solutions - Full-Stack Web Development | React, Next.js & TypeScript</title>
        <meta name="description" content="Full-Stack Web Developer spezialisiert auf moderne Web-Anwendungen mit React, Next.js und TypeScript. Performante, skalierbare Lösungen die begeistern." />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Social Media Tags */}
        <meta property="og:title" content="KleinDev - Full-Stack Web Developer" />
        <meta property="og:description" content="Moderne Web-Anwendungen mit React, Next.js und TypeScript" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kleindev.de" />

        {/* Additional SEO */}
        <meta name="keywords" content="Web Developer, React, Next.js, TypeScript, Full-Stack, Frontend, JavaScript, Web Development" />
        <meta name="author" content="Klein" />
      </Head>

      <Header />

      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection /> {/* <-- HIER ODER AN EINER ANDEREN STELLE EINFÜGEN */}
        <PortfolioSection />
        <InteractiveShowcase />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Home;