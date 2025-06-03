// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import CookieConsent from '../components/CookieConsent'; // <-- Importiere die Komponente

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <CookieConsent /> {/* <-- Füge die Komponente hier ein */}
    </>
  );
}

export default MyApp;