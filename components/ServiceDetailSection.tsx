import Image from 'next/image';

interface ServiceDetailSectionProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  isImageLeft: boolean; // Steuert die Position des Bildes
}

const ServiceDetailSection: React.FC<ServiceDetailSectionProps> = ({
  id,
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  isImageLeft,
}) => {
  // Klassen für die Reihenfolge der Elemente, um Bild und Text zu tauschen
  const imageOrderClass = isImageLeft ? 'order-first' : 'order-last';
  const textOrderClass = isImageLeft ? 'order-last' : 'order-first';

  return (
    <section id={id} className="py-16 md:py-24 even:bg-gray-50 odd:bg-white">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row items-center gap-12 ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          {/* Image Part */}
          <div className={`md:w-1/2 flex-shrink-0 ${imageOrderClass}`}>
            <div className="relative w-full h-64 md:h-96 rounded-lg shadow-xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Content Part */}
          <div className={`md:w-1/2 ${textOrderClass}`}>
            <h2 className="text-4xl font-bold text-blue-700 mb-6">{title}</h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {description}
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;