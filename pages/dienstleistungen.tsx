import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceDetailSection from '../components/ServiceDetailSection';
import CallToAction from '../components/CallToAction';

const Dienstleistungen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Web Development Services - KleinDev</title>
        <meta name="description" content="Professionelle Web Development Services: React, Next.js, E-Commerce, Performance Optimierung. Moderne Web-Anwendungen die begeistern." />
      </Head>

      <Header />

      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-br from-blue-700 to-purple-700 text-white text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Web Development Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Moderne, performante und skalierbare Web-Lösungen mit den neuesten Technologien
            </p>
          </div>
        </section>

        <ServiceDetailSection
          id="webdev"
          title="Full-Stack Web Development"
          description="Von der Konzeption bis zum Deployment entwickle ich maßgeschneiderte Web-Anwendungen, die Ihre Geschäftsziele unterstützen. Mit modernsten Technologien wie React, Next.js und Node.js entstehen robuste, skalierbare Lösungen, die Ihre Nutzer begeistern werden."
          features={[
            'Single Page Applications (SPA) mit React',
            'Server-Side Rendering (SSR) mit Next.js',
            'RESTful APIs und GraphQL Backends',
            'Datenbankdesign und -optimierung',
            'Authentication und Authorization',
            'Cloud Deployment (Vercel, AWS, Netlify)'
          ]}
          imageSrc="/images/web-development.jpg"
          imageAlt="Modern Web Development"
          isImageLeft={false}
        />

        <ServiceDetailSection
          id="frontend"
          title="Frontend Development"
          description="Pixel-perfekte Umsetzung Ihrer Designs in lebendige, interaktive Benutzeroberflächen. Mit einem Auge fürs Detail und modernsten Frontend-Technologien schaffe ich User Experiences, die nicht nur gut aussehen, sondern auch intuitiv bedienbar sind."
          features={[
            'Responsive Design für alle Geräte',
            'Moderne CSS mit Tailwind CSS',
            'Smooth Animationen mit Framer Motion',
            'Component-based Architecture',
            'State Management (Redux, Zustand)',
            'Accessibility (WCAG) Standards'
          ]}
          imageSrc="/images/frontend-development.jpg"
          imageAlt="Frontend Development"
          isImageLeft={true}
        />

        <ServiceDetailSection
          id="ecommerce"
          title="E-Commerce Entwicklung"
          description="Leistungsstarke Online-Shops, die verkaufen. Von kleinen Boutique-Shops bis zu großen E-Commerce-Plattformen entwickle ich Lösungen, die Ihre Produkte optimal präsentieren und den Checkout-Prozess optimieren."
          features={[
            'Headless Commerce mit Shopify/Commerce.js',
            'Custom E-Commerce Lösungen',
            'Payment Gateway Integration (Stripe, PayPal)',
            'Inventory und Order Management',
            'Shopping Cart Optimierung',
            'Conversion Rate Optimierung'
          ]}
          imageSrc="/images/ecommerce.jpg"
          imageAlt="E-Commerce Development"
          isImageLeft={false}
        />

        <ServiceDetailSection
          id="performance"
          title="Performance & SEO Optimierung"
          description="Schnelle Ladezeiten und Top-Rankings in Suchmaschinen. Ich optimiere Ihre Web-Anwendung für maximale Performance und Sichtbarkeit. Mit modernen Techniken und Best Practices sorge ich dafür, dass Ihre Website blitzschnell lädt und von Suchmaschinen geliebt wird."
          features={[
            'Core Web Vitals Optimierung',
            'Lighthouse Score 95+ garantiert',
            'Technical SEO Implementation',
            'Image und Asset Optimierung',
            'Code Splitting und Lazy Loading',
            'Performance Monitoring Setup'
          ]}
          imageSrc="/images/performance-seo.jpg"
          imageAlt="Performance und SEO Optimierung"
          isImageLeft={true}
        />

        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Dienstleistungen;