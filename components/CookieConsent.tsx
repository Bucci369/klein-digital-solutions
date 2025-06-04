// components/CookieConsent.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';

const COOKIE_CONSENT_KEY = 'kleindigitalsolutions_cookie_consent';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Überprüfen, ob der Benutzer bereits zugestimmt hat
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true); // Banner anzeigen, wenn keine Zustimmung gefunden wurde
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true'); // Zustimmung speichern
    setShowBanner(false); // Banner ausblenden
  };

  if (!showBanner) {
    return null; // Nichts rendern, wenn Banner nicht angezeigt werden soll
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 dark:bg-slate-800 bg-opacity-95 backdrop-blur-sm text-white dark:text-gray-100 p-6 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm md:text-base text-center md:text-left">
          Wir verwenden Cookies, um die Funktionalität unserer Website zu gewährleisten und Ihnen das bestmögliche Erlebnis zu bieten. Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu. Weitere Informationen finden Sie in unserer{' '}
          <Link href="/datenschutz" className="text-blue-400 dark:text-blue-300 hover:underline font-medium">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 w-full sm:w-auto"
          >
            Cookies akzeptieren
          </button>
          {/* Optional: Ablehnen Button, der die Seite z.B. schließt oder auf eine andere Seite leitet */}
          {/* <button
            onClick={() => alert('Sie müssen Cookies akzeptieren, um die Website zu nutzen.')}
            className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 w-full sm:w-auto"
          >
            Ablehnen
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;