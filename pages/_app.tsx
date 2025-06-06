// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import CookieConsent from '../components/CookieConsent';
import { ThemeProvider } from '../contexts/ThemeContext';
import ChatbotWidget from '@/components/ChatbotWidget'; // 1. HIER HINZUFÜGEN**

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <CookieConsent />
      **<ChatbotWidget /> {/* 2. HIER HINZUFÜGEN */}**
    </ThemeProvider>
  );
}

export default MyApp;