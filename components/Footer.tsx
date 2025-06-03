import Link from 'next/link';
import { HiCode, HiMail, HiLocationMarker } from 'react-icons/hi';
import { SiGithub, SiLinkedin, SiGitter } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Web Development', href: '/dienstleistungen#webdev' },
      { label: 'Frontend Development', href: '/dienstleistungen#frontend' },
      { label: 'E-Commerce', href: '/dienstleistungen#ecommerce' },
      { label: 'Performance & SEO', href: '/dienstleistungen#performance' },
    ],
    company: [
      { label: 'Über uns', href: '/ueber-mich' },
      { label: 'Portfolio', href: '/#portfolio' },
      { label: 'Blog', href: '/blog' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
    legal: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
      { label: 'AGB', href: '/agb' },
    ],
  };

  const socialLinks = [
    { icon: SiGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: SiLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: SiGitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <HiCode className="text-white text-xl" />
              </div>
              <span className="font-bold text-xl text-white">
                Klein<span className="text-blue-400"> Digital Solutions</span>
              </span>
            </div>
            <p className="text-gray-400">
              Ihr Partner für moderne, performante Web-Anwendungen.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span className="hover:text-blue-400 transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span className="hover:text-blue-400 transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <HiMail className="text-blue-400 flex-shrink-0" />
                <a href="mailto:info@kleindigitalsolutions.de" className="hover:text-blue-400 transition-colors">
                  info@kleindigitalsolutions.de
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiLocationMarker className="text-blue-400 flex-shrink-0" />
                <span>Remote / Deutschland</span>
              </li>
            </ul>
            {/* Tech Stack Badge */}
            <div className="mt-4">
              <p className="text-sm text-gray-500">Built with</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-gray-800 px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-gray-800 px-2 py-1 rounded">TypeScript</span>
                <span className="text-xs bg-gray-800 px-2 py-1 rounded">Tailwind</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {currentYear} Kleindigitalsolutions. Alle Rechte vorbehalten.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6">
              {footerLinks.legal.map((link, index) => (
                <Link key={index} href={link.href}>
                  <span className="text-sm hover:text-blue-400 transition-colors">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;