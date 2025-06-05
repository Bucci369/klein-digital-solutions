// components/PortfolioSection.tsx
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
    const timer = setTimeout(() => setIsVisible(true), index * 200);
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
      className={`group relative bg-white dark:bg-slate-700 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl dark:hover:shadow-slate-600/50 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-slate-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* HEADER BEREICH */}
      <div
        className="relative h-48 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`
          }}></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className={`text-white w-16 h-16 md:w-24 md:h-24 transition-all duration-500 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
            {icon}
          </div>
        </div>
        <div className="absolute inset-0 z-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
              style={{
                left: `${15 + i * 15}%`, top: `${20 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`, animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-20">
          {liveUrl && (
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 dark:bg-slate-600/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-slate-500 transition-all duration-300 shadow-lg">
                <FaExternalLinkAlt className="text-gray-700 dark:text-gray-200" />
              </div>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 dark:bg-slate-600/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-800 dark:hover:bg-slate-500 hover:text-white dark:hover:text-gray-100 transition-all duration-300 shadow-lg">
                <FaGithub className="text-gray-700 dark:text-gray-200 group-hover:text-white dark:group-hover:text-gray-100" />
              </div>
            </Link>
          )}
        </div>
        {liveUrl && (
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
            <div className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Live
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, techIndex) => (
            <div
              key={techIndex}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-slate-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-slate-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
            >
              {getTechIcon(tech)}
              <span>{tech}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          {liveUrl && (
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-grow">
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                <FaExternalLinkAlt />
                Live Demo
              </button>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className={liveUrl ? '' : 'flex-grow'}>
              <button className={`w-full px-6 py-3 border-2 border-gray-200 dark:border-slate-500 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:border-gray-800 dark:hover:border-slate-300 hover:text-gray-800 dark:hover:text-gray-100 transition-all duration-300 flex items-center justify-center gap-2`}>
                <FaGithub />
                Code
              </button>
            </Link>
          )}
        </div>
      </div>
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${primaryColor}20, transparent 70%)` // Ggf. Opazität anpassen für Dark Mode, z.B. ${primaryColor}30
        }}
      ></div>
    </div>
  );
};

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
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setSectionVisible(true);
    }, { threshold: 0.1 });

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) observer.observe(currentSectionRef);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (currentSectionRef) observer.unobserve(currentSectionRef);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projectsData: Omit<ProjectCardProps, 'index'>[] = [
    {
      title: 'Gastronomie-Website', description: 'Websites für Eisdielen, Cafés und Restaurants', liveUrl: 'https://eis-diele.vercel.app/', githubUrl: 'https://github.com/Bucci369/eis-diele',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Sanity'],
      primaryColor: '#8B5CF6', secondaryColor: '#3B82F6', icon: <HiSparkles className="w-full h-full" />,
    },
    {
      title: 'Salon & Beauty Website', description: 'Elegante Online-Präsenz für Friseur- und Kosmetiksalons', liveUrl: '#https://kosmetik-website.vercel.app', githubUrl: 'https://kosmetik-website.vercel.app/',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Chart.js', 'Vercel'],
      primaryColor: '#F59E0B', secondaryColor: '#EF4444', icon: <HiGlobeAlt className="w-full h-full" />,
    },
    {
      // --- HERE'S THE CHANGE ---
      title: 'Artist Website', description: 'Kreative Portfolio-Website für Künstler...', liveUrl: 'https://dj-arado-website.vercel.app/', githubUrl: 'https://github.com/Bucci369/dj_arado_website',
      technologies: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript', 'Vercel'],
      primaryColor: '#10B981', secondaryColor: '#06B6D4', icon: <HiCode className="w-full h-full" />,
    },
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      // HIER ÄNDERUNG: Haupt-Sektionshintergrund auf dark:bg-slate-800 (wie Header)
      className="py-20 md:py-32 bg-white dark:bg-slate-800 relative overflow-hidden"
    >
      {/* Background Elements - ggf. anpassen, falls sie auf slate-800 zu hell/dunkel wirken */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-blue-100/10 dark:bg-blue-600/10 rounded-full blur-3xl" // Opazität leicht reduziert für subtileren Effekt
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            top: '10%', right: '10%',
          }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-orange-100/10 dark:bg-orange-500/10 rounded-full blur-2xl" // Opazität leicht reduziert
          style={{
            transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`,
            bottom: '20%', left: '15%',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div
          className={`text-center mb-16 md:mb-20 transform transition-all duration-1000 ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <h2 className="text-5xl lg:text-7xl font-light text-gray-900 dark:text-white mb-6 md:mb-8 leading-tight">
            Unser{' '}
            <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Entdecken Sie unsere{' '}
            <span className="font-medium text-blue-600 dark:text-blue-400">Website-Projekte</span> und lassen Sie sich inspirieren
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              {...project}
            />
          ))}
        </div>

        <div
          className="text-center mt-16 md:mt-20"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        >
          {/* Bottom CTA Block - Hintergrund angepasst für Kontrast zur Section */}
          <div className="inline-flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-2xl px-6 sm:px-8 py-6 shadow-xl border border-gray-100 dark:border-slate-600">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl">💡</span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-1">Haben Sie ein Projekt im Kopf?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Lassen Sie uns Ihre Vision zum Leben erwecken</p>
            </div>
            <Link href="/kontakt" className="w-full mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex-shrink-0">
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
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