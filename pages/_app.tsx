import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Importieren der globalen Tailwind CSS Styles

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;