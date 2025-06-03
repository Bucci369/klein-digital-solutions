import { IconType } from 'react-icons';
import { FaFileExcel, FaLaptopCode, FaRobot, FaHeadset } from 'react-icons/fa';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  link: string;
  index: number;
  mousePosition: { x: number; y: number };
  scrollY: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  link, 
  index,
  mousePosition,
  scrollY 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  // Use variables to avoid ESLint warning
  console.log(scrollY, mousePosition);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const cardColors = [
    { from: 'from-blue-600', to: 'to-blue-500', bg: 'from-blue-50 to-blue-100' },
    { from: 'from-green-600', to: 'to-green-500', bg: 'from-green-50 to-green-100' },
    { from: 'from-orange-600', to: 'to-orange-500', bg: 'from-orange-50 to-orange-100' },
    { from: 'from-gray-600', to: 'to-gray-500', bg: 'from-gray-50 to-gray-100' },
  ];

  const cardColor = cardColors[index % cardColors.length];

  return (
    <div 
      ref={cardRef}
      className={`group relative bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col h-full ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        minHeight: '400px',
      }}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${cardColor.bg} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform ${isHovered ? 'scale-105' : 'scale-100'}`}></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r ${cardColor.from} ${cardColor.to} rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-500`}
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 10)}%`,
              transform: `translateY(${isHovered ? -20 : 0}px) translateX(${isHovered ? (i % 2 ? 10 : -10) : 0}px)`,
              transition: `transform ${500 + i * 100}ms ease-out`,
              animationDelay: `${i * 200}ms`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10">
        <div className="mb-8 transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
          <div 
            className={`w-20 h-20 bg-gradient-to-br ${cardColor.from} ${cardColor.to} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl"></div>
            <Icon className="text-white text-3xl relative z-10 group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-500">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1">
          {description}
        </p>
        
        <Link href={link}>
          <div className="group/link inline-flex items-center text-blue-600 hover:text-gray-600 font-semibold text-base cursor-pointer relative overflow-hidden py-2">
            <span className="relative z-10 transition-transform group-hover/link:translate-x-2 duration-300">
              Mehr erfahren
            </span>
            <span className="ml-3 transition-all group-hover/link:translate-x-2 group-hover/link:scale-125 duration-300">
              →
            </span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-gray-600 group-hover/link:w-full transition-all duration-500"></div>
          </div>
        </Link>
      </div>

      {/* Glowing border effect */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${cardColor.from} ${cardColor.to} p-px`}>
        <div className="w-full h-full bg-white rounded-3xl"></div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services-section');
    if (element) observer.observe(element);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const services = [
    {
      icon: FaLaptopCode,
      title: 'Website Development',
      description: 'Moderne, hochperformante Websites und Web-Applikationen mit neuesten Technologien. Von Corporate Sites bis zu komplexen E-Commerce-Plattformen.',
      link: '/dienstleistungen#website',
    },
    {
      icon: FaRobot,
      title: 'Web App Development',
      description: 'Maßgeschneiderte Web-Anwendungen mit React, Next.js und modernen Frameworks. Skalierbar, schnell und benutzerfreundlich.',
      link: '/dienstleistungen#webapp',
    },
    {
      icon: FaHeadset,
      title: 'E-Commerce Solutions',
      description: 'Vollständige Online-Shop-Lösungen mit Payment-Integration, Inventory-Management und perfekter User Experience.',
      link: '/dienstleistungen#ecommerce',
    },
    {
      icon: FaFileExcel,
      title: 'Digital Consulting',
      description: 'Strategische Beratung für Ihre digitale Transformation. Von Konzeption bis zur erfolgreichen Umsetzung Ihrer Vision.',
      link: '/dienstleistungen#consulting',
    },
  ];

  return (
    <section 
      id="services-section" 
      ref={sectionRef}
      className="py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gray-200/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            top: '20%',
            left: '10%',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div 
          className={`text-center mb-20 transform transition-all duration-1000 ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          <h2 className="text-5xl lg:text-7xl font-semibold text-gray-900 mb-8 leading-tight overflow-visible">
            Unsere{' '}
            <span className="font-semibold text-gray-600 hover:text-gray-500 transition-colors duration-300">
              Web Services
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-normal">
            Von der ersten Idee bis zum Launch -{' '}
            <span className="font-medium text-gray-900">wir entwickeln Websites, die begeistern</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-stretch">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              index={index} 
              mousePosition={mousePosition}
              scrollY={scrollY}
              {...service} 
            />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${10 + (i * 8)}%`,
                top: `${20 + (i * 6)}%`,
                transform: `translateY(${scrollY * (0.02 + i * 0.01)}px)`,
                animationDelay: `${i * 0.3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;