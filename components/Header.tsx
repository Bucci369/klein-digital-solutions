import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="/">
          <div className={`text-2xl tracking-tight cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
            <span className="font-bold">Klein</span> Digital <span className="font-medium text-blue-600">Solutions</span>
          </div>
        </Link>
        
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/">
                <span className={`relative text-sm font-medium transition-colors duration-300 hover:text-blue-600 cursor-pointer group ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`}>
                  Startseite
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/dienstleistungen">
                <span className={`relative text-sm font-medium transition-colors duration-300 hover:text-blue-600 cursor-pointer group ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`}>
                  Dienstleistungen
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/ueber-uns">
                <span className={`relative text-sm font-medium transition-colors duration-300 hover:text-blue-600 cursor-pointer group ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`}>
                  Über uns
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/kontakt">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm font-medium transition-all duration-300 hover:shadow-lg">
                  Kontakt
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        <button 
          className="lg:hidden flex flex-col space-y-1 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <ul className="container mx-auto px-6 py-6 space-y-4">
            <li>
              <Link href="/">
                <span className="block text-gray-700 hover:text-blue-600 font-medium py-2 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                  Startseite
                </span>
              </Link>
            </li>
            <li>
              <Link href="/dienstleistungen">
                <span className="block text-gray-700 hover:text-blue-600 font-medium py-2 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                  Dienstleistungen
                </span>
              </Link>
            </li>
            <li>
              <Link href="/ueber-uns">
                <span className="block text-gray-700 hover:text-blue-600 font-medium py-2 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                  Über uns
                </span>
              </Link>
            </li>
            <li>
              <Link href="/kontakt">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                  Kontakt
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;