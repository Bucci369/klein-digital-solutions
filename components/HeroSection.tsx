import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen bg-white text-gray-900 relative overflow-hidden flex items-center"
      style={{
        transform: `translateY(${scrollY * 0.5}px)`,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-gray-100/30 to-gray-200/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px) translateY(${scrollY * 0.2}px)`,
            top: '10%',
            left: '10%',
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-100/20 to-gray-100/20 rounded-full blur-2xl"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px) translateY(${scrollY * 0.1}px)`,
            bottom: '20%',
            right: '15%',
          }}
        ></div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${30 + (i * 20)}%`,
              top: `${40 + (i * 10)}%`,
              transform: `translateY(${scrollY * (0.05 + i * 0.02)}px)`,
              animationDelay: `${i * 1}s`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Centered Minimalist Hero Content */}
        <div className="text-center max-w-6xl mx-auto">
          <div 
            className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <div className="space-y-8 mb-12">
              {[
                { text: 'Wir erschaffen', delay: 0, size: 'text-2xl lg:text-3xl', weight: 'font-light' },
                { text: 'außergewöhnliche Websites', delay: 300, highlight: true, size: 'text-4xl lg:text-5xl xl:text-6xl', weight: 'font-bold' },
                { text: 'die Ihre Marke zum Leben erwecken', delay: 600, size: 'text-xl lg:text-2xl', weight: 'font-light' },
              ].map((line, index) => (
                <div 
                  key={index}
                  className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                  style={{
                    transitionDelay: `${line.delay + 500}ms`,
                  }}
                >
                  <div 
                    className={`${line.size} ${line.weight} leading-tight ${
                      line.highlight 
                        ? 'bg-gradient-to-r from-blue-600 to-gray-600 bg-clip-text text-transparent' 
                        : 'text-gray-800'
                    }`}
                  >
                    {line.text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Simple elegant line */}
            <div 
              className={`h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto transition-all duration-1000 delay-1200 mb-12 ${
                isVisible ? 'w-96 opacity-100' : 'w-0 opacity-0'
              }`}
            ></div>
            
            <p 
              className={`text-lg lg:text-xl mb-12 text-gray-600 font-light leading-relaxed max-w-3xl mx-auto transform transition-all duration-1000 delay-1300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            >
              Von der ersten Idee bis zum Launch – wir entwickeln{' '}
              <span className="text-gray-900 font-medium">digitale Lösungen</span>, die begeistern.
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-1400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <Link href="/kontakt">
                <button className="btn-primary hover:scale-102 transition-all duration-300">
                  Website erstellen lassen
                </button>
              </Link>
              <Link href="#portfolio">
                <button className="btn-secondary hover:scale-102 transition-all duration-300">
                  Portfolio ansehen
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center hover:border-blue-500 transition-colors duration-300 group">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse group-hover:bg-blue-500 transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;