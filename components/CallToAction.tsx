import Link from 'next/link';
import { HiMail, HiChat, HiLightningBolt } from 'react-icons/hi';
import { useState, useEffect } from 'react';

// Definiere eine Schnittstelle für die Struktur deiner schwebenden Elemente
interface FloatingElementStyle {
  id: number;
  symbol: string;
  style: {
    top: string;
    left: string;
    animationDelay: string;
    animationDuration: string;
    // position: 'absolute'; // Ist bereits in der Tailwind-Klasse, kann hier aber auch stehen
  };
}

const CallToAction = () => {
  // Gib explizit den Typ für den State an: FloatingElementStyle[]
  const [floatingElementStyles, setFloatingElementStyles] = useState<FloatingElementStyle[]>([]);

  useEffect(() => {
    const symbols = ['</', '/>', '{}', '[]', '()'];
    const generatedElements: FloatingElementStyle[] = symbols.map((symbol, index) => ({
      id: index,
      symbol: symbol,
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${index * 0.5}s`,
        animationDuration: `${10 + index * 2}s`,
      },
    }));
    setFloatingElementStyles(generatedElements);
  }, []);

  return (
    <section id="kontakt" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,.1) 10px,
              rgba(255,255,255,.1) 20px
            )`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {floatingElementStyles.map((element) => (
          <div
            key={element.id}
            className="absolute text-white/10 text-6xl font-mono animate-float"
            style={element.style} // `position: 'absolute'` kommt von der className
          >
            {element.symbol}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <HiLightningBolt className="w-4 h-4" />
            <span>Bereit für Ihr Projekt?</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Lassen Sie uns gemeinsam
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              etwas Großartiges
            </span>
            {' '}erschaffen
          </h2>

          {/* Subheading */}
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Von der ersten Idee bis zum fertigen Produkt – wir begleiten Sie durch den gesamten Entwicklungsprozess und darüber hinaus.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HiLightningBolt className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Schneller Start</h3>
              <p className="text-sm text-white/80">Erste Ergebnisse schon nach wenigen Tagen</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HiChat className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Transparente Kommunikation</h3>
              <p className="text-sm text-white/80">Regelmäßige Updates und offener Austausch</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HiMail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Support inklusive</h3>
              <p className="text-sm text-white/80">Auch nach Projektabschluss für Sie da</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Der Button "Kostenloses Erstgespräch" wurde hier entfernt */}
            <a href="mailto:info@kleindigitalsolutions.de">
              <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/50 hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center gap-2">
                <HiMail className="w-5 h-5" />
                <span>info@kleindigitalsolutions.de</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) rotate(10deg);
          }
          66% {
            transform: translateY(20px) rotate(-10deg);
          }
        }
      `}</style>
    </section>
  );
};

export default CallToAction;