// PortfolioSection.tsx
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaReact, FaJs, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel, SiFramer } from 'react-icons/si';
import { HiSparkles, HiGlobeAlt, HiCode } from 'react-icons/hi';

interface ProjectCardProps {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  index: number;
  primaryColor: string;
  secondaryColor: string;
  icon: React.ReactNode;  
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  liveUrl,
  githubUrl,
  technologies,
  index,
  primaryColor,
  secondaryColor,
  icon,  
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 300);
    return () => clearTimeout(timer);
  }, [index]);

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'next.js': return <SiNextdotjs className="w-4 h-4" />;
      case 'react': return <FaReact className="w-4 h-4" />;
      case 'typescript': return <SiTypescript className="w-4 h-4" />;
      case 'javascript': return <FaJs className="w-4 h-4" />;
      case 'tailwind': return <SiTailwindcss className="w-4 h-4" />;
      case 'css3': return <FaCss3Alt className="w-4 h-4" />;
      case 'vercel': return <SiVercel className="w-4 h-4" />;
      case 'framer motion': return <SiFramer className="w-4 h-4" />;
      default: return <HiCode className="w-4 h-4" />;
    }
  };

  return (
    <div
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* HEADER BEREICH MIT FARBVERLAUF UND ICONS */}
      <div
        className="relative h-48 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` // <-- HIER IST DEIN FARBVERLAUF WIEDER
        }}
      >
        {/* KEIN BILD HIER */}
        {/* KEIN Gradient Overlay über dem Bild mehr, da kein Bild */}

        {/* Pattern Overlay (bleibt wie vorher) */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,.1) 10px,
              rgba(255,255,255,.1) 20px
            )`
          }}></div>
        </div>

        {/* Floating Icon (Angepasste Größe & z-Index bleibt) */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className={`text-white w-16 h-16 md:w-24 md:h-24 transition-all duration-500 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
            {icon}
          </div>
        </div>

        {/* Floating Particles (bleibt wie vorher, mit höherem z-Index) */}
        <div className="absolute inset-0 z-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Action Buttons (bleibt wie vorher, mit höherem z-Index) */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-20">
          {liveUrl && (
            <Link href={liveUrl} target="_blank">
              <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg">
                <FaExternalLinkAlt className="text-gray-700" />
              </div>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank">
              <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg">
                <FaGithub className="text-gray-700" />
              </div>
            </Link>
          )}
        </div>

        {/* Live Badge (bleibt wie vorher, mit höherem z-Index) */}
        {liveUrl && (
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
            <div className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Live
            </div>
          </div>
        )}
      </div>

      {/* Content (bleibt wie vorher) */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Technology Stack (bleibt wie vorher) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, techIndex) => (
            <div
              key={techIndex}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
            >
              {getTechIcon(tech)}
              <span>{tech}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons (Bleibt wie vorher, mit flex-grow für Live Demo Button) */}
        <div className="flex gap-3">
          {liveUrl && (
            <Link href={liveUrl} target="_blank" className="flex-grow">
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                <FaExternalLinkAlt />
                Live Demo
              </button>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank">
              <button className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:border-gray-800 hover:text-gray-800 transition-all duration-300 flex items-center gap-2">
                <FaGithub />
                Code
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Hover Glow Effect (bleibt wie vorher) */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${primaryColor}20, transparent 70%)`
        }}
      ></div>
    </div>
  );
};

// HINWEIS: Hier beginnt die PortfolioSection Komponente.
const PortfolioSection = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Moderne E-Commerce Lösung mit Headless CMS, Payment Integration und Inventory Management. Optimiert für Conversion und Performance.',
    liveUrl: 'https://demo-shop.vercel.app/',
    technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Sanity'],
    primaryColor: '#8B5CF6',
    secondaryColor: '#3B82F6',
    icon: <HiSparkles className="w-24 h-24" />,
  },
  {
    title: 'SaaS Dashboard',
    description: 'Interaktives Analytics Dashboard mit Echtzeit-Daten, Charts und KPI-Tracking. Clean UI mit Dark Mode Support.',
    liveUrl: 'https://analytics-dashboard-demo.vercel.app/',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Chart.js', 'WebSockets'],
    primaryColor: '#F59E0B',
    secondaryColor: '#EF4444',
    icon: <HiGlobeAlt className="w-24 h-24" />,
  },
  {
    title: 'Portfolio Website',
    description: 'Kreative Portfolio-Website mit 3D-Animationen und reaktionsschnellem Design für eine beeindruckende Online-Präsenz.', // <-- HIER IST DER VERLÄNGERTE TEXT
    liveUrl: 'https://dj-arado-website.vercel.app/', // Deine Website
    technologies: ['Next.js', 'Three.js', 'Framer Motion', 'GSAP', 'Vercel'],
    primaryColor: '#10B981',
    secondaryColor: '#06B6D4',
    icon: <HiCode className="w-24 h-24" />,
  },
];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-32 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            top: '10%',
            right: '10%',
          }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-orange-100/20 to-pink-100/20 rounded-full blur-2xl"
          style={{
            transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`,
            bottom: '20%',
            left: '15%',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <h2 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight">
            Unser{' '}
            <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Entdecken Sie unsere{' '}
            <span className="font-medium text-blue-600">Website-Projekte</span> und lassen Sie sich inspirieren
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              {...project}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-20"
          style={{
            transform: `translateY(${scrollY * 0.02}px)`,
          }}
        >
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">💡</span>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">Haben Sie ein Projekt im Kopf?</h3>
              <p className="text-gray-600">Lassen Sie uns Ihre Vision zum Leben erwecken</p>
            </div>
            <Link href="/kontakt">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Projekt starten
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;