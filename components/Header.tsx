import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX, HiCode } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/dienstleistungen', label: 'Services' },
    { href: '/#portfolio', label: 'Portfolio' },
    { href: '/ueber-mich', label: 'Über mich' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 group">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <HiCode className="text-white text-xl" />
              </div>
              <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
                Klein<span className="text-blue-600"> Digital Solutions</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}>
                  {link.label}
                </span>
              </Link>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center gap-4 ml-8 pl-8 border-l border-gray-300">
              <a 
                href="https://github.com/Bucci369" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`hover:text-blue-600 transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-gray-600'
                }`}
              >
                <SiGithub className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`hover:text-blue-600 transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-gray-600'
                }`}
              >
                <SiLinkedin className="text-xl" />
              </a>
            </div>

            {/* CTA Button */}
            <Link href="/kontakt">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                Projekt starten
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
          >
            {isMenuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white rounded-xl shadow-xl p-6 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span 
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex gap-4 pt-4 border-t border-gray-200">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <SiGithub className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <SiLinkedin className="text-xl" />
              </a>
            </div>

            <Link href="/kontakt">
              <button 
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Projekt starten
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;