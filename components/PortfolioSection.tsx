// components/PortfolioSection.tsx
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaReact, FaJs, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel, SiFramer, SiSanity } from 'react-icons/si';
import { HiCode } from 'react-icons/hi';

interface ProjectCardProps {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  index: number;
  previewImage: string; // Neu: Pfad zum Screenshot
  category: string; // Neu: Kategorie für Badge
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  liveUrl,
  githubUrl,
  technologies,
  index,
  previewImage,
  category,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

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
      case 'sanity': return <SiSanity className="w-4 h-4" />;
      default: return <HiCode className="w-4 h-4" />;
    }
  };

  return (
    <div
      className={`group relative bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-slate-600/50 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-slate-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Website Preview */}
      <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-slate-800">
        {/* Placeholder während das Bild lädt */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-gray-300 dark:border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Website Screenshot */}
        <Image
          src={previewImage}
          alt={`${title} Preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover object-top transition-all duration-700 ${isHovered ? 'scale-105' : 'scale-100'} ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          priority={index < 3}
        />
        
        {/* Overlay mit Hover-Effekt */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-0'}`}>
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            {liveUrl && (
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg">
                  <FaExternalLinkAlt className="text-gray-800" />
                </div>
              </Link>
            )}
            {githubUrl && (
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg">
                  <FaGithub className="text-white" />
                </div>
              </Link>
            )}
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
            {category}
          </span>
        </div>
        
        {/* Live Indicator */}
        {liveUrl && (
          <div className="absolute top-4 right-4">
            <div className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full flex items-center gap-2 shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Live
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech, techIndex) => (
            <div
              key={techIndex}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 dark:bg-slate-600 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300"
            >
              {getTechIcon(tech)}
              <span>{tech}</span>
            </div>
          ))}
          {technologies.length > 4 && (
            <div className="px-2.5 py-1 bg-gray-100 dark:bg-slate-600 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300">
              +{technologies.length - 4}
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          {liveUrl && (
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm">
                <FaExternalLinkAlt className="w-3 h-3" />
                Website besuchen
              </button>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 border border-gray-300 dark:border-slate-500 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors duration-200 flex items-center gap-2 text-sm">
                <FaGithub className="w-4 h-4" />
                Code
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setSectionVisible(true);
    }, { threshold: 0.1 });

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) observer.observe(currentSectionRef);

    return () => {
      if (currentSectionRef) observer.unobserve(currentSectionRef);
      observer.disconnect();
    };
  }, []);

  const projectsData: Omit<ProjectCardProps, 'index'>[] = [
    {
      title: 'Eisdiele Venezia',
      description: 'Moderne Website für eine italienische Eisdiele mit Online-Menü und Standortinformationen.',
      liveUrl: 'https://eis-diele.vercel.app/',
      githubUrl: 'https://github.com/Bucci369/eis-diele',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Sanity'],
      previewImage: '/images/eisdiele-preview.jpg', // Du musst diese Screenshots erstellen
      category: 'Gastronomie'
    },
    {
      title: 'Beauty Salon Elegance',
      description: 'Elegante Online-Präsenz für einen Kosmetiksalon mit Terminbuchungssystem.',
      liveUrl: 'https://kosmetik-website.vercel.app',
      githubUrl: 'https://github.com/yourusername/beauty-salon',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Chart.js', 'Vercel'],
      previewImage: '/images/beauty-preview.jpg',
      category: 'Beauty & Wellness'
    },
    {
      title: 'DJ Arado',
      description: 'Dynamische Artist-Website mit Musikplayer, Tour-Daten und Social Media Integration.',
      liveUrl: 'https://dj-arado-website.vercel.app/',
      githubUrl: 'https://github.com/Bucci369/dj_arado_website',
      technologies: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript', 'Vercel'],
      previewImage: '/images/dj-preview.jpg',
      category: 'Musik & Entertainment'
    },
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-50 dark:bg-slate-800 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div
          className={`text-center mb-16 md:mb-20 transform transition-all duration-1000 ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <h2 className="text-5xl lg:text-7xl font-light text-gray-900 dark:text-white mb-6 md:mb-8 leading-tight">
            Unsere{' '}
            <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Referenzen
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Entdecken Sie eine Auswahl unserer erfolgreich umgesetzten Projekte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              {...project}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 md:mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 bg-white dark:bg-slate-700 backdrop-blur-sm rounded-2xl px-6 sm:px-8 py-6 shadow-xl border border-gray-100 dark:border-slate-600">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl">💡</span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-1">
                Haben Sie ein Projekt im Kopf?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Lassen Sie uns Ihre Vision zum Leben erwecken
              </p>
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