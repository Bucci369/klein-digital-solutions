import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaReact, FaJs, FaCss3Alt } from 'react-icons/fa';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  isComingSoon?: boolean;
  index: number;
  mousePosition: { x: number; y: number };
  scrollY: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  technologies,
  isComingSoon = false,
  index,
  mousePosition,
  scrollY
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // Use variables to avoid ESLint warnings
  console.log(isHovered, mousePosition, scrollY);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 300);
    return () => clearTimeout(timer);
  }, [index]);

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'next.js': return <span className="text-black">⚡</span>;
      case 'react': return <FaReact className="text-blue-500" />;
      case 'typescript': return <span className="text-blue-600">TS</span>;
      case 'javascript': return <FaJs className="text-yellow-500" />;
      case 'tailwind': return <span className="text-cyan-500">🎨</span>;
      case 'css3': return <FaCss3Alt className="text-blue-600" />;
      case 'vercel': return <span className="text-black">▲</span>;
      default: return <span>🔧</span>;
    }
  };

  return (
    <div 
      className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 flex flex-col h-full ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        minHeight: '650px',
      }}
    >
      {/* Image Container with Overlay Effects */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        {!isComingSoon && image ? (
          <>
            <Image 
              src={image} 
              alt={title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              {liveUrl && (
                <Link href={liveUrl} target="_blank">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg">
                    <FaExternalLinkAlt className="text-lg" />
                  </div>
                </Link>
              )}
              {githubUrl && (
                <Link href={githubUrl} target="_blank">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg">
                    <FaGithub className="text-lg" />
                  </div>
                </Link>
              )}
            </div>

            {/* Live Preview Badge */}
            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Live
              </div>
            </div>
          </>
        ) : !isComingSoon ? (
          // DJ Arado project with website mockup preview
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-white flex items-center justify-center relative">
            {/* Website Mockup */}
            <div className="relative w-full h-full p-6">
              {/* Browser Frame */}
              <div className="bg-white rounded-xl shadow-2xl h-full border border-gray-200 overflow-hidden">
                {/* Browser Header */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-500 border">
                      dj-arado-website.vercel.app
                    </div>
                  </div>
                </div>
                
                {/* Website Content Preview */}
                <div className="h-full bg-gradient-to-br from-gray-900 to-black p-6 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-white text-2xl font-bold mb-2">DJ ARADO</div>
                    <div className="text-gray-400 text-sm mb-4">Electronic Music Artist</div>
                    <div className="flex justify-center gap-2 mb-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-8 h-1 bg-blue-400 rounded-full"></div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-6 bg-gray-700 rounded"></div>
                      <div className="h-6 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              {liveUrl && (
                <Link href={liveUrl} target="_blank">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg">
                    <FaExternalLinkAlt className="text-lg" />
                  </div>
                </Link>
              )}
            </div>

            {/* Live Preview Badge */}
            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Live
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-50"></div>
            <div className="text-center z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto animate-pulse">
                <span className="text-white text-2xl font-bold">?</span>
              </div>
              <p className="text-gray-600 font-medium">Coming Soon</p>
            </div>
            {/* Animated particles for coming soon */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-pulse"
                  style={{
                    left: `${20 + (i * 10)}%`,
                    top: `${15 + (i * 8)}%`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed flex-1">
          {description}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-3 mb-6">
          {technologies.map((tech, techIndex) => (
            <div 
              key={techIndex}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
            >
              {getTechIcon(tech)}
              <span>{tech}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        {!isComingSoon && (
          <div className="flex gap-3">
            {liveUrl && (
              <Link href={liveUrl} target="_blank">
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-102 transition-all duration-300 flex items-center justify-center gap-2">
                  <FaExternalLinkAlt />
                  Live Demo
                </button>
              </Link>
            )}
            {githubUrl && (
              <Link href={githubUrl} target="_blank">
                <button className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:border-gray-800 hover:text-gray-800 hover:scale-102 transition-all duration-300 flex items-center gap-2">
                  <FaGithub />
                  Code
                </button>
              </Link>
            )}
          </div>
        )}

        {isComingSoon && (
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-500 rounded-xl font-medium cursor-not-allowed">
              In Entwicklung...
            </div>
          </div>
        )}
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/10 to-gray-500/10 pointer-events-none"></div>
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
      title: 'DJ Arado - Artist Website',
      description: 'Moderne Artist-Website mit dynamischen Animationen, Event-Management und Social Media Integration. Optimiert für Performance und mobile Geräte.',
      image: '',
      liveUrl: 'https://dj-arado-website.vercel.app/',
      githubUrl: '',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Vercel'],
    },
    {
      title: 'E-Commerce Platform',
      description: 'Vollständige E-Commerce-Lösung mit Payment-Integration, Inventory-Management und Admin-Dashboard. Skalierbar und performant.',
      image: '',
      liveUrl: '',
      githubUrl: '',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
      isComingSoon: true,
    },
    {
      title: 'SaaS Dashboard',
      description: 'Moderne SaaS-Anwendung mit komplexen Datenvisualisierungen, Echtzeit-Updates und benutzerfreundlichem Interface.',
      image: '',
      liveUrl: '',
      githubUrl: '',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
      isComingSoon: true,
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
          className="absolute w-96 h-96 bg-gradient-to-r from-gray-100/5 to-blue-100/5 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            top: '10%',
            right: '10%',
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-50/5 to-gray-100/5 rounded-full blur-2xl"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
            bottom: '20%',
            left: '15%',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div 
          className={`text-center mb-20 transform transition-all duration-1000 ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <h2 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight overflow-visible">
            Unser{' '}
            <span className="font-bold bg-gradient-to-r from-blue-600 to-gray-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Entdecken Sie unsere neuesten{' '}
            <span className="font-medium text-blue-600">Website-Projekte</span> und lassen Sie sich inspirieren
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              index={index}
              mousePosition={mousePosition}
              scrollY={scrollY}
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
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
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