import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  HiCode, HiLightningBolt, HiShoppingCart, HiChartBar, HiArrowRight, HiCheck,
  HiServer
} from 'react-icons/hi';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  gradient: string;
  link: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title, description, icon, features, gradient, link, index
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentCardRef = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      }, { threshold: 0.1 }
    );
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }
    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
      observer.disconnect();
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`relative group transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Kartenhintergrund etwas heller als Sektionshintergrund für Kontrast */}
      <div className="relative h-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl dark:hover:shadow-slate-700/50 transition-all duration-300 overflow-hidden">
        <div className={`absolute inset-0 opacity-5 ${gradient}`} />
        <div className="relative p-8 h-full flex flex-col">
          <div className={`w-16 h-16 rounded-xl ${gradient} flex items-center justify-center mb-6 transform transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
            <div className="text-white text-2xl">{icon}</div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{description}</p>
          <ul className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <HiCheck className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <Link href={link}>
            <button className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn ${gradient} text-white hover:shadow-lg transform hover:-translate-y-0.5`}>
              <span>Mehr erfahren</span>
              <HiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
          <div className={`absolute inset-[2px] rounded-2xl ${gradient} opacity-20`} />
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services: ServiceCardProps[] = [
    {
      title: 'Web Development', description: 'Moderne, responsive Websites und Web-Apps...', icon: <HiCode />,
      features: ['Single Page Applications (SPA)', 'Server-Side Rendering (SSR)', 'Progressive Web Apps (PWA)', 'API Integration & Development'],
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-700', link: '/web-development', index: 0
    },
    {
      title: 'Frontend Development', description: 'Pixel-perfekte Umsetzung von Designs...', icon: <HiLightningBolt />,
      features: ['Responsive Design', 'CSS Animationen & Transitions', 'Component Libraries', 'Cross-Browser Kompatibilität'],
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-700', link: '/frontend-development', index: 1
    },
    {
      title: 'Backend-Lösungen',
      description: 'Robuste und skalierbare APIs & Systeme – KI-gestützt entwickelt.',
      icon: <HiServer />,
      features: [
        'REST & GraphQL APIs',
        'Auth-Systeme mit JWT & OAuth',
        'Datenbankdesign (SQL/NoSQL)',
        'Webhook- & 3rd-Party-Integrationen'
      ],
      gradient: 'bg-gradient-to-br from-purple-500 to-indigo-700',
      link: '/backend-loesungen',
      index: 2
    },
    {
      title: 'Performance & SEO', description: 'Optimierung von Ladezeiten...', icon: <HiChartBar />,
      features: ['Core Web Vitals Optimierung', 'Lighthouse Score 90+', 'Technical SEO', 'Performance Monitoring'],
      gradient: 'bg-gradient-to-br from-orange-500 to-red-600', link: '/performance-seo', index: 3
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="dienstleistungen"
      // NEUER Dark Mode Haupt-Sektionshintergrund:
      className="py-20 lg:py-32 bg-gray-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-blue-100 dark:bg-blue-700/20 rounded-full blur-3xl opacity-20 dark:opacity-30"
          style={{
            transform: `translate(${mousePosition.x * 100 - 50}px, ${mousePosition.y * 100 - 50}px)`,
            top: '10%', left: '20%',
          }}
        />
        <div
          className="absolute w-96 h-96 bg-purple-100 dark:bg-purple-700/20 rounded-full blur-3xl opacity-20 dark:opacity-30"
          style={{
            transform: `translate(${-mousePosition.x * 100 + 50}px, ${-mousePosition.y * 100 + 50}px)`,
            bottom: '10%', right: '20%',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Unsere <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Von der ersten Zeile Code bis zum fertigen Produkt - wir begleiten Sie durch den gesamten Entwicklungsprozess
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="text-center mt-20">
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Nicht das Richtige dabei? Kein Problem!
          </p>
          <Link href="/kontakt">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300">
              Individuelles Projekt besprechen
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
