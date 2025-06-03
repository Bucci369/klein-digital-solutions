// components/KeyBenefitsSection.tsx
import { FaBolt, FaRocket, FaLightbulb } from 'react-icons/fa'; // Beispiel-Icons

interface BenefitCardProps {
  icon: React.ElementType; // IconType ist ok, aber React.ElementType ist flexibler
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <Icon className="text-blue-600 text-4xl mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const KeyBenefitsSection = () => {
  const benefits = [
    {
      icon: FaBolt,
      title: 'Prozesse beschleunigen',
      description: 'Wir optimieren Ihre Workflows und automatisieren repetitive Aufgaben für maximale Effizienz.',
    },
    {
      icon: FaRocket,
      title: 'Wachstum vorantreiben',
      description: 'Mit digitalen Strategien und Tools helfen wir Ihnen, neue Potenziale zu erschließen und zu skalieren.',
    },
    {
      icon: FaLightbulb,
      title: 'Innovative Lösungen',
      description: 'Wir entwickeln maßgeschneiderte Lösungen, die perfekt auf Ihre individuellen Geschäftsanforderungen zugeschnitten sind.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Ihre Vorteile mit Klein Digital Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;