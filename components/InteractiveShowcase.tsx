import { useEffect, useState, useRef } from 'react';
import { FaCode, FaDatabase, FaCloud, FaMobile, FaShieldAlt, FaRocket } from 'react-icons/fa';

const InteractiveShowcase = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });

        // Custom cursor effect
        if (cursorRef.current) {
          cursorRef.current.style.left = `${e.clientX}px`;
          cursorRef.current.style.top = `${e.clientY}px`;
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Auto-rotate cards
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 6);
    }, 3000);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const technologies = [
    { icon: FaCode, name: 'Frontend Development', color: 'from-blue-500 to-cyan-500' },
    { icon: FaDatabase, name: 'Database Design', color: 'from-green-500 to-emerald-500' },
    { icon: FaCloud, name: 'Cloud Solutions', color: 'from-purple-500 to-pink-500' },
    { icon: FaMobile, name: 'Mobile Apps', color: 'from-orange-500 to-red-500' },
    { icon: FaShieldAlt, name: 'Security', color: 'from-gray-500 to-slate-600' },
    { icon: FaRocket, name: 'Performance', color: 'from-yellow-500 to-amber-500' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden"
      style={{
        zIndex: 1,
      }}
    >
      {/* Custom cursor - only active within section */}
      <div 
        ref={cursorRef}
        className="absolute w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full pointer-events-none z-10 mix-blend-difference transition-transform duration-100 opacity-0"
        style={{
          transform: `translate(-50%, -50%) scale(${mousePosition.x !== 0 || mousePosition.y !== 0 ? 1 : 0})`,
        }}
      ></div>

      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          }}
        ></div>
      </div>

      {/* Floating orbs - reduced amount */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${15 + (i * 10)}%`,
              top: `${25 + (i * 8)}%`,
              transform: `
                translateY(${scrollY * (0.02 + i * 0.005)}px) 
                translateX(${mousePosition.x * (5 + i)}px)
              `,
              animationDelay: `${i * 0.2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div 
          className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <h2 
            className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-8 leading-tight"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 5}deg)`,
            }}
          >
            Technologie
            <span className="block text-4xl lg:text-6xl font-light text-blue-400">
              die begeistert
            </span>
          </h2>
        </div>

        {/* 3D Technology Showcase */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              const isActive = index === activeCard;
              
              return (
                <div
                  key={index}
                  className={`
                    group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 
                    transition-all duration-700 cursor-pointer
                    ${isActive ? 'scale-105 shadow-2xl shadow-blue-500/20' : 'hover:scale-102'}
                  `}
                  style={{
                    transform: isActive ? 'translateZ(0px)' : 'translateZ(0px)',
                  }}
                  onMouseEnter={() => setActiveCard(index)}
                >
                  {/* Glowing background */}
                  <div 
                    className={`
                      absolute inset-0 bg-gradient-to-br ${tech.color} rounded-3xl opacity-0 
                      group-hover:opacity-20 transition-opacity duration-500 blur-xl
                    `}
                  ></div>

                  <div className="relative z-10">
                    <div 
                      className={`
                        w-20 h-20 bg-gradient-to-br ${tech.color} rounded-2xl 
                        flex items-center justify-center mb-6 mx-auto
                        group-hover:scale-105 group-hover:rotate-6 transition-all duration-500
                        shadow-lg group-hover:shadow-2xl
                      `}
                      style={{
                        transform: 'translateZ(0px)',
                      }}
                    >
                      <Icon className="text-white text-3xl" />
                    </div>
                    
                    <h3 
                      className="text-white text-xl font-semibold text-center group-hover:text-blue-300 transition-colors duration-300"
                      style={{
                        transform: 'translateZ(0px)',
                      }}
                    >
                      {tech.name}
                    </h3>
                  </div>

                  {/* Particle effects */}
                  {isActive && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${tech.color} rounded-full animate-ping`}
                          style={{
                            left: `${20 + (i * 10)}%`,
                            top: `${15 + (i * 8)}%`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive text that follows mouse */}
        <div className="mt-20 text-center">
          <p className="text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
            Erleben Sie modernste Technologien in einer{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text font-medium">
              interaktiven Umgebung
            </span>
            , die Ihre digitale Vision zum Leben erweckt.
          </p>
        </div>

        {/* Scroll indicator with parallax */}
        <div 
          className="flex justify-center mt-16"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div className="relative">
            <div className="w-1 h-20 bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
            <div className="absolute top-0 w-1 h-8 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveShowcase;