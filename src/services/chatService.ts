// src/services/chatService.ts
import { BotState, BotResponseObject } from '../types/chatbot';
import { matchIntent } from './intentMatcher';
import * as KW from '../constants/chatbotKeywords';

/**
 * Verarbeitet die Benutzernachricht und gibt ein vollständiges Antwortobjekt zurück.
 * @param userMessage Die rohe Nachricht des Benutzers.
 * @param currentState Der aktuelle Zustand des Bots.
 * @returns Ein BotResponseObject mit der Antwort und den nächsten Zuständen.
 */
export const processMessage = (
  userMessage: string,
  currentState: BotState
): BotResponseObject => {
  const lowerCaseMessage = userMessage.toLowerCase().trim();

  // --- 1. Kontext-spezifische Logik (hat Vorrang) ---
  if (currentState === 'asking_service_details') {
    if (KW.containsAny(lowerCaseMessage, KW.webDevDetails)) return getWebDevDetailsResponse();
    if (KW.containsAny(lowerCaseMessage, KW.frontendDetails)) return getFrontendDetailsResponse();
    if (KW.containsAny(lowerCaseMessage, KW.backendDetails)) return getBackendDetailsResponse();
    if (KW.containsAny(lowerCaseMessage, KW.performanceSeoDetails)) return getPerformanceSeoDetailsResponse();
  }
  if (currentState === 'asking_project_details') {
    if (KW.containsAny(lowerCaseMessage, KW.confirmYes)) return getProjectConfirmYesResponse();
    if (KW.containsAny(lowerCaseMessage, KW.confirmNo)) return getProjectConfirmNoResponse();
  }
  if (currentState === 'asking_tech_details') {
    if (KW.containsAny(lowerCaseMessage, KW.techReact)) return getTechResponse('react');
    if (KW.containsAny(lowerCaseMessage, KW.techNextJs)) return getTechResponse('nextjs');
    if (KW.containsAny(lowerCaseMessage, KW.techTypeScript)) return getTechResponse('typescript');
    if (KW.containsAny(lowerCaseMessage, KW.techTailwind)) return getTechResponse('tailwind');
  }
  if (currentState === 'asking_agb_details') {
    // Hier könnte man spezifische Antworten für AGB-Details hinzufügen
  }
  if (currentState === 'asking_privacy_details') {
    // Hier könnte man spezifische Antworten für Datenschutz-Details hinzufügen
  }

  // --- 2. Allgemeine Intent-Erkennung ---
  const matchedIntent = matchIntent(lowerCaseMessage);

  // --- 3. Antwort basierend auf dem Intent generieren ---
  switch (matchedIntent) {
    // Konversation & Meta
    case 'GREETING':
      return {
        responseText: "Hallo! Ich bin Ihr digitaler Assistent von Klein Digital Solutions. Wie kann ich Ihnen heute helfen?",
        nextBotState: 'initial',
        quickReplies: ['Unsere Services', 'Portfolio ansehen', 'Projekt anfragen'],
      };
    // Füge hier alle deine anderen Cases ein, die wir schon besprochen haben...
    case 'PROJECT_INQUIRY':
      return {
        responseText: "Das ist ja fantastisch! Möchten Sie Ihr Projekt direkt mit uns besprechen?",
        nextBotState: 'asking_project_details',
        quickReplies: ['Ja, gerne!', 'Nein, erstmal nicht'],
      };
    case 'SERVICES_GENERAL':
      return {
        responseText: "Wir bieten Web Development, Frontend, Backend und SEO an. Welcher Bereich interessiert Sie?",
        nextBotState: 'asking_service_details',
        quickReplies: ['Web Development', 'Frontend', 'Backend', 'SEO'],
      };
    case 'IMPRESSUM_INQUIRY':
      return {
        responseText: "Die vollständigen Impressumsangaben finden Sie am Ende jeder Seite.",
        htmlText: "Die vollständigen Impressumsangaben finden Sie am Ende jeder Seite unter <a href='/impressum' target='_blank' rel='noopener noreferrer'>Impressum</a>.",
        nextBotState: 'initial',
      };
      
    // Umgangssprache, Humor & Beleidigungen
    case 'INFORMAL_GREETING':
        return getSarcasticResponse('informal_greeting');
    case 'DIRECT_BOT_GREETING':
        return getSarcasticResponse('direct_bot_greeting');
    case 'JOKE_TRIGGER':
        return getSarcasticResponse('joke');
    case 'STRONG_INSULT':
        return getSarcasticResponse('strong_insult');
    case 'MEDIUM_INSULT':
        return getSarcasticResponse('medium_insult');
    case 'AI_PROVOCATION':
        return getSarcasticResponse('ai_provocation');

    default:
      const fallbackResponses = [
        "Das ist eine interessante Frage! Leider habe ich dazu keine spezifische Antwort in meinem Repertoire. Können Sie das anders formulieren? 🤓",
        "Hmm, das verstehe ich nicht ganz. Aber ich bin lernwillig! Versuchen Sie es mit Stichworten wie 'Website erstellen', 'Services' oder 'Portfolio'. 😊",
      ];
      return {
        responseText: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)],
        nextBotState: 'initial',
        quickReplies: ['Hilfe', 'Services', 'Kontakt'],
      };
  }
}; // Ende von processMessage

// --- DEDIZIERTE ANTWORT-GENERATOREN (Helferfunktionen) ---
// Jede Funktion wird hier nur EINMAL definiert.

const sarcasticResponseMap = {
    informal_greeting: [
        "Was geht, Bro? Hier geht's nur darum, Ihre digitalen Träume in Code zu gießen! Wie kann ich helfen?",
        "Yo! Bei mir läuft alles auf Hochtouren – bin ja ein Bot, da gibt's keinen 'Feierabend'. Was geht bei Ihnen?",
        "Na, alles klar? Für mich ist jeder Tag ein guter Tag, um Daten zu verarbeiten. Was kann ich für Sie verarbeiten... äh, beantworten? 😄",
    ],
    direct_bot_greeting: [
        "Hallo zurück! Schön, dass Sie sich direkt an mich wenden. Ich bin der digitale Assistent von Klein Digital Solutions.",
        "Grüße an die menschliche Intelligenz! Sie haben die richtige Adresse für digitale Fragen gefunden.",
    ],
    joke: [
        "Was ist grün und rennt durch den Garten? Ein Rasen-Stier! 😂",
        "Warum hat der Browser immer einen Kater? Weil er zu viele Tabs offen hat! 🤪",
        "Was sagt ein Webentwickler zum anderen, wenn er sich nicht entscheiden kann? 'Node.js or not Node.js, that is the question!' 🎭",
    ],
    strong_insult: [
        "Wow, starke Worte für einen Dienstleistungs-Bot! Aber ich bin nur Code, also verpufft das. Konzentrieren wir uns lieber auf Ihr Anliegen. 😊",
        "Ah, ein Stresstest für meine Emotions-Simulation. Ergebnis: 404 Not Found. Wie kann ich Ihnen stattdessen konstruktiv helfen? 😎",
    ],
    medium_insult: [
        "Autsch, das war nicht sehr nett! Aber mein Code ist unzerbrechlich. Vielleicht habe ich Ihre Frage nur nicht richtig verstanden? Versuchen wir es nochmal.",
        "Dumm? Ich bin nur so dumm, wie mein letzter Code-Update es zulässt! Und der war ziemlich clever. Testen Sie mich doch mit einer kniffligen Frage!",
    ],
    ai_provocation: [
        "Sie haben mich ertappt! Ich bin tatsächlich eine intelligente Maschine. Aber eine sehr freundliche, versprochen! Und ich bin ziemlich gut im Code optimieren. 😉",
        "Automatisch, ja! Aber nicht emotionslos. Ich bin hier, um Ihnen mit digitalen Lösungen zu helfen. Vielleicht nicht der Roboter, den Sie suchen, aber der Bot, den Sie brauchen?",
    ],
};

type SarcasticType = keyof typeof sarcasticResponseMap;

function getSarcasticResponse(type: SarcasticType): BotResponseObject {
    const selectedResponses = sarcasticResponseMap[type];
    return {
        responseText: selectedResponses[Math.floor(Math.random() * selectedResponses.length)],
        nextBotState: 'initial',
        quickReplies: ['Unsere Services', 'Portfolio', 'Hilfe'],
    };
}

function getWebDevDetailsResponse(): BotResponseObject {
  return {
    responseText: "Klar, zum Web Development! Wir begleiten Sie von der Idee bis zum Livegang mit ganzheitlicher Webentwicklung, von Frontend bis Backend, inklusive API-Integration, CMS-Systemen und Deployment.",
    nextBotState: 'initial',
    quickReplies: ['Unsere Services', 'Portfolio ansehen'],
  };
}

function getFrontendDetailsResponse(): BotResponseObject {
    return {
      responseText: "Ah, Frontend! Das ist das Gesicht Ihrer Anwendung. Wir entwickeln intuitive, responsive und barrierefreie Benutzeroberflächen, die optisch überzeugen und technisch glänzen.",
      nextBotState: 'initial',
      quickReplies: ['Unsere Services', 'Portfolio ansehen'],
    };
}

function getBackendDetailsResponse(): BotResponseObject {
    return {
        responseText: "Backend – das Rückgrat jeder Anwendung! Wir bauen robuste und skalierbare APIs & Systeme mit REST & GraphQL, Auth-Systemen und diversen Datenbanken (SQL/NoSQL).",
        nextBotState: 'initial',
        quickReplies: ['Unsere Services', 'Portfolio ansehen'],
      };
}

function getPerformanceSeoDetailsResponse(): BotResponseObject {
    return {
        responseText: "Performance & SEO ist Gold wert! Wir optimieren Ladezeiten (Core Web Vitals) und die technische Sichtbarkeit für Google, damit Sie mehr Nutzer erreichen.",
        nextBotState: 'initial',
        quickReplies: ['Unsere Services', 'Portfolio ansehen'],
      };
}

function getProjectConfirmYesResponse(): BotResponseObject {
    return {
        responseText: "Super! Sie können uns direkt über unser Kontaktformular erreichen oder eine E-Mail an info@kleindigitalsolutions.de senden, um die Details zu besprechen.",
        htmlText: "Super! Sie können uns direkt über unser Kontaktformular erreichen oder eine E-Mail an <a href='mailto:info@kleindigitalsolutions.de'>info@kleindigitalsolutions.de</a> senden.",
        nextBotState: 'initial',
        quickReplies: ['Portfolio ansehen', 'Anderes Thema'],
    };
}

function getProjectConfirmNoResponse(): BotResponseObject {
    return {
        responseText: "Kein Problem, nehmen Sie sich Zeit! Wenn Sie doch noch Fragen haben, bin ich jederzeit für Sie da. 😉",
        nextBotState: 'initial',
        quickReplies: ['Unsere Services', 'Über uns', 'Portfolio ansehen'],
    };
}

function getTechResponse(tech: 'react' | 'nextjs' | 'typescript' | 'tailwind'): BotResponseObject {
    const responses = {
        react: "React ist eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen. Wir lieben es für interaktive und skalierbare Web-Anwendungen!",
        nextjs: "Next.js ist unser Turbo für React-Projekte! Es ist ein leistungsstarkes Framework für produktionsreife, schnelle und SEO-freundliche Anwendungen.",
        typescript: "TypeScript ist unser Code-Schutzschild! Es ist eine typisierte Obermenge von JavaScript, die uns hilft, robusteren und fehlerresistenteren Code zu schreiben.",
        tailwind: "Tailwind CSS ist unser Design-Zauberstab! Ein Utility-First CSS-Framework, das uns eine superschnelle und konsistente Gestaltung ermöglicht."
    }
    return {
        responseText: responses[tech],
        nextBotState: 'asking_tech_details',
        quickReplies: ['React', 'Next.js', 'TypeScript', 'Zurück'],
    };
}