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
    // Initial check in case the page loads already scrolled
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#dienstleistungen', label: 'Services' },
    { href: '/#portfolio', label: 'Portfolio' },
    { href: '/#ueber-mich', label: 'Über uns' },
    { href: '/#kontakt', label: 'Kontakt' },
  ];

  // Define text colors based on scroll and dark mode
  const topNavTextColor = isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-gray-800 dark:text-white';
  const topNavLogoColor = isScrolled ? 'text-gray-800 dark:text-gray-100' : 'text-gray-800 dark:text-white';
  const topNavIconColor = isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-gray-800 dark:text-white';


  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-800/95 backdrop-blur-md shadow-lg py-4'
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
              <span className={`font-bold text-xl ${topNavLogoColor}`}>
                Klein<span className="text-blue-600 dark:text-blue-400"> Digital Solutions</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${topNavTextColor}`}>
                  {link.label}
                </span>
              </Link>
            ))}

            {/* Social Links */}
            <div className="flex items-center gap-4 ml-8 pl-8 border-l border-gray-300 dark:border-gray-600">
              <a
                href="https://github.com/Bucci369"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${topNavTextColor === 'text-gray-800 dark:text-white' ? 'text-gray-600 dark:text-gray-300' : topNavTextColor }`} // Etwas spezifischer für Social Icons
              >
                <SiGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername" // Bitte anpassen
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${topNavTextColor === 'text-gray-800 dark:text-white' ? 'text-gray-600 dark:text-gray-300' : topNavTextColor }`}
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
            className={`lg:hidden p-2 ${topNavIconColor}`}
            aria-label="Menü öffnen/schließen"
          >
            {isMenuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-[80vh] opacity-100 mt-4 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden' // max-h angepasst und overflow
        }`}>
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            {/* Mobile Social Links */}
            <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href="https://github.com/Bucci369"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <SiGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername" // Bitte anpassen
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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