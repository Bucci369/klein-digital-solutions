import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 text-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-gray-900 mb-4">Bereit für Ihre <span className="font-semibold bg-gradient-to-r from-blue-600 to-gray-600 bg-clip-text text-transparent">digitale Transformation</span>?</h2>
        <p className="text-xl text-gray-600 mb-8 font-light">
          Kontaktieren Sie uns noch heute für ein unverbindliches Erstgespräch!
        </p>
        <Link href="/kontakt">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-102">
            Kontakt aufnehmen
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;