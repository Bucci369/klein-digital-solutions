import Link from 'next/link';
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      
      <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-light mb-4">
                Klein Digital <span className="font-medium text-blue-400">Solutions</span>
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Professionelle Website-Entwicklung und digitale Innovation. Wir erschaffen moderne, 
                performante Web-Erlebnisse, die Ihre Marke zum Leben erwecken.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <FaEnvelope className="text-blue-400" />
                <span>info@kleindigitalsolutions.de</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <FaPhone className="text-blue-400" />
                <span>+49 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Musterstraße 123, 12345 Musterstadt</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/dienstleistungen#website">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    Website Development
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/dienstleistungen#webapp">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    Web App Development
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/dienstleistungen#ecommerce">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    E-Commerce Solutions
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/dienstleistungen#consulting">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    Digital Consulting
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6 text-white">Unternehmen</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/ueber-uns">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    Über uns
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/kontakt">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    Kontakt
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/impressum">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    Impressum
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/datenschutz">
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    Datenschutz
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Klein Digital Solutions. Alle Rechte vorbehalten.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:info@kleindigitalsolutions.de" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;