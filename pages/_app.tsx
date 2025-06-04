// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import CookieConsent from '../components/CookieConsent';
import { ThemeProvider } from '../contexts/ThemeContext'; // Pfad anpassen, falls deine ThemeContext.tsx woanders liegt (z.B. ./contexts/ThemeContext)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider> {/* ThemeProvider umschließt jetzt alles */}
      <Component {...pageProps} />
      <CookieConsent />
    </ThemeProvider>
  );
}

export default MyApp;