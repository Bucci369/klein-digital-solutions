import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import InteractiveShowcase from '../components/InteractiveShowcase';
import KeyBenefitsSection from '../components/KeyBenefitsSection'; // Neu
import WhyChooseUsSection from '../components/WhyChooseUsSection'; // Neu
import TestimonialsSection from '../components/TestimonialsSection'; // Neu
import CallToAction from '../components/CallToAction'; // Vorhanden

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Klein Digital Solutions - Website Development & Digital Innovation</title>
        <meta name="description" content="Professionelle Website-Entwicklung und digitale Lösungen. Moderne Web-Apps, E-Commerce und maßgeschneiderte digitale Erlebnisse." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <InteractiveShowcase />
        <KeyBenefitsSection /> {/* Neue Sektion */}
        <WhyChooseUsSection /> {/* Neue Sektion */}
        <TestimonialsSection /> {/* Neue Sektion */}
        {/* <ClientsLogosSection />  Optional, falls Sie Kundelogo haben */}
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Home;