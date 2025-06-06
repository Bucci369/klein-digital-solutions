// src/services/responseGenerator.ts
import { BotResponseObject, Intent } from '../models/chatbot';

const directResponseMap: Partial<Record<Intent, BotResponseObject>> = {
  GREETING: {
    responseText: "Hallo! Schön, dass Sie da sind! 👋 Wie kann ich Ihnen bei Ihrem digitalen Projekt helfen?",
    quickReplies: ['Ich brauche eine Website', 'Services ansehen', 'Portfolio zeigen', 'Preise erfahren'],
  },
  
  PRICING_INQUIRY: {
    responseText: "Die Kosten für ein Projekt hängen von vielen Faktoren ab:\n\n💡 **Einfache Websites** (3-5 Seiten): ab 1.500€\n🚀 **Professionelle Websites** (5-10 Seiten): ab 3.000€\n⚡ **Web-Apps & E-Commerce**: ab 5.000€\n\nGerne erstellen wir Ihnen ein individuelles Angebot!",
    htmlText: `<div>Die Kosten für ein Projekt hängen von vielen Faktoren ab:<br><br>
    💡 <strong>Einfache Websites</strong> (3-5 Seiten): ab 1.500€<br>
    🚀 <strong>Professionelle Websites</strong> (5-10 Seiten): ab 3.000€<br>
    ⚡ <strong>Web-Apps & E-Commerce</strong>: ab 5.000€<br><br>
    Gerne erstellen wir Ihnen ein individuelles Angebot!</div>`,
    quickReplies: ['Kostenloses Angebot', 'Kontakt aufnehmen', 'Unsere Services'],
  },
  
  OWNER_INQUIRY: {
    responseText: "Klein Digital Solutions wurde von Özgür Azap gegründet. Als leidenschaftlicher Full-Stack Developer mit Fokus auf moderne Web-Technologien steht er für Qualität und Innovation.",
    quickReplies: ['Mehr über uns', 'Portfolio ansehen', 'Kontakt'],
  },
  
  PROJECT_WORKFLOW: {
    responseText: "Unser Projektablauf ist transparent und effizient:\n\n1️⃣ **Erstgespräch**: Wir besprechen Ihre Ideen und Ziele\n2️⃣ **Konzept & Angebot**: Detaillierte Planung und Kostenvoranschlag\n3️⃣ **Design**: Moderne, responsive Gestaltung\n4️⃣ **Entwicklung**: Sauberer, performanter Code\n5️⃣ **Testing**: Ausführliche Tests auf allen Geräten\n6️⃣ **Launch**: Go-Live und Übergabe\n7️⃣ **Support**: Kontinuierliche Betreuung",
    quickReplies: ['Projekt starten', 'Kontakt aufnehmen'],
  },
  
  HELP: {
    responseText: "Ich helfe Ihnen gerne! Hier sind einige Themen, zu denen ich Auskunft geben kann:\n\n• 🚀 Projekt anfragen\n• 💼 Unsere Services\n• 🎨 Portfolio & Referenzen\n• 💰 Preise & Kosten\n• 📧 Kontaktmöglichkeiten\n• 🛠️ Technologien\n• ❓ Allgemeine Fragen\n\nWas interessiert Sie am meisten?",
    quickReplies: ['Services', 'Portfolio', 'Preise', 'Kontakt'],
  },
  
  SERVICES_GENERAL: {
    responseText: "Unsere Kernkompetenzen im Überblick:\n\n🌐 **Web Development**: Moderne Websites & Web-Apps\n🎨 **Frontend**: Responsive UI/UX mit React & Next.js\n⚙️ **Backend**: Robuste APIs & Datenbanklösungen\n🚀 **Performance & SEO**: Optimierung für beste Rankings\n\nWelcher Bereich interessiert Sie besonders?",
    quickReplies: ['Web Development', 'Frontend', 'Backend', 'Performance & SEO'],
  },
  
  WEB_DEV_DETAILS: {
    responseText: "**Web Development bei Klein Digital Solutions:**\n\n✅ Single Page Applications (SPAs)\n✅ Progressive Web Apps (PWAs)\n✅ E-Commerce Lösungen\n✅ Content Management Systeme\n✅ Individuelle Web-Anwendungen\n\nWir verwenden moderne Frameworks wie Next.js und React für maximale Performance und Skalierbarkeit.",
    quickReplies: ['Projekt anfragen', 'Technologien', 'Portfolio'],
  },
  
  FRONTEND_DETAILS: {
    responseText: "**Frontend Development Expertise:**\n\n🎨 Pixel-perfekte Umsetzung Ihrer Designs\n📱 Responsive Design für alle Geräte\n⚡ Blitzschnelle Ladezeiten\n🎭 Moderne Animationen & Interaktionen\n♿ Barrierefreie Entwicklung (WCAG)\n\nMit React, TypeScript und Tailwind CSS erschaffen wir beeindruckende User Interfaces.",
    quickReplies: ['Backend auch?', 'Projekt starten', 'Beispiele ansehen'],
  },
  
  BACKEND_DETAILS: {
    responseText: "**Backend & API Development:**\n\n🔧 RESTful & GraphQL APIs\n🔐 Sichere Authentifizierung (JWT, OAuth)\n💾 Datenbank-Design (PostgreSQL, MongoDB)\n☁️ Cloud-Deployment (Vercel, AWS)\n🔄 Echtzeit-Features (WebSockets)\n\nModerne, skalierbare Architekturen für Ihre Anforderungen.",
    quickReplies: ['Frontend auch?', 'Projekt anfragen', 'Technologien'],
  },
  
  PERFORMANCE_SEO_DETAILS: {
    responseText: "**Performance & SEO Optimierung:**\n\n📈 Core Web Vitals Optimierung\n🎯 Lighthouse Score 90+\n🔍 Technical SEO (Meta, Schema, Sitemap)\n⚡ Code-Splitting & Lazy Loading\n🖼️ Bild-Optimierung (WebP, AVIF)\n📊 Performance Monitoring\n\nIhre Website wird nicht nur schön, sondern auch schnell und auffindbar!",
    quickReplies: ['Wie viel kostet das?', 'Projekt starten', 'Beispiele'],
  },
  
  PORTFOLIO_GENERAL: {
    responseText: "In unserem Portfolio finden Sie ausgewählte Projekte:\n\n🍦 **Gastronomie-Websites**: Moderne Präsenz für Restaurants & Cafés\n💇 **Beauty & Wellness**: Elegante Salon-Websites\n🎵 **Künstler-Portfolios**: Kreative Showcases\n\nJedes Projekt ist maßgeschneidert und mit Liebe zum Detail umgesetzt.",
    htmlText: `<div>In unserem Portfolio finden Sie ausgewählte Projekte:<br><br>
    🍦 <strong>Gastronomie-Websites</strong>: Moderne Präsenz für Restaurants & Cafés<br>
    💇 <strong>Beauty & Wellness</strong>: Elegante Salon-Websites<br>
    🎵 <strong>Künstler-Portfolios</strong>: Kreative Showcases<br><br>
    <a href="/#portfolio" style="color: #3b82f6; text-decoration: underline;">→ Portfolio ansehen</a></div>`,
    quickReplies: ['Mein Projekt besprechen', 'Services', 'Kontakt'],
  },
  
  CONTACT_GENERAL: {
    responseText: "Lassen Sie uns über Ihr Projekt sprechen!\n\n📧 **E-Mail**: info@kleindigitalsolutions.de\n🌐 **Website**: www.kleindigitalsolutions.de\n📍 **Standort**: Remote / Deutschland\n\nSchreiben Sie uns eine E-Mail mit Ihren Projektdetails, und wir melden uns innerhalb von 24 Stunden bei Ihnen!",
    htmlText: `<div>Lassen Sie uns über Ihr Projekt sprechen!<br><br>
    📧 <strong>E-Mail</strong>: <a href="mailto:info@kleindigitalsolutions.de">info@kleindigitalsolutions.de</a><br>
    🌐 <strong>Website</strong>: <a href="https://www.kleindigitalsolutions.de" target="_blank">www.kleindigitalsolutions.de</a><br>
    📍 <strong>Standort</strong>: Remote / Deutschland<br><br>
    Schreiben Sie uns eine E-Mail mit Ihren Projektdetails, und wir melden uns innerhalb von 24 Stunden bei Ihnen!</div>`,
    quickReplies: ['E-Mail schreiben', 'Services', 'Portfolio'],
  },
  
  GOODBYE: {
    responseText: "Vielen Dank für Ihr Interesse! Ich hoffe, ich konnte Ihnen weiterhelfen. Falls Sie noch Fragen haben, bin ich jederzeit für Sie da. Auf Wiedersehen und viel Erfolg mit Ihrem Projekt! 👋",
    shouldCloseChat: true,
  },
  
  THANKS: {
    responseText: "Sehr gerne! Es freut mich, dass ich Ihnen helfen konnte. Gibt es noch etwas, wobei ich Sie unterstützen kann?",
    quickReplies: ['Projekt starten', 'Nein, danke'],
  },
};

export const getGenericResponse = (intent: Intent): BotResponseObject => {
  if (intent && directResponseMap[intent]) {
    return directResponseMap[intent]!;
  }
  
  return {
    responseText: "Entschuldigung, das habe ich nicht ganz verstanden. Können Sie Ihre Frage anders formulieren oder wählen Sie eines der Themen aus:",
    quickReplies: ['Hilfe', 'Services', 'Portfolio', 'Kontakt'],
  };
};

export const getTechResponse = (tech: 'react' | 'nextjs' | 'typescript' | 'tailwind'): BotResponseObject => {
  const responses = {
    react: {
      text: "**React** ist unsere Basis für moderne Web-Anwendungen:\n\n⚛️ Component-basierte Architektur\n🔄 Virtual DOM für beste Performance\n🎣 Hooks für State Management\n📦 Riesiges Ökosystem\n\nPerfekt für dynamische, interaktive Websites!",
      quickReplies: ['Next.js', 'TypeScript', 'Projekt mit React?']
    },
    nextjs: {
      text: "**Next.js** - Das React Framework der Wahl:\n\n🚀 Server-Side Rendering (SSR)\n📄 Static Site Generation (SSG)\n🔍 SEO-optimiert von Haus aus\n⚡ Automatisches Code-Splitting\n🌐 API Routes integriert\n\nIdeal für performante, skalierbare Websites!",
      quickReplies: ['React', 'TypeScript', 'Projekt mit Next.js?']
    },
    typescript: {
      text: "**TypeScript** macht unseren Code sicherer:\n\n✅ Type Safety verhindert Fehler\n🧩 Bessere IDE-Unterstützung\n📚 Selbstdokumentierender Code\n🔧 Refactoring leicht gemacht\n🎯 Weniger Bugs in Produktion\n\nFür professionelle, wartbare Projekte unverzichtbar!",
      quickReplies: ['React', 'Next.js', 'Alle Technologien']
    },
    tailwind: {
      text: "**Tailwind CSS** für modernes Design:\n\n🎨 Utility-First Approach\n📱 Responsive by Default\n🎯 Konsistentes Design System\n⚡ Optimale Performance\n🔧 Hochgradig anpassbar\n\nSchnelle Entwicklung ohne Kompromisse beim Design!",
      quickReplies: ['Andere Technologien', 'Design-Beispiele', 'Projekt starten']
    }
  };
  
  const response = responses[tech];
  return {
    responseText: response.text,
    nextBotState: 'awaiting_tech_choice',
    quickReplies: response.quickReplies,
  };
};

export const getSarcasticResponse = (type: string): BotResponseObject => {
  const responses: Record<string, BotResponseObject> = {
    joke: {
      responseText: "Warum können Webentwickler keine Witze erzählen? Weil sie immer einen Bug in der Pointe finden! 😄\n\nAber im Ernst: Wie kann ich Ihnen bei Ihrem Projekt helfen?",
      quickReplies: ['Services', 'Portfolio', 'Kontakt'],
    },
    strong_insult: {
      responseText: "Ich verstehe, dass Sie frustriert sind. Lassen Sie uns konstruktiv werden - wie kann ich Ihnen wirklich helfen?",
      quickReplies: ['Hilfe', 'Neu starten'],
    },
    medium_insult: {
      responseText: "Keine Sorge, ich bin hier um zu helfen! Was kann ich für Sie tun?",
      quickReplies: ['Services ansehen', 'Portfolio', 'Hilfe'],
    },
    informal_greeting: {
      responseText: "Hey! 🤙 Schön, dass du da bist! Lass uns über dein Projekt quatschen. Was hast du vor?",
      quickReplies: ['Ich brauche eine Website', 'Zeig mal Portfolio', 'Was kostet sowas?'],
    },
  };
  
  return responses[type] || getGenericResponse('UNKNOWN');
};