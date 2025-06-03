// components/WhyChooseUsSection.tsx
import { FaCheckCircle } from 'react-icons/fa';

const WhyChooseUsSection = () => {
  const features = [
    '**Expertise:** Langjährige Erfahrung in Excel, Webentwicklung und Automatisierung.',
    '**Schnell:** Effiziente Prozesse und schnelle Umsetzung Ihrer Projekte.',
    '**Individuell:** Maßgeschneiderte Lösungen, die exakt auf Ihre Bedürfnisse zugeschnitten sind.',
    '**Ganzheitlich:** Beratung von der Konzeption bis zur Implementierung und darüber hinaus.',
    '**Transparent:** Klare Kommunikation und nachvollziehbare Projektabläufe.',
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-blue-700 mb-6">Warum Klein Digital Solutions?</h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Wir sind Ihr verlässlicher Partner für digitale Herausforderungen. Unser Fokus liegt auf schneller Umsetzung, maßgeschneiderten Lösungen und einer engen Zusammenarbeit, um Ihren Erfolg zu maximieren.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-700 text-lg">
                  <FaCheckCircle className="text-green-500 text-2xl mr-3 flex-shrink-0 mt-1" />
                  <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 relative">
            {/* Hier könnte ein passendes Bild oder eine Grafik platziert werden, z.B. eine Metapher für Teamwork/Erfolg */}
            <div className="relative w-full h-64 md:h-96 rounded-lg shadow-xl overflow-hidden bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-2xl">Platzhalter Bild: Teamwork/Erfolg</span>
               {/* <Image src="/images/why-choose-us.jpg" alt="Why Choose Us" layout="fill" objectFit="cover" className="rounded-lg" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;