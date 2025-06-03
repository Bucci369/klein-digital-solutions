import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiArrowRight, HiCode } from 'react-icons/hi'; // HiLightningBolt entfernt
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const techStack = [
    { name: 'React', icon: SiReact, color: 'text-blue-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' }, // Farbe für Dark Mode angepasst
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-20 md:pt-24"> {/* Padding-Top hinzugefügt und Dark Mode Background */}
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
            top: '10%',
            left: '10%',
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 dark:from-cyan-600/30 dark:to-blue-600/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`,
            bottom: '20%',
            right: '15%',
          }}
        />

        {/* Floating Code Symbols */}
        <div className="absolute inset-0">
          {[
            { symbol: '</>', top: '15%', left: '80%', delay: 0 },
            { symbol: '{ }', top: '70%', left: '10%', delay: 1 },
            { symbol: '[ ]', top: '40%', left: '90%', delay: 2 },
            { symbol: '( )', top: '80%', left: '70%', delay: 3 },
            { symbol: '//', top: '25%', left: '5%', delay: 4 },
          ].map((item, index) => (
            <div
              key={index}
              className="absolute text-2xl font-mono text-gray-300 dark:text-gray-700 animate-float" // Dark Mode angepasst
              style={{
                top: item.top,
                left: item.left,
                animationDelay: `${item.delay}s`,
                animationDuration: '6s', // Dauer ggf. anpassen, wenn zu schnell/langsam
              }}
            >
              {item.symbol}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Das "Full-Stack Web Developer"-Badge ist hier nicht mehr vorhanden, wie gewünscht */}

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Moderne Web-Apps
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                die begeistern
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Wir entwickeln performante, skalierbare und nutzerfreundliche Web-Anwendungen
              mit modernsten Technologien. Von der Konzeption bis zum Deploy.
            </p>

            {/* Tech Stack Icons */}
            <div className="flex justify-center gap-4 sm:gap-6 mb-12"> {/* Gap für kleinere Screens angepasst */}
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 0.1}s`, // Für gestaffelte Animation, falls .animate-fade-in genutzt wird
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <tech.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${tech.color}`} /> {/* Größe für kleinere Screens angepasst */}
                    <span className="absolute -bottom-7 sm:-bottom-8 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#portfolio">
                <button className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Projekte ansehen</span>
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/kontakt">
                <button className="group relative w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-700 text-gray-700 dark:text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 border border-gray-200 dark:border-gray-600 flex items-center justify-center gap-2">
                  <HiCode className="w-5 h-5" />
                  <span>Projekt starten</span>
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Die <style jsx>-Tags bleiben unverändert, da sie die Animationen definieren */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(5deg);
          }
          66% {
            transform: translateY(10px) rotate(-5deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;