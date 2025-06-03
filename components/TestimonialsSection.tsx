import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  rating: number;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, company, rating, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 300);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`group relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <FaQuoteLeft className="text-blue-600 text-3xl" />
          <div className="flex space-x-1">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-sm" />
            ))}
          </div>
        </div>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
          &ldquo;{quote}&rdquo;
        </p>
        
        <div className="border-t border-gray-200 pt-6">
          <p className="font-semibold text-gray-900 text-lg mb-1">{author}</p>
          <p className="text-gray-600 text-sm">{company}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "Klein Digital Solutions hat unsere Excel-Prozesse revolutioniert. Die Effizienzsteigerung ist beeindruckend und die Lösung perfekt auf unsere Bedürfnisse zugeschnitten.",
      author: "Max Mustermann",
      company: "Muster AG",
      rating: 5,
    },
    {
      quote: "Die neue Website übertrifft alle unsere Erwartungen: modern, schnell und benutzerfreundlich. Das Team hat exzellente Arbeit geleistet.",
      author: "Anna Schmidt",
      company: "Online Shop GmbH",
      rating: 5,
    },
    {
      quote: "Durch die intelligente Automatisierung unserer Dateneingabe sparen wir wöchentlich unzählige Stunden. Eine Investition, die sich sofort bezahlt macht.",
      author: "Dr. Lena Weber",
      company: "Tech Consult UG",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials-section" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Was unsere <span className="font-medium text-blue-400">Kunden sagen</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Vertrauen Sie auf die Erfahrungen zufriedener Kunden
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} index={index} {...testimonial} />
          ))}
        </div>
        
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${sectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-lg" />
              ))}
            </div>
            <span className="text-white font-medium">4.9/5 aus 150+ Bewertungen</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;