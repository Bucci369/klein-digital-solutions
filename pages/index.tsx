import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import InteractiveShowcase from '../components/InteractiveShowcase';
import CallToAction from '../components/CallToAction';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Klein Digital Solutions - Moderne Web-Anwendungen | React, Next.js & TypeScript</title>
        <meta name="description" content="Full-Stack Web Developer spezialisiert auf moderne Web-Anwendungen mit React, Next.js und TypeScript. Wir schaffen performante, skalierbare Lösungen die begeistern." />
        
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
        
        <meta property="og:title" content="Klein Digital Solutions - Ihr Partner für moderne Web-Anwendungen" />
        <meta property="og:description" content="Moderne Web-Anwendungen mit React, Next.js und TypeScript" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kleindev.de" />
        
        <meta name="keywords" content="Web Developer, React, Next.js, TypeScript, Full-Stack, Frontend, JavaScript, Web Development" />
        <meta name="author" content="Klein" />
      </Head>

      <Header />

      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <InteractiveShowcase />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Home;