// src/services/responseGenerator.ts
import { BotResponseObject, Intent } from '../types/chatbot';

const directResponseMap: Partial<Record<Intent, BotResponseObject>> = {
  PRICING_INQUIRY: {
    responseText: "Die Kosten für ein Projekt sind sehr individuell. Am besten beschreiben Sie uns kurz Ihr Vorhaben, dann erstellen wir Ihnen ein transparentes Angebot.",
    quickReplies: ['Kontakt', 'Unsere Services'],
  },
  OWNER_INQUIRY: {
    responseText: "Der Inhaber und Geschäftsführer von Klein Digital Solutions ist Özgür Azap.",
    quickReplies: ['Über uns', 'Kontakt'],
  },
};

export const getGenericResponse = (intent: Intent): BotResponseObject => {
  return directResponseMap[intent] || {
    responseText: "Entschuldigung, das habe ich nicht ganz verstanden. Können Sie die Frage anders formulieren?",
    quickReplies: ['Hilfe', 'Services', 'Kontakt'],
  };
};

export const getTechResponse = (tech: 'react' | 'nextjs' | 'typescript' | 'tailwind'): BotResponseObject => {
    const responses = {
        react: "React ist eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen...",
        nextjs: "Next.js ist unser Turbo für React-Projekte...",
        typescript: "TypeScript ist unser Code-Schutzschild...",
        tailwind: "Tailwind CSS ist unser Design-Zauberstab..."
    };
    return {
        responseText: responses[tech],
        nextBotState: 'awaiting_tech_choice',
        quickReplies: ['React', 'Next.js', 'TypeScript', 'Zurück'],
    };
};

const sarcasticResponseMap = {
    joke: ["Was ist grün und rennt durch den Garten? Ein Rasen-Stier! 😂", "Warum hat der Browser immer einen Kater? Weil er zu viele Tabs offen hat! 🤪"],
    strong_insult: ["Wow, starke Worte für einen Dienstleistungs-Bot! Aber ich bin nur Code. Konzentrieren wir uns lieber auf Ihr Anliegen. 😊"],
    medium_insult: ["Autsch, das war nicht sehr nett! Aber mein Code ist unzerbrechlich. Versuchen wir es nochmal."],
    informal_greeting: ["Was geht, Bro? Hier geht's nur darum, Ihre digitalen Träume in Code zu gießen!", "Yo! Bei mir läuft alles auf Hochtouren. Was geht bei Ihnen?"],
    direct_bot_greeting: ["Hallo zurück! Schön, dass Sie sich direkt an mich wenden.", "Grüße an die menschliche Intelligenz!"],
    ai_provocation: ["Sie haben mich ertappt! Ich bin tatsächlich eine intelligente Maschine. Aber eine sehr freundliche, versprochen! 😉"]
};

type SarcasticType = keyof typeof sarcasticResponseMap;

export const getSarcasticResponse = (type: SarcasticType): BotResponseObject => {
    const selectedResponses = sarcasticResponseMap[type];
    return {
        responseText: selectedResponses[Math.floor(Math.random() * selectedResponses.length)],
        quickReplies: ['Unsere Services', 'Portfolio', 'Hilfe'],
    };
};