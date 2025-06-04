import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX, HiCode, HiSun, HiMoon } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
          <Link href="/">
            <div className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <HiCode className="text-white text-xl" />
              </div>
              <span className={`font-bold text-xl ${topNavLogoColor}`}>
                Klein<span className="text-blue-600 dark:text-blue-400"> Digital Solutions</span>
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${topNavTextColor}`}>
                  {link.label}
                </span>
              </Link>
            ))}

            {/* Theme Toggle Button - Desktop */}
            <button
              onClick={toggleTheme}
              aria-label="Theme umschalten"
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors ${topNavIconColor}`}
            >
              {theme === 'light' ? <HiMoon className="w-5 h-5" /> : <HiSun className="w-5 h-5" />}
            </button>

            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-300 dark:border-gray-600">
              <a
                href="https://github.com/Bucci369"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${topNavTextColor}`}
              >
                <SiGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${topNavTextColor}`}
              >
                <SiLinkedin className="text-xl" />
              </a>
            </div>

            <Link href="/kontakt">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                Projekt starten
              </button>
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Theme umschalten"
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors ${topNavIconColor}`}
            >
              {theme === 'light' ? <HiMoon className="w-6 h-6" /> : <HiSun className="w-6 h-6" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${topNavIconColor}`}
              aria-label="Menü öffnen/schließen"
            >
              {isMenuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
            </button>
          </div>
        </nav>

        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-[80vh] opacity-100 mt-4 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
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
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <SiLinkedin className="text-xl" />
              </a>
            </div>

            <Link href="/kontakt" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full mt-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
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
